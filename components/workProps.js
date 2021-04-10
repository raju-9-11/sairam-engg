import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { CircularProgress, makeStyles, MenuItem } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { checkPassword , checkEmail, checkname, checkCid, checkExp, checkSkill } from '../lib/func'
import { useSnackbar } from 'notistack';
import { useAuth } from '../lib/auth'
import { useRouter } from 'next/router'
import firebase from '../lib/firebase'
import Autocomplete from '@material-ui/lab/Autocomplete';
import clsx from 'clsx';
import { Label } from '@material-ui/icons';
import Chip from '@material-ui/core/Chip';


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

export default function WorkProps(props) {

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
  const [ links, setLinks ] = useState([]);
  const [ loading, setLoading ] = useState(false)
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
      setFacultyError(faculty===""?"Select a user":"")
  }

  const handleWorkDone = (e) => {
    e.preventDefault();
  }

  const handleDownload = (e) => {
    e.preventDefault();
    setLoading(true)
    let lst =[]
    props.work.files.forEach((val)=>{
      storage.ref()
        .child(`work/${props.work.user.uid}/${props.work.assigned.uid}/${props.work.name}/${val}`)
        .getDownloadURL()
        .then((url)=>{
          lst.push(url)
          setLinks([url,...links])
        })
        .catch((err)=>{
          enqueueSnackbar("Error Occured",{variant:'error'});
          console.log(err)
          setLoading(false)
        })
        
      })
      setLoading(false)
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
                name="workName"
                fullWidth
                value={props.work.name}
                id="workName"
                label="Work"
                variant="outlined"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                  name="description"
                  fullWidth
                  multiline
                  id="description"
                  value={props.work.description}
                  label="Work Description"
                  autoFocus
                  variant="outlined"
              />
              </Grid>
              <Grid item xs={12} >
              <TextField
                  name="owner"
                  fullWidth
                  id="owner"
                  value={props.work.user.first_name+" ("+props.work.user.cid+")"}
                  label="Assigned by"
                  autoFocus
                  variant="outlined"
              />
              </Grid>
              {/* <Grid item xs={12}>
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
                    onChange={(event, value) =>setFaculty(faculty)}
                    renderInput={(params) => <TextField {...params} error={facultyError!=''} helperText={facultyError} label="Select User" variant="outlined" />}
                    />}
            </Grid> */}
            {links.length>0 &&
              <>
              <Grid item xs={12}>
                  {links.map((item,index)=>{
                      return(
                          <div className={classes.chip} key ={index}>
                            <Button size="small" href={item} >
                              {props.work.files[index]}
                            </Button>
                          </div>
                      )
                  })}
                  </Grid>
                  </>
            }
            {props.work.files.length>0 &&
              <>
              <Grid item xs={12}>
                  {props.work.files.map((item,index)=>{
                      return(
                          <div className={classes.chip} key ={index}>
                            <Button size="small" >
                              {item}
                            </Button>
                          </div>
                      )
                  })}
                  {links.length<props.work.files.length &&
                   <Button onClick={handleDownload} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} className={classes.button}>
                      Download Files
                  </Button>}
              </Grid> 
              </>
              }
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
                            <Button size="small" >
                              {item.name}
                            </Button>
                        </div>
                    )
                })
            }
            </Grid>
          </Grid>
         {/* {props.work.completed && 
         <Button onClick={handleCreate} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} className={classes.button}>
            
          </Button>} */}

          {!props.work.completed &&
          <Button onClick={handleWorkDone} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} className={classes.button}>
            Mark as Done
          </Button>}
          <Grid container justify="flex-end" className={classes.button}>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
