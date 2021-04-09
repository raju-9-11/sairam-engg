import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    margin:theme.spacing(10)
  }
}))

export default function Custom() {

  const classes = useStyles();

  return( 
  <div className = {classes.root}>
    <h1>404 - Page Not Found</h1>
    <Button href="/">
      <a>
        Go back home
      </a>
    </Button>
  </div>
  )
}