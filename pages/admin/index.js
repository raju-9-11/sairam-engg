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
import ViewWork from '../../components/viewWork';
import SimpleBackdrop from '../../components/backDrop';
import Custom from '../../components/custom404'
import WorkIcon from '@material-ui/icons/Work';
import CreateWork from '../../components/AdminComponents/createWork';
import ViewAssignedWork from '../../components/AdminComponents/viewAssignedWork';
import AssessmentIcon from '@material-ui/icons/Assessment';
import Report from '../../components/AdminComponents/report';
import Head from 'next/head';
import Profileupdate from '../../components/userComponents/profileupdate';
import Skillset from '../../components/userComponents/skillset';
import Foe from '../../components/userComponents/foe';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import StickyFooter from '../../components/footer';
import { Grid, Menu, MenuItem } from '@material-ui/core';
import { AccountCircle, ArrowDownward } from '@material-ui/icons';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em'
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
    }
  },
  root: { 
    paddingTop:'3vw',
    display: 'flex',
    minHeight: '90.5vh',
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
  toolbar : {
    padding:'2vh',
    display:'flex',
  },
  // necessary for content to be below app bar
  // toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  element: {
    width:'100%',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const tabs = [
  {
    tab:0,
    name:'Filter',
    elem:<Filter />,
    icon:<PersonIcon />
  },
  {
    tab:1,
    name:'Manage Skills',
    elem:<ManageSkills />,
    icon:<BookIcon />
  },
  {
    tab:2,
    name:'Manage Fields',
    elem:<ManageFields />,
    icon:<RecentActorsIcon />
  },
  {
    tab:3,
    name:'View Users',
    elem:<ViewUsers />,
    icon:<GroupIcon /> 
  },
  {
    tab:4,
    name:'Active Work',
    elem:<ViewAssignedWork />,
    icon: <HomeWorkIcon />
  },
  {
    tab:5,
    name:'Assign Work',
  },
  {
    tab:6,
    name:'DateWise',
    elem:<Report type={0} />,
    icon:<StarBorder />
  },
  {
    tab:7,
    name:'FacultyWise',
    elem:<Report type={1} />,
    icon:<StarBorder />
  },
  {
    tab:8,
    name:'Completed',
    elem:<Report type={2} />,
    icon:<StarBorder />
  },
  {
    tab:9,
    name:'Pending',
    elem:<Report type={3} />,
    icon:<StarBorder />
  },
  {
    tab:10,
    name:'Profile Update',
    elem:  <Profileupdate />,
    icon: <PersonIcon />,
  },
  {
    tab:11,
    name:'Skill list',
    elem: <Skillset />,
    icon: <BookIcon />,
  },
  {
    tab:12,
    name:'Field list',
    elem:  <Foe/>,
    icon: <RecentActorsIcon />,
  },
  {
    tab:13,
    name:'My Work',
    elem: <ViewWork />,
    icon:  <WorkIcon />
  }
]

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
      {tabs.slice(10,13).map((item,index) => {
          return(
            <ListItem selected={tab==item.tab} button key={item.tab} onClick={()=>handleClick(item.tab)}>
              <ListItemIcon >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          )
        })}
      <Divider />
      <List>
        {tabs.slice(0,4).map((item,index) => {
          return(
            <ListItem selected={tab==item.tab} button key={item.tab} onClick={()=>handleClick(item.tab)}>
              <ListItemIcon >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          )
        })}
      <Divider />
       <ListItem  selected={tab===13} button key={13} onClick={()=>handleClick(13)}>
        <ListItemIcon> {tabs[13].icon} </ListItemIcon>
        <ListItemText primary={tabs[13].name}  />
    </ListItem>
      <ListItem selected={tab===4} onClick={()=>handleClick(4)} button key={5}>
        <ListItemIcon> {tabs[4].icon} </ListItemIcon>
        <ListItemText primary={tabs[4].name}  />
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
        {tabs.slice(6,10).map((item,index) => {
          return(
            <ListItem className={classes.nested} selected={tab==item.tab} button key={item.tab} onClick={()=>handleClick(item.tab)}>
              <ListItemIcon >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          )
        })}
        </List>
      </Collapse>
      <Divider />
      <ListItem  button key={6} onClick={()=>signout()}>
        <ListItemIcon> <ExitToAppIcon /> </ListItemIcon>
        <ListItemText primary={`Logout`}  />
    </ListItem>
    </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
     {loading && <SimpleBackdrop/>}
        {user && user.type==3 && 
        <div className={classes.root}>
          <Head>
         <title>{tabs[tab].name}</title>
       </Head>
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
              <Grid 
                justify="space-between"
                container 
                spacing={24}
                className={classes.toolbar}
                >
                <Grid item>
                <Typography variant="h6" noWrap>
                    {tabs[tab].name}
                </Typography>
                </Grid>
              </Grid>
              <IconButton  disabled> 
                <img width={100} src="/Raise.png" />
              </IconButton>
              <IconButton  disabled> 
                <img width={100} src="/EOMS.png" />
              </IconButton>
            </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
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
                keepMounted: true, 
                }}
            >
              <IconButton disabled>
              <img src="/SEC-LOGO.png" />
              <Typography variant="h6" noWrap>
            </Typography>
               </IconButton>
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
               <IconButton disabled>
               <img src="/SEC-LOGO.png" />
               </IconButton>
                {drawer}
            </Drawer>
            </Hidden>
        </nav>
        <div className={classes.element} >
          {tabs[tab].elem}
        </div>
        </div>}
        {((!loading && !user) || (user && user.type!=3)) && <Custom />}
        <StickyFooter />
        </>
  );
}


export default Admin;