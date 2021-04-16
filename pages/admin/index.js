import React from 'react';
import ManageSkills from '../../components/AdminComponents/manageSkills';
import ManageFields from '../../components/AdminComponents/manageFields';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import PersonIcon from '@material-ui/icons/Person'
import BookIcon from '@material-ui/icons/Book';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import GroupIcon from '@material-ui/icons/Group';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import { useAuth } from '../../lib/auth'
import Filter from '../../components/AdminComponents/filter';
import ViewUsers from '../../components/AdminComponents/viewUsers';
import Copyright from '../../components/Copyright';
import SimpleBackdrop from '../../components/backDrop';
import Custom from '../../components/custom404'
import WorkIcon from '@material-ui/icons/Work';
import CreateWork from '../../components/AdminComponents/createWork';
import ViewAssignedWork from '../../components/AdminComponents/viewAssignedWork';
import AssessmentIcon from '@material-ui/icons/Assessment';
import Report from '../../components/AdminComponents/report';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: { 
    paddingTop:'3vw',
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      paddingLeft:'10vh'
    },
    flexDirection:'column',
    alignItems:'center'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  footer: {
    width:'100%',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

function Admin(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { user, loading , signout } = useAuth();
  const [ tab , setTab ] = React.useState(0)

  const [open, setOpen] = React.useState(false);

  const handleSetClick = () => {
    setOpen(!open);
  };



  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const router = useRouter();

  const handleClick = (index) => {
    setTab(index);
    setMobileOpen(false);
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {['Filter ', 'Manage Skills', 'Manage Fields','View Users'].map((text, index) => (
          <ListItem selected={tab===index} button key={index} onClick={()=>handleClick(index)}>
            <ListItemIcon>
              {index  === 0 ?
               <PersonIcon />
                : index === 1 ? 
                <BookIcon />
                : index==2? 
                <RecentActorsIcon />
                 :<GroupIcon /> 
                 }</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <ListItem selected={tab===4} onClick={()=>handleClick(4)} button key={5}>
        <ListItemIcon> <WorkIcon /> </ListItemIcon>
        <ListItemText primary={`Active work`}  />
      </ListItem>
        <CreateWork />
        <ListItem button onClick={handleSetClick}>
        <ListItemIcon>
          <AssessmentIcon />
        </ListItemIcon>
        <ListItemText primary="Report" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem selected={tab===6} onClick={()=>handleClick(6)} button key={7} className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Date wise" />
          </ListItem>
          <ListItem selected={tab===7} onClick={()=>handleClick(7)} button key={8} className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Faculty " />
          </ListItem>
          <ListItem selected={tab===8} onClick={()=>handleClick(8)} button key={9} className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Completed" />
          </ListItem>
          <ListItem selected={tab===9} onClick={()=>handleClick(9)} button key={10} className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Pending" />
          </ListItem>
        </List>
      </Collapse>
      <Divider />
      <ListItem  button key={6} onClick={()=>signout()}>
        <ListItemIcon> <ExitToAppIcon /> </ListItemIcon>
        <ListItemText primary={`Logout`}  />
    </ListItem>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


  return (
    <>
     {loading && <SimpleBackdrop/>}
        {user && user.type==1 && 
        <div className={classes.root}>
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
            <IconButton
                color="secondary"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
                {props.name}
            </Typography>
            </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
            <Drawer
                container={container}
                variant="temporary"
                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{
                paper: classes.drawerPaper,
                }}
                ModalProps={{
                keepMounted: true, // Better open performance on mobile.
                }}
            >
                {drawer}
            </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
            <Drawer
                classes={{
                paper: classes.drawerPaper,
                }}
                variant="permanent"
                open
            >
                {drawer}
            </Drawer>
            </Hidden>
        </nav>
        <footer className={classes.footer} >
        {tab===0? <Filter /> : tab===1? <ManageSkills/> : tab===2? <ManageFields/> : tab===3? <ViewUsers/>: tab===4? <ViewAssignedWork />: <Report type={tab-6} /> }
        {/* <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            This Website was developed by
          </Typography>
          <Copyright /> */}
        </footer>
        </div>}
        {(!user && !loading)||(user && user.type==0) && <Custom />}
        </>
  );
}


export default Admin;