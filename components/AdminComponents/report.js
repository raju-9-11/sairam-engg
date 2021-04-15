import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core';
import Head from 'next/head'


const useStyles = makeStyles((theme) => ({
  root: {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    margin:theme.spacing(10)
  }
}))



export default function Report () {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            Report Generation
        </div>
    )
}