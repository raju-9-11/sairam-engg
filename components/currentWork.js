import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { List, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, useMediaQuery } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import AssignWork from './AdminComponents/assignWorkForm';
import { makeStyles, useTheme } from '@material-ui/core/styles'
import WorkProps from './workProps';
import AdminWorkProps from './AdminComponents/adminWorkProps';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';

const useStyles = makeStyles((theme)=>({
    root: {
        display:'flex',
        flexDirection:'column',
        [theme.breakpoints.up('sm')]: {
          display:'flex',
        },
        alignItems: 'center',
        width:'98%',
      },
      pap: {
        marginBottom:'5vh',
        padding: '2px 4px',
        display: 'flex',
        width: 400,
      },
      input: {
        marginLeft: theme.spacing(1),
        flex: 1,
      },
      iconButton: {
        padding: 10,
      },
      divider: {
        height: 28,
        margin: 4,
      },
      inline: {
        display: 'inline',
      },
    }));


export default function CurrentWork({work, index, ...props}) {
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
      <List className={classes.root} key={index}>
      <ListItem button alignItems="flex-start" onClick={handleClickOpen}>
        <ListItemAvatar>
          <Avatar alt={work.user.first_name} src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={work.name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {work.user.first_name+ " " + work.user.last_name}
              </Typography>
              {"  - " + work.description.substring(0,30)+"...."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
      <Dialog fullScreen={fullScreen} className={classes.root} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{work.name}</DialogTitle>
        <DialogContent>
          <DialogContentText>
             {props.user? "Complete the following work and update work status.": "Edit work details"}
          </DialogContentText>
          {props.user? <WorkProps work={work} /> : <AdminWorkProps work={work} /> }
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