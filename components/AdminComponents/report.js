import { makeStyles } from '@material-ui/core/styles'
import { Button, Container, Grid, TextField } from '@material-ui/core';
import Head from 'next/head'
import { KeyboardDatePicker } from '@material-ui/pickers';
import DateWise from './datewise';
import FacultyWise from './facultyWise';
import Completed from './completed';
import Pending from './pending'


const useStyles = makeStyles((theme) => ({
  root: {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    width:'100%'
  }
}))



export default function Report ({ type , ...props}) {

    const classes = useStyles();

    return (
        <Container className={classes.root}>
            {type===0?
              <DateWise />
            :type===1?
                <FacultyWise />
            :type===2?
           <Completed />
            :
            <Pending />
            }
        </Container>
    )
}