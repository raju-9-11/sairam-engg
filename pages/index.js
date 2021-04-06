import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../components/Copyright';
import { useRouter } from 'next/router';
import Login from './signin'
import { useAuth } from '../lib/auth';
import  Dashboard  from './dashboard'

export default function Index() {
  // const router = useRouter();

  // const { user } = useAuth();

  // if(user){
  //   return (
  //     <Dashboard />
  //   )
  // }
  return(
    <Login />
  )
  // return (
  //   <Dashboard />
  // )

  
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Page Loading
        </Typography>
        {/* <Link href="/about" color="secondary">
          Go to the about page
        </Link> */}
        {/* <ProTip /> */}
        {/* <Copyright /> */}
      </Box>
    </Container>
  );
}
