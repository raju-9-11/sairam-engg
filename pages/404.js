import Link from 'next/link'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core';
import Head from 'next/head'


const useStyles = makeStyles((theme) => ({
  root: {
    display:'flex',
    flexDirection:'column',
    minHeight: '74vh',
    alignItems:'center',
    margin:theme.spacing(10)
  }
}))

export default function Custom404() {

  const classes = useStyles();

  return( 
  <div className = {classes.root}>
    <Head>
      <title>404: This page could not be found.</title>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    </Head>
    <h1>404 - Page Not Found</h1>
    <Button href="/">
        Go back home
    </Button>
  </div>
  )
}