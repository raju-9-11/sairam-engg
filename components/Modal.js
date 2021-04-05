import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ImageUploadCard from './ImageUpload';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';


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

export default function ResponsiveDialog(props) {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          "How skilled are you at "+ props.skill.name.toLowerCase() +" ?"}
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
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
              />
              {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
            {value>=3 &&(
              <div className={classes.imageuploader}>
                  <ImageUploadCard />
                <Typography  variant="h6" gutterBottom > Upload a certificate</Typography>
            </div>)}
              </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button autoFocus onClick={handleClose} color="primary">
            Disagree
          </Button> */}
          <Button onClick={handleClose} color="primary" autoFocus>
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}