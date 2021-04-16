import React, { useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Pagination from '@material-ui/lab/Pagination';
import { Box, Typography, useMediaQuery } from '@material-ui/core';
import User from './AdminComponents/viewUser'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  pages: {
    display:'flex',
    flexDirection: 'column',
    alignSelf:'center',
    alignContent:'center'
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
        <footer className={classes.pages}>
          <Typography className={classes.pages} variant="button" display="block" gutterBottom>{(page - 1) * itemsPerPage+1 + " - " +  Math.min(page * itemsPerPage,props.users.length) + " of "+props.users.length + " users"}</Typography>
        </footer>
    </div>
  );
}