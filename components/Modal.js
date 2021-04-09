import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import firebase from '../lib/firebase'
import { useSnackbar } from 'notistack'
import { useAuth } from '../lib/auth';


const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const useStyles = makeStyles((theme) => ({
  imageuploader: {
    marginTop:'5vh',
    display:'flex',
    flexDirection:'column',
    float:'right',
  },
  root: {
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
  },
  image: {
    width:'100%'
  }
}))

export default function ResponsiveDialog({skill}) {
  const [value, setValue] = React.useState(0);
  const [hover, setHover] = React.useState(-1);
  const [open, setOpen] = React.useState(false);
  const [ image, setImage ] = React.useState(null);
  const [ imageUrl, setImageUrl ] = React.useState('');
  const { user } = useAuth();
  const classes = useStyles();
  const theme = useTheme();
  const { enqueueSnackbar } = useSnackbar();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  
  const firestore = firebase.firestore();
  const skillid = skill.id
  const storage = firebase.storage();
  const storageRef = storage.ref();
  var imagesRef = storageRef.child(`${skill.id}/${user.uid}.jpg`);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    if(value>3 && image==null){
      enqueueSnackbar('Upload a certificate to continue',{variant:'error'})
      return;
    }
    var pattern = /image-*/;

    if (value>3 && !image.type.match(pattern)) {
      enqueueSnackbar('Invalid file format',{variant:'error'});
      return;
    }
    
    imagesRef 
      .put(image)
      .then((response) => {
        enqueueSnackbar('Certificate Upload Successfull',{variant:'success'})
      })
      .catch((err) => {
        enqueueSnackbar('Certificate Upload failed',{variant:'error'})
      })
    firestore
      .collection('users')
      .doc(user.uid)
      .set({
        [skillid]:{
          points: value,
          url:''
        }
      },{merge:true})
      .then((response) => {
        enqueueSnackbar('Skill points updated',{variant:'success'})
        setOpen(false)
      })
      .catch((err)=>{ 
        enqueueSnackbar('Error contacting server',{variant:'error'})
      })
  }

  useEffect(()=>{

    imagesRef
      .getDownloadURL()
      .then((url) => {
        setImageUrl(url)
      })
      .catch((err) => {
        //
      })
    
    firestore
      .collection('users')
      .doc(user.uid)
      .onSnapshot((snap) => {
        if(snap.data()[skillid]){
          setValue(snap.data()[skillid].points)
        }
      })
  
  },[])

  return (
    <div>
      <Button  color="primary" onClick={handleClickOpen}>
        Update Skill Points
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{
          "How skilled are you at "+ skill.name.toLowerCase() +" ?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div className={classes.root}>
              <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                onChange={(event, newValue) => {
                  setValue(newValue);
                  if(newValue<4){
                    setImage(null)
                  }
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
              />
              {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
              {image!==null && <img src={URL.createObjectURL(image)} width={'100%'} />}
              {imageUrl!=='' && image===null && <img src={imageUrl} width={'100%'}/>}
            {value>=3 &&(
              <div className={classes.imageuploader}>
                <Button
                    variant="contained"
                    component="label"
                  >
                    {image==null && imageUrl===''? 'Upload certificate' : 'Change File' }
                    <input
                      accept='image/*'
                      type="file"
                      hidden
                      onChange={(Event)=>setImage(Event.target.files[0])}
                    />
                  </Button>
                  {/* <ImageUploadCard />
                <Typography  variant="h6" gutterBottom > Upload a certificate</Typography> */}
            </div>)}
              </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            cancel
          </Button>
          <Button onClick={handleSave} color="primary" autoFocus>
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}