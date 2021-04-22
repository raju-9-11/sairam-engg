import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { CircularProgress, makeStyles, MenuItem } from '@material-ui/core';
import ToggleButton from '@material-ui/lab/ToggleButton';
import { useCallback, useEffect, useRef, useState } from 'react';
import { checkPassword , checkEmail, checkname, checkCid, checkExp, checkSkill } from '../lib/func'
import { useSnackbar } from 'notistack';
import { useAuth } from '../lib/auth'
import firebase from '../lib/firebase'
import clsx from 'clsx';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CheckIcon from '@material-ui/icons/Check'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { KeyboardDatePicker } from '@material-ui/pickers';

const useStyles = makeStyles({
  root: {
      width:'100%',
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

export default function WorkProps(props) {

  const { className, ...other } = props;

  const { user , type } = useAuth();
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const [ selected, setSelected ] = useState(props.work.completed)
  const [ file , setFile ] = useState([]);
  const [ links, setLinks ] = useState(props.work.links);
  const [ userLinks, setUserLinks ] = useState(props.work.userLinks);
  const [ loading, setLoading ] = useState(false)
  const firestore = firebase.firestore();
  const storage = firebase.storage();
  const [ remarks, setRemarks ] = useState(props.work.remarks)
  const [ remError, setError ] = useState('')
  
  const { signupWithEmail } = useAuth();


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

  }



  const handleSave = (e) => {
    e.preventDefault();
    if(file.length>0 ){
      file.map((doc)=>{
        let ref = storage.ref().child(`work/${props.work.user.uid}/${props.work.assigned.uid}/${props.work.id}/${doc.name}`);
        ref
          .put(doc)
          .then((snap)=>{
            ref
              .getDownloadURL()
              .then((url)=>{
                firestore
                  .collection('work')
                  .doc(props.work.id)
                  .update({
                    userFiles: firebase.firestore.FieldValue.arrayUnion(doc.name),
                    userLinks: firebase.firestore.FieldValue.arrayUnion(url)
                  })
              })
          })
          .catch((err)=>{
            enqueueSnackbar('Error Uploading Files Try again',{variant:'error'})
          })
        })
      }
    enqueueSnackbar("Work saved",{variant:'success'})
    props.close();

  }

  const handleWorkDone = (e) => {
    e.preventDefault();
    if(props.work.completed){
      enqueueSnackbar("Upload old files after making changes")
    }else{
      if(remarks===''){
        setError('Remarks cannot be empty');
        return;
      }
      setError('');
    }
    firestore
      .collection('work')
      .doc(props.work.id)
      .set({
        completed: !props.work.completed,
        userFiles: file.length>0? file.map(val=>val.name) : [],
        remarks: remarks
      },{merge:true})
      .then((response)=> {
        if(file.length>0 ){
          file.map((doc)=>{
            let ref = storage.ref().child(`work/${props.work.user.uid}/${props.work.assigned.uid}/${props.work.id}/${doc.name}`);
            ref
              .put(doc)
              .then((snap)=>{
                ref
                  .getDownloadURL()
                  .then((url)=>{
                    firestore
                      .collection('work')
                      .doc(props.work.id)
                      .update({
                        userLinks: firebase.firestore.FieldValue.arrayUnion(url)
                      })
                  })
              })
              .catch((err)=>{
                enqueueSnackbar('Error Uploading Files Try again',{variant:'error'})
              })
            })
          }
        enqueueSnackbar("Work status updated",{variant:'success'})
        props.close();
      })
      .catch((err)=>{
        enqueueSnackbar("Error updating ",{variant:'error'})
        console.log(err)
      })
  }

  const handleDownload = (e) => {
    e.preventDefault();
    
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
                disabled
                fullWidth
                value={props.work.name}
                id="workName"
                label="Task Name"
                variant="outlined"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                  name="description"
                  disabled
                  fullWidth
                  multiline
                  id="description"
                  value={props.work.description}
                  label="Task Description"
                  autoFocus
                  variant="outlined"
              />
              </Grid>

              <Grid item xs={12}>
                  <TextField
                      name="lead"
                      fullWidth
                      disabled
                      id="lead"
                      value={props.work.user.first_name+" ("+props.work.user.cid+")"}
                      label={"Assigned by" }
                      autoFocus
                      variant="outlined"
                  />
                </Grid>
              <Grid item xs={12} >
              <TextField
                  name="owner"
                  disabled
                  fullWidth
                  id="owner"
                  value={props.work.nature}
                  label="Task Nature"
                  autoFocus
                  variant="outlined"
              />
              </Grid>
              <Grid item xs={12} >
              <TextField
                  name="owner"
                  disabled
                  fullWidth
                  id="owner"
                  value={props.work.priority}
                  label="Task Priority"
                  autoFocus
                  variant="outlined"
              />
              </Grid>

              <Grid item xs={6} >
              <KeyboardDatePicker
                disableToolbar
                disabled
                inputVariant="outlined"
                fullWidth
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Created At"
                value={props.work.createdAt.toDate()}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
              </Grid>
              <Grid item xs={6} >
              <KeyboardDatePicker
                disableToolbar
                disabled
                inputVariant="outlined"
                fullWidth
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker"
                label="Due Date"
                value={props.work.dueDate.toDate()}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
              </Grid>
          
              {props.work.team!=undefined && props.work.team.length>0 &&
                 <Grid item xs={12}>
                  <TextField
                      name="lead"
                      fullWidth
                      disabled
                      id="lead"
                      value={props.work.assigned.first_name+" ("+props.work.assigned.cid+")"}
                      label={"Team Lead" }
                      autoFocus
                      variant="outlined"
                  />
                </Grid>
              }

              {props.work.team!=undefined && props.work.team.length>0 &&
                 <Grid item xs={12}>
                 <Autocomplete
                     id="team"
                     multiple
                     value={props.work.team}
                     options={props.work.team}
                     getOptionLabel={(option) => option.first_name+ " " +option.last_name+" ("+option.cid+")"}
                     renderInput={(params) => <TextField {...params} label="My Team" variant="outlined" />}
                     />
                </Grid>
              }
                {props.work.files.length>0 &&
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
                }
                {props.work.userFiles.length>0 &&
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
                }
              
            {!props.work.completed &&
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
            }
            {!props.work.completed &&
            <Grid item xs={6}>
              <Button 
                  fullWidth
                  className={clsx(classes.remove, className)}
                  variant="contained"
                  onClick={()=>handleAddFiles([])}
                  component="label">
                  Remove
              </Button>
              </Grid>
            }
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
            <Grid item xs={12}>
                  <TextField
                      autoComplete="off"
                      name="rem"
                      fullWidth
                      disabled={props.work.completed || props.work.assigned.uid!==user.uid}
                      id="rem"
                      value={remarks}
                      onChange={(Event)=>setRemarks(Event.target.value)}
                      label={"Remarks" }
                      error={remError!=''}
                      helperText={remError}
                      variant="outlined"
                  />
                </Grid>

          </Grid>

          {!props.work.completed && props.work.assigned.uid!==user.uid &&
          <Button onClick={handleSave} fullWidth  variant="contained" sx={{ mt: 3, mb: 2 }} className={classes.button}>
            <CheckIcon /> Save Work
           </Button>
          }

          {!props.work.completed && props.work.assigned.uid===user.uid &&
          <Button onClick={handleWorkDone} fullWidth  variant="contained" sx={{ mt: 3, mb: 2 }} className={classes.button}>
            <CheckIcon /> Mark as Done
           </Button>
          }
          {!props.work.approved && props.work.completed  &&
          <Button onClick={handleWorkDone} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} className={classes.button}>
            <CheckCircleIcon /> Submitted
           </Button>
          }
          <Grid container justify="flex-end" className={classes.button}>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
