import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Copyright from '../../components/Copyright';
import { makeStyles, MenuItem } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { checkPassword , checkEmail, checkname, checkCid, checkExp, checkSkill } from '../../lib/func'
import { useSnackbar } from 'notistack';
import { useAuth } from '../../lib/auth'
import firebase from '../../lib/firebase'
import Autocomplete from '@material-ui/lab/Autocomplete';
import clsx from 'clsx';
import { Label } from '@material-ui/icons';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import isValid from 'date-fns/isValid'
import { priority , nature, typeList } from '../../lib/var'
import { getUserDetails, getUsers } from '../../lib/db';


const useStyles = makeStyles({
  root: {
      width:'100%'
  },
  form:{
  },
  button: {
    marginTop: '3vh'
  },
  box:{
    padding: '10vh',
    paddingTop: '25vh'
  },
  remove: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: 'white',
  },
  chip: {
    border:'0.2px solid grey',
    borderRadius:'3vh',
    width:"inherit",
    display:'inline-flex',
    padding:'1vh',
    margin:'1vh'
  }
})




export default function AssignWork(props) {
  
  const { className, ...other } = props;
  
  const { user } = useAuth();
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const types = typeList[user.type-1]

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [  workName, setWorkName ] = useState('');
  const [ workNameError, setWorkNameError ] = useState('');
  const [ users, setUsers ] = useState([]);
  const [ filtered, setFiltered ] = useState([]);
  const [ temp, setTemp ] = useState([]);
  const [ faculty, setFaculty ] = useState(null);
  const [ description , setDescription ] = useState('');
  const [ descriptionError, setDescriptionError ] = useState('');
  const [ facultyError, setFacultyError ] = useState('');
  const [ file , setFile ] = useState([]);
  const [ userType, setUserType ] = useState('---Select---');
  const [ typeError, setTypeError ] = useState('');
  const [ lead, setLead ] = useState(null);
  const [ team, setTeam ] = useState([]);
  const [ self, setSelf ] = useState({});
  const [ taskNature, setTaskNature ] = useState(null)
  const [ taskPriority, setTaskPriority ] = useState(null);
  const [ leadError, setLeadError ] = useState('');
  const [ teamError, setTeamError ] = useState([]);
  const [ taskNatureError, setTaskNatureError ] = useState('');
  const [ priorityError, setPriorityError ] = useState('');
  const firestore = firebase.firestore();
  const storage = firebase.storage();


  useEffect(()=>{
      const num = types.filter(val=>val.name===userType)
      if(num.length>0){
          const final = users.filter(val=>val.item.type===num[0].type && val.item.uid!=user.uid)
          setFiltered(final)
      }else{
          setFiltered([])
      }
  },[userType])


  useEffect(() =>{ 
      async function getData () {
        const data = await getUsers();
        const currUser = await getUserDetails(user.uid);
        setSelf({...currUser.data()})
        var lst =[]
        for(const doc of data.docs){
            lst.push(doc.data());
        }
        setTemp(lst);
        const correctlyShapedArray = lst.map(val => ({
            item: Object.assign(val, {}),
            matches: [],
            score: 1
        }));
          setUsers(correctlyShapedArray);
      }
      getData();

  },[])

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAddFiles = files => {
      var lst =[]
      for(let i=0;i<files.length;i++){
        if(/^\d/.test(files[i].name)){
          enqueueSnackbar('File name should start with character',{variant:'error'}) 
          setFile([])
          return;
        }
          lst.push(files[i])
      }
      setFile(lst)
  }
  
  const handleCreate = (e) => {
    e.preventDefault();
    
    setWorkNameError(checkname(workName));
    setDescriptionError(description.length>5?"":"Description not long enough")
    setFacultyError(faculty===null?"Select a user":"")
    setLeadError(lead===null?"Select a user":"")
    setTeamError(team.length===0?"Select atleast one user": "")
    setPriorityError(taskPriority===null?"Select a priority":"")
    setTaskNatureError(taskNature===null?"Select a item": "")

        if(isValid(selectedDate) && ((lead!=null && team.length>0 && taskNature.id>1 ) || (faculty!=null && taskNature.id<2 ) )&& description.length>5 && checkname(workName)=== "" ){

          let obj = {
            user:self.uid,
            name:workName,
            description: description,
            completed:false,
            files: file.length>0? file.map(val=>val.name) : [],
            links:[],
            userFiles: [],
            userLinks: [],
            priority: taskPriority.name,
            nature: taskNature.name,
            createdAt: new Date(),
            dueDate: selectedDate,
            approved:false,
            owner_type: self.type
          }


            if(taskNature.id<2){
              obj.assigned = faculty.item.uid;
            }else{
              obj.assigned = lead.item.uid;
              obj.team = team.map((val)=>val.uid);
            }



          firestore
            .collection('work')
            .add(obj)
            .then((response ) => {
                if(file.length>0){
                  file.map((doc)=>{
                    let ref = storage.ref().child(`work/${user.uid}/${taskNature.id<2? faculty.item.uid : lead.item.uid }/${response.id}/${doc.name}`);
                    ref
                      .put(doc)
                      .then((snap)=>{
                        ref
                          .getDownloadURL()
                          .then((url)=>{
                            firestore
                              .collection('work')
                              .doc(response.id)
                              .update({
                                links: firebase.firestore.FieldValue.arrayUnion(url)
                              })
                          })
                      })
                      .catch((err)=>{
                        enqueueSnackbar('Error Uploading Files Try again',{variant:'error'})
                      })
                    })
                  }
                  props.close()
                  enqueueSnackbar("Work Assigned", {variant:'success'})
                  setWorkName('');
                  setDescription('');
                  setFile([]);
            })
            .catch((err)=>{
              enqueueSnackbar("Error Occured ", {variant:'error'})
              console.log(err.message)
            })
        }
  }


  return (
    <Container component="main" maxWidth="sm" className={classes.root}>
      <Box className={classes.form}>
        <Box
          component="form"
          noValidate
          sx={{
            width: '100%', // Fix IE11 issue.
            mt: 3,
          }}
        >
          <Grid container spacing={5}>
          <Grid item xs={12}>
                <TextField
                select
                fullWidth
                label="Task Assigned to"
                value={userType}
                onChange={(Event)=>setUserType(Event.target.value)}
                error={typeError!=''}
                helperText={typeError}
                variant="outlined"
                >
                <MenuItem key={'0a2'} value={'---Select---'}>
                    {'---Select---'}
                    </MenuItem>
                {types.map((option) => (
                    <MenuItem key={option.type} value={option.name}>
                    {option.name}
                    </MenuItem>
                ))}
                </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete='off'
                name="workName"
                required
                fullWidth
                value={workName}
                onChange={(Event)=>setWorkName(Event.target.value)}
                error={workNameError!=''}
                helperText={workNameError}
                id="workName"
                label="Task name"
                variant="outlined"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                  name="description"
                  required
                  fullWidth
                  multiline
                  id="description"
                  value={description}
                  onChange={(Event)=>setDescription(Event.target.value)}
                  error={descriptionError!=''}
                  helperText={descriptionError}
                  label="Task Description"
                  autoFocus
                  variant="outlined"
              />
              </Grid>
              <Grid item xs={12} >
                {nature &&
                <Autocomplete
                    id="nature"
                    required
                    options={nature}
                    getOptionLabel={(option) => option.name}
                    onChange={(event, value) =>setTaskNature(value)}
                    renderInput={(params) => <TextField {...params} error={taskNatureError!=""} helperText={taskNatureError} label="Task Nature" variant="outlined" />}
                    />}
              </Grid>
              <Grid item xs={12} >
              {priority &&
                <Autocomplete
                    id="priority"
                    required
                    options={priority}
                    getOptionLabel={(option) => option.name}
                    onChange={(event, value) =>setTaskPriority(value)}
                    renderInput={(params) => <TextField {...params} error={priorityError!=""} helperText={priorityError} label="Task Priority" variant="outlined" />}
                    />}
              </Grid>
            {taskNature!=null  && taskNature.id<2 &&
              <Grid item xs={12}>
                {users&&
                <Autocomplete
                    id="user"
                    required={taskNature.id<2}
                    options={filtered}
                    getOptionLabel={(option) => option.item.first_name+ " " +option.item.last_name+" ("+option.item.cid+")"}
                    onChange={(event, value) =>setFaculty(value)}
                    renderInput={(params) => <TextField {...params} error={facultyError!=""} helperText={facultyError} label="Select User" variant="outlined" />}
                    />}
            </Grid>}
            
            
            {taskNature!=null   && taskNature.id>1 &&
             <>
             <Grid item xs={12}>
                {users&&
                <Autocomplete
                    id="lead"
                    required={taskNature.id>1}
                    options={filtered.filter((val)=>val.item.uid)}
                    getOptionLabel={(option) => option.item.first_name+ " " +option.item.last_name+" ("+option.item.cid+")"}
                    onChange={(event, value) =>setLead(value)}
                    renderInput={(params) => <TextField {...params} error={leadError!=""} helperText={leadError} label="Select Lead" variant="outlined" />}
                    />}
            </Grid>
                {users && lead!=null &&
            <Grid item xs={12}>
                <Autocomplete
                    id="team"
                    multiple
                    required={taskNature.id>1}
                    options={filtered.filter((val)=>val.item.uid!=lead.item.uid)}
                    getOptionLabel={(option) => option.item.first_name+ " " +option.item.last_name+" ("+option.item.cid+")"}
                    onChange={(event, value) =>setTeam(value.map((val)=>val.item))}
                    renderInput={(params) => <TextField {...params} error={teamError!=""} helperText={teamError} label="Select Team" variant="outlined" />}
                    />
            </Grid>
                    }
            </>}

            <Grid item xs={12} >
              <KeyboardDatePicker
                disableToolbar
                required
                inputVariant="outlined"
                fullWidth
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Task Due Date"
                value={selectedDate}
                error={!isValid(selectedDate)}
                minDate={new Date()}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
              </Grid>
            <Grid item xs={6}>

            <Button 
                fullWidth
                variant="contained"
                component="label">
                Upload Files
                <input
                    type="file"
                    hidden
                    multiple
                    onChange={(Event)=>handleAddFiles(Event.target.files)}
                />
            </Button>
            </Grid>
            <Grid item xs={6}>
            <Button 
                fullWidth
                className={clsx(classes.remove, className)}
                variant="contained"
                onClick={()=>handleAddFiles({})}
                component="label">
                Remove
            </Button>
            </Grid>
            <Grid item xs={12}>
            {file.length>0 &&
                file.map((item,index)=>{
                    return(
                        <div className={classes.chip} key ={index}>
                          <Button size="small">
                            {item.name}
                          </Button>
                        </div>
                    )
                })
            }
            </Grid>
          </Grid>
          <Button onClick={(Event)=>handleCreate(Event)} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} className={classes.button}>
            Create Work
          </Button>
          <Grid container justify="flex-end" className={classes.button}>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
