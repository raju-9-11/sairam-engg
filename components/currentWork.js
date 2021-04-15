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
import { CheckCircle } from '@material-ui/icons';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

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
        margin: 10,
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

  Date.prototype.toShortFormat = function() {

    let monthNames =["Jan","Feb","Mar","Apr",
                      "May","Jun","Jul","Aug",
                      "Sep", "Oct","Nov","Dec"];
    
    let day = this.getDate();
    
    let monthIndex = this.getMonth();
    let monthName = monthNames[monthIndex];
    
    let year = this.getFullYear();
    
    return `${day}-${monthName}-${year}`;  
}


  const sdate = work.createdAt.toDate();
  const ddate = work.dueDate.toDate();

  const titleAdd = work.approved? "(Completed)": work.completed? "(Submitted)": ""



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
          <Avatar alt={work.user.first_name}  />
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
              {"  - " +   work.priority + " - " + work.description.substring(0,30)+"...."}
            </React.Fragment>
          }
          />
          {!fullScreen &&
          <>
            <ListItemText
            secondary={
              <React.Fragment>
                {work.completed && ! work.approved && <ErrorOutlineIcon className={classes.iconButton} /> }
                {work.approved && <CheckCircle className={classes.iconButton} /> }
              </React.Fragment>
            }
            />

        
            {"Created At:  " + sdate.toShortFormat()}
          <br />
          {" Due date " +   ddate.toShortFormat()}
          <br />
          </>}
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
      <Dialog fullScreen={fullScreen} className={classes.root} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{work.name} {!props.user && titleAdd}</DialogTitle>
        <DialogContent>
          <DialogContentText>
             {props.user? "Complete the following work and update work status.": "Edit work details"}
          </DialogContentText>
          {props.user? <WorkProps close={()=>setOpen(false)} work={work} /> : <AdminWorkProps work={work} close={()=>setOpen(false)}  /> }
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