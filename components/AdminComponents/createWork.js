import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ListItem, ListItemIcon, ListItemText, useMediaQuery } from '@material-ui/core';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import AssignWork from './assignWorkForm';
import { makeStyles, useTheme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme)=>({
  root: {
    width:'100%',
  }
}))


export default function CreateWork() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    <ListItem button key={6}  onClick={handleClickOpen}>
    <ListItemIcon> <AddToQueueIcon /> </ListItemIcon>
    <ListItemText primary={`Assign Work`} />
    </ListItem>
      <Dialog fullScreen={fullScreen} className={classes.root} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Create and Assign Work</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill in the following details to create a work.
          </DialogContentText>
          <AssignWork close={handleClose} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          {/* <Button onClick={handleClose} color="primary">
            Assign Work
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}