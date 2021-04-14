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
import { useRouter } from 'next/router'
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
    padding:'1vh',
    margin:'1vh'
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

export default function AdminWorkProps(props) {

  const { className, ...other } = props;

  const { user , type } = useAuth();
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const [  workName, setWorkName ] = useState(props.work.name);
  const [ workNameError, setWorkNameError ] = useState('');
  const [ users, setUsers ] = useState([]);
  const [ filtered, setFiltered ] = useState([]);
  const [ temp, setTemp ] = useState([]);
  const [ faculty, setFaculty ] = useState('');
  const [ links, setLinks ] = useState(props.work.links);
  const [ userLinks, setUserLinks ] = useState(props.work.userLinks);
  const [ description , setDescription ] = useState(props.work.description);
  const [ descriptionError, setDescriptionError ] = useState('');
  const [ facultyError, setFacultyError ] = useState('');
  const [ file , setFile ] = useState(props.work.user.files);
  const [ userType, setUserType ] = useState('---Select---');
  const [ typeError, setTypeError ] = useState('');
  const router = useRouter();
  const firestore = firebase.firestore();
  const storage = firebase.storage();

  const { signupWithEmail } = useAuth();

  const handleAddFiles = files => {
      var lst =[]
      for(let i=0;i<files.length;i++){
          lst.push(files[i])
      }
      setFile(lst)
  }


  const handleRemove = (e) => {
    e.preventDefault();
    const ref =storage.ref().child(`work/${props.work.user.uid}/${props.work.assigned.uid}/${props.work.id}`);
    ref.listAll()
       .then(function(list) {
         list.items.forEach((item)=>{
           item.delete().then((url)=>{
             console.log(url)
           })
         })
       })
       .catch((err)=>{
         console.log(err)
       })
    firestore
      .collection('work')
      .doc('admin')
      .collection(props.work.user.uid)
      .doc(props.work.assigned.uid)
      .delete()
      .then((response) => {
        firestore
          .collection('work')
          .doc(props.work.id)
          .delete()
          .then((response) => {
            enqueueSnackbar("Work Successfully Removed", { variant: 'success'})
          })
          .catch((err) =>{ 
            enqueueSnackbar("Error Occured!! Try again",{variant:'error'})
          })
      })
      .catch((err) =>{ 
        enqueueSnackbar("Error Occured!! Try again",{variant:'error'})
      })
      props.close();
      
  }

  const handleSave = (e) => {
      e.preventDefault();
      setWorkNameError(checkname(workName));
      setDescriptionError(description.length>5?"":"Description not long enough")
      if(description.length>5 && checkname(workName)=== "" ){
        firestore
        .collection('work')
        .doc(props.work.id)
        .set({
          name:workName,
          description: description,
          completed:props.work.completed,
        },{merge:true})
        .then((response ) => {
              enqueueSnackbar("Changes Saved", {variant:'success'})
          })
          .catch((err)=>{
            enqueueSnackbar("Error Occured", {variant:'error'})
          })
      }
      props.close();
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
              <Grid item xs={12} >
              <TextField
                  name="user"
                  fullWidth
                  multiline
                  id="user"
                  disabled
                  value={props.work.assigned.first_name +" ("+props.work.assigned.cid+")"}
                  label="Assigned to"
                  autoFocus
                  variant="outlined"
              />
              </Grid>
              <Grid item xs={12}>
                {props.work.files.length>0 &&
                    props.work.files.map((item,index)=>{
                        return(
                            <div className={classes.chip} key={index}>
                              <Button size="small" onClick={()=>window.open(links[index],"_blank")}>
                                {item}
                              </Button>
                            </div>
                        )
                    })
                }
                </Grid> 
                <Grid item xs={12}>
                {props.work.userFiles.length>0 &&
                    props.work.userFiles.map((item,index)=>{
                        return(
                            <div className={classes.chip} key={index}>
                              <Button size="small" onClick={()=>window.open(userLinks[index],"_blank")}>
                                {item}
                              </Button>
                            </div>
                        )
                    })
                }
                </Grid> 
                <Grid item xs={6}>
                <Button onClick={handleSave} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                    Save Changes
                </Button>
                </Grid>
                <Grid item xs={6}>
                <Button 
                    fullWidth
                    className={clsx(classes.remove, className)}
                    variant="contained"
                    onClick={handleRemove}
                    component="label">
                    Remove Work
                </Button>
                </Grid>
          </Grid>
          <Grid container justify="flex-end" className={classes.button}>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
