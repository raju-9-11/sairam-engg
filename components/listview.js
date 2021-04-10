import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Pagination from '@material-ui/lab/Pagination';
import { Box, useMediaQuery } from '@material-ui/core';
import User from './AdminComponents/viewUser'

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
  }
}));

export default function AlignItemsList(props) {
  const classes = useStyles();
  const itemsPerPage = 10;
  const theme = useTheme();
  const hide = useMediaQuery(theme.breakpoints.down('md'))
  const [page, setPage] = React.useState(1);
  const [noOfPages] = React.useState(
    Math.ceil(props.users.length / itemsPerPage)
  );

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div  className={classes.root} >
        <Divider />
      <List >
          {props.users
          .slice((page - 1) * itemsPerPage, page * itemsPerPage)
          .map((user,index) => {
              return (
                <User user ={user} index={index} />
                  // <div key={index} className={classes.root}>
                    
                  //     <ListItem alignItems="flex-start">
                  //       <ListItemAvatar>
                  //       <Avatar alt={user.item.first_name} src="/static/images/avatar/1.jpg" />
                  //       </ListItemAvatar>
                  //       <ListItemText
                  //           className={classes.item}
                  //           primary={user.item.first_name +" "+user.item.last_name}
                  //           secondary={
                  //           <React.Fragment>
                  //           {user.item.cid}
                  //           </React.Fragment>
                  //       }
                  //       />
                  //       <Typography variant='inherit'>
                  //           {!hide && user.item.email}
                  //       </Typography>   
                  //   </ListItem>
                  //   </div>
              )
          })}
      </List>
        <Divider />
        
        <Box component="span">
          <Pagination
            count={noOfPages}
            page={page}
            onChange={handleChange}
            defaultPage={1}
            size="large"
            showFirstButton
            showLastButton
            classes={{ ul: classes.paginator }}
          />
        </Box>
    </div>
  );
}