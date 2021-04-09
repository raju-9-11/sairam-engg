import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { useSnackbar } from 'notistack';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import firebase from '../../lib/firebase';
import { useRouter } from 'next/router'


const useStyles = makeStyles((theme) => ({
    root: {
        padding:'2vh 5vh 5vh 5vh',
    }
}))
export default function AddSkill() {


    const { enqueueSnackbar } = useSnackbar()

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [ skill, setSkill ] = React.useState('');
    const [ description, setDescription ] = React.useState('');
    const [ image, setImage ] = React.useState('')
    const firestore = firebase.firestore();
    const [ nameError , setNameError ] = React.useState('');
    const [ descError, setDecsError ] = React.useState('');
    const router = useRouter();

    const handleSkillChange = (val) => {
        setSkill(val);
    }
    
    const handleDescriptionChange = (val) => {
        setDescription(val);
    }

    const handleImageChange = (val) => {
        setImage(val)
    }

    const handleClickOpen = () => {
    setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
      setNameError(skill.length<3?'Name should be atleast 3 characters long':'');
      setDecsError(description.length<3?'Name should be atleast 3 characters long':'');
      if(skill.length<3 ||  description.length<3){
        return;
      }
      firestore
        .collection('skills')
        .doc(skill.split(" ").join("").toLowerCase())
        .set( {
          name: skill,
          description: description,
          image: image
        })
        .then((response) =>{
          enqueueSnackbar("Skill added", { variant: 'success'})
          setSkill('');
          setImage('');
          setDescription('');
          // router.reload()
        })
        .catch((err) => {
          console.log(err)
          enqueueSnackbar("An error occured", { variant: 'error'})
        })

      setOpen(false);
  };
    

  return (
    <div >
      <Button size = "small" onClick={handleClickOpen}>
        Add Skill
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Skill</DialogTitle>
        <DialogContent  className={classes.root}>
          <DialogContentText>
          To Add or modify skill , please enter the required details.
          </DialogContentText>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
            <TextField
                autoFocus
                variant="outlined"
                margin="dense"
                id="name"
                value={skill}
                error={nameError!=''}
                helperText={nameError}
                onChange={(Event)=>handleSkillChange(Event.target.value)}
                label="Skill Name"
                type="name"
                fullWidth
            />
            </Grid>
            <Grid item xs={12} sm={6}>
            <TextField
                autoFocus
                variant="outlined"
                margin="dense"
                id="img"
                value={image}
                onChange={(Event) =>handleImageChange(Event.target.value)}
                label="Image URL"
                fullWidth
            />
            </Grid>
            <Grid item xs={12} >
            <TextField
                autoFocus
                variant="outlined"
                margin="dense"
                value={description}
                helperText={descError}
                value={description}
                onChange={(Event) => handleDescriptionChange(Event.target.value)}
                id="description"
                label="Skill Description"
                fullWidth
            />
            </Grid>
        </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
