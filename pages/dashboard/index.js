import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ProfileUpdate from '../../components/userComponents/profileupdate'
import List from '@material-ui/core/List';
import Skillset from '../../components/userComponents/skillset';
import Foe from '../../components/userComponents/foe';
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
import { useAuth } from '../../lib/auth';
import Copyright from '../../components/Copyright';
import SimpleBackdrop from '../../components/backDrop';
import Custom from '../../components/custom404'
import WorkIcon from '@material-ui/icons/Work';
import viewWork from '../../components/viewWork';
import ViewWork from '../../components/viewWork';
import Head from 'next/head';
import StickyFooter from '../../components/footer';
import { Grid } from '@material-ui/core';

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
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      paddingLeft:'10vh'
    },
    minHeight: '90.5vh',
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
  // toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  footer: {
    paddingTop: theme.spacing(10),
    width:'100%',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


const tabs = [
  {
    tab:0,
    name:'Profile Update',
    elem:  <ProfileUpdate />,
    icon: <PersonIcon />,
  },
  {
    tab:1,
    name:'Skill list',
    elem: <Skillset />,
    icon: <BookIcon />,
  },
  {
    tab:2,
    name:'Field list',
    elem:  <Foe/>,
    icon: <RecentActorsIcon />,
  },
  {
    tab:3,
    name:'View Work',
    elem: <ViewWork />,
    icon:  <WorkIcon />
  }
]

function Dashboard(props) {
  const { window } = props;
  const { user, loading, signout } = useAuth();
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [ tab, setTab ] = React.useState(0)


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const router = useRouter();

  const handleClick = (index) => {
    setTab(index)
    setMobileOpen(false);
  }
 
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
      {tabs.slice(0,3).map((item,index) => {
          return(
            <ListItem selected={tab==item.tab} button key={item.tab} onClick={()=>handleClick(item.tab)}>
              <ListItemIcon >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          )
        })}
      </List>
      <Divider />
      <ListItem  selected={tab===3} button key={5} onClick={()=>handleClick(3)}>
        <ListItemIcon> {tabs[3].icon} </ListItemIcon>
        <ListItemText primary={`View Work`}  />
    </ListItem>
      <Divider />
      <ListItem  button key={4} onClick={()=>signout()}>
        <ListItemIcon> <ExitToAppIcon /> </ListItemIcon>
        <ListItemText primary={`Logout`} />
    </ListItem>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


  return (
    <>
    {loading && <SimpleBackdrop/>}
    {user && user.type<3 &&
     <div className={classes.root}>
       <Head>
         <title>{tabs[tab].name}</title>
       </Head>
        <CssBaseline />
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
               <IconButton disabled>
               <img src="/SEC-LOGO.png" />
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
        <div className={classes.footer} >
          {tabs[tab].elem}
        {/* <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            This Website was developed by
          </Typography>
          <Copyright /> */}
        </div>
        </div>}
        {((!loading && !user) || (user && user.type>2)) && <Custom />}
        <StickyFooter />
        </>
  );
}


export default Dashboard;