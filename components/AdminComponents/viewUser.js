import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import { Grid, useMediaQuery } from '@material-ui/core';
import { getFields, getSkills } from '../../lib/db';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
    mail: {
        display:'flex',
        flexDirection: 'column',
        alignSelf:'center',
        alignContent:'center'
    },
    item: {
        padding: theme.spacing(1.2)
    },
        avatar: { marginRight: theme.spacing(5) },
        paginator: {
        justifyContent: "center",
        padding: "10px"
    },
  appBar: {
        position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  points: {
    margin: theme.spacing(4),
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function User({ user, index, ...props}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const hide = useMediaQuery(theme.breakpoints.down('md'))
  const [ skills, setSkills ] = React.useState([]);
  const [ fields, setFields ] = React.useState([]);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const getData = React.useCallback(async() => {
    getFields()
      .then((response)=>{
        var lst =[]
        response.forEach((dat) =>{
            lst.push({
              id:dat.id,
            ...dat.data()
          })
        })
        setFields(lst)
      })
      getSkills()
        .then((response) => {
          var lst=[]
          response.forEach((dat)=> {
            lst.push({
              id:dat.id,
              ...dat.data()
            })
          })
          setSkills(lst)
        })

  })

  React.useEffect(()=> {
    getData();
  },[])

  return (
    <div>
      <div key={index} className={classes.root} onClick={handleClickOpen}>           
            <ListItem button alignItems="flex-start">
                <ListItemAvatar>
                <Avatar alt={user.item.first_name} src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                    className={classes.item}
                    primary={user.item.first_name +" "+user.item.last_name}
                    secondary={
                    <React.Fragment>
                    {user.item.cid}
                    </React.Fragment>
                }
                />
                <Typography variant='inherit'>
                    {!hide && user.item.email}
                </Typography>   
            </ListItem>
            </div>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {user.item.first_name +" "+user.item.last_name}
            </Typography>
            {/* <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button> */}
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="First Name" secondary={user.item.first_name} />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Last Name" secondary={user.item.last_name} />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="College ID" secondary={user.item.cid} />
          </ListItem>
          <Divider />
          <ListItem button onClick={()=>navigator.clipboard.writeText(user.item.uid)}>
            <ListItemText primary="User ID" secondary={user.item.uid} />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Years of experience" secondary={user.item.years} />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Email ID" secondary={user.item.email} />
          </ListItem>
          <Divider />
          <ListItem selected button>
            <ListItemText primary="Skill Points" />
          </ListItem>
          <Divider />
            {skills.map((skill,index)=>{
                return(
                    <ListItem key={index} button>
                        <ListItemText primary={skill.name} secondary={user.item[skill.id]!=undefined ?user.item[skill.id].points : 0} />
                    </ListItem>
                )
            })}
            <Divider />
          <ListItem selected button>
            <ListItemText primary="Field Points" />
          </ListItem>
          <Divider />
            {fields.map((field,index)=>{
                    return(
                        <ListItem key={index} button>
                            <ListItemText primary={field.name} secondary={user.item[field.id]!=undefined ?user.item[field.id].points : 0} />
                        </ListItem>
                    )
                })}
        </List>
        <Divider />
        <Divider />
      </Dialog>
    </div>
  );
}