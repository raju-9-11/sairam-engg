import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../components/Copyright';
import { useRouter } from 'next/router';

export default function Index() {
  const router = useRouter();
  useEffect(()=>{
    if(true){
      router.push('/signin');
    }else{
      router.push('/signup');
    }
  },[])
  return (
    <div></div>
  )
  // return (
  //   <Container maxWidth="sm">
  //     <Box my={4}>
  //       <Typography variant="h4" component="h1" gutterBottom>
  //         Next.js example
  //       </Typography>
  //       <Link href="/about" color="secondary">
  //         Go to the about page
  //       </Link>
  //       <ProTip />
  //       <Copyright />
  //     </Box>
  //   </Container>
  // );
}
