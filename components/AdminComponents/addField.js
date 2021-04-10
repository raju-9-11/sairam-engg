import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router'
import firebase from '../../lib/firebase'


const useStyles = makeStyles((theme) => ({
    root: {
        padding:'2vh 5vh 5vh 5vh',
    }
}))

export default function AddField() {
    
    const { enqueueSnackbar } = useSnackbar()
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [ field, setField ] = React.useState('');
    const [ description, setDescription ] = React.useState('');
    const [ image, setImage ] = React.useState('')
    const firestore = firebase.firestore();
    const [ nameError , setNameError ] = useState('');
    const [ descError, setDecsError ] = useState('');

    const router = useRouter();

    const handleFieldChange = (val) => {
        setField(val);
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
      setNameError(field.length<3?'Name should be atleast 3 characters long':'');
      setDecsError(description.length<3?'Name should be atleast 3 characters long':'');
      if(field.length<3 ||  description.length<3){
        return;
      }
      firestore
        .collection('fields')
        .doc(field.split(" ").join("").toLowerCase())
        .set( {
          name: field,
          description: description,
          image: image
        })
        .then((response) =>{
          enqueueSnackbar("Field added", { variant: 'success'})
          // router.reload()
          setDescription('');
          setField('');
          setImage('');
          setOpen(false);
        })
        .catch((err) => {
          console.log(err)
          enqueueSnackbar("An error occured", { variant: 'error'})
        })

  };

  return (
    <div >
      <Button size = "small" onClick={handleClickOpen}>
        Add Field
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Field</DialogTitle>
        <DialogContent  className={classes.root}>
          <DialogContentText>
            To Add or modify field , please enter the required details.
          </DialogContentText>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
            <TextField
                autoFocus
                required
                variant="outlined"
                margin="dense"
                id="name"
                value={field}
                error={nameError!=''}
                helperText={nameError}
                onChange={(Event)=>handleFieldChange(Event.target.value)}
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
                multiline
                required
                variant="outlined"
                margin="dense"
                error={descError!=''}
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
          <Button onClick={()=>handleSave()} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
