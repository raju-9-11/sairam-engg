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
    padding:'1vh'
  }
})

const types = [
    {
        type:0,
        name:'User'
    },
    {
        type:1,
        name:'Admin'
    }
];

export default function AssignWork(props) {

  const { className, ...other } = props;

  const { user , type } = useAuth();
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const [  workName, setWorkName ] = useState('');
  const [ workNameError, setWorkNameError ] = useState('');
  const [ users, setUsers ] = useState([]);
  const [ filtered, setFiltered ] = useState([]);
  const [ temp, setTemp ] = useState([]);
  const [ faculty, setFaculty ] = useState('');
  const [ description , setDescription ] = useState('');
  const [ descriptionError, setDescriptionError ] = useState('');
  const [ facultyError, setFacultyError ] = useState('');
  const [ file , setFile ] = useState([]);
  const [ userType, setUserType ] = useState('---Select---');
  const [ typeError, setTypeError ] = useState('');
  const [ self, setSelf ] = useState({});
  const firestore = firebase.firestore();
  const storage = firebase.storage();

  const { signupWithEmail } = useAuth();


  useEffect(()=>{
      const num = types.filter(val=>val.name===userType)
      if(num.length>0){
          const final = users.filter(val=>val.item.type===num[0].type)
          setFiltered(final)
      }else{
          setFiltered([])
      }
  },[userType])


  useEffect(() =>{ 
    firestore
      .collection('users')
      .get()
      .then((response) => {
        var lst =[]
        response.forEach((use) =>{
          if(use.id===user.uid){
            setSelf({...use.data()})
          }
          lst.push(use.data());
        })
        setTemp(lst);
        const correctlyShapedArray = lst.map(val => ({
            item: Object.assign(val, {}),
            matches: [],
            score: 1
        }));
          setUsers(correctlyShapedArray);
      })
  },[])

  const handleAddFiles = files => {
      var lst =[]
      for(let i=0;i<files.length;i++){
          lst.push(files[i])
      }
      setFile(lst)
  }

  const handleCreate = (e) => {
      e.preventDefault();
      setWorkNameError(checkname(workName));
      setDescriptionError(description.length>5?"":"Description not long enough")
      setFacultyError(faculty.item===undefined?"Select a user":"")
      // try{
      // }
      // catch(err){
      //   return;
      // }

        if(faculty.item!=undefined && description.length>5 && checkname(workName)=== "" ){
          firestore
            .collection('work')
            .doc()
            .set({
              user:self,
              assigned:faculty.item,
              name:workName,
              description: description,
              completed:false,
              files: file.length>0? file.map(val=>val.name) : []
            })
            .then((response ) => {
              // firestore
              //   .collection('work')
              //   .doc('user')
              //   .collection(faculty.item.uid)
              //   .doc(user.uid)
              //   .set({
              //     user:self,
              //     assigned:faculty.item,
              //     name:workName,
              //     description: description,
              //     completed:false,
              //     files: file.length>0? file.map(val=>val.name) : []
              //   })
              //   .then((response) => {
                  if(file.length>0){
                    file.map((doc)=>{
                      let ref = storage.ref().child(`work/${user.uid}/${faculty.item.uid}/${workName}/${doc.name}`);
                      ref
                        .put(doc)
                        .then((snap)=>{
                          // enqueueSnackbar("success")
                        })
                        .catch((err)=>{
                          enqueueSnackbar('Error Uploading Files Try again',{variant:'error'})
                        })
                      })
                    }
                    enqueueSnackbar("Work Assigned", {variant:'success'})
                  setWorkName('');
                  setDescription('');
                  setFile([]);
              //   })
              //   .catch((err)=>{
              //     enqueueSnackbar("Error Occured", {variant:'error'});
              //   })
            })
            .catch((err)=>{
              enqueueSnackbar("Error Occured ", {variant:'error'})
            })
        }else{
          return;
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
                autoComplete='off'
                name="workName"
                required
                fullWidth
                value={workName}
                onChange={(Event)=>setWorkName(Event.target.value)}
                error={workNameError!=''}
                helperText={workNameError}
                id="workName"
                label="Work"
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
                  label="Work Description"
                  autoFocus
                  variant="outlined"
              />
              </Grid>
              <Grid item xs={12}>
                <TextField
                select
                fullWidth
                label="User type"
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
                {users&&
                <Autocomplete
                    id="demo"
                    options={filtered}
                    getOptionLabel={(option) => option.item.first_name+ " " +option.item.last_name+" ("+option.item.cid+")"}
                    onChange={(event, value) =>setFaculty(value)}
                    renderInput={(params) => <TextField {...params} error={facultyError!=""} helperText={facultyError} label="Select User" variant="outlined" />}
                    />}
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
