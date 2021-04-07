import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../components/Copyright';
import { Router, useRouter } from 'next/router';
import Login from './signin'
import firebase from '../lib/firebase'

export default function Index() {

  const router = useRouter()

  const [ type, setType ] = React.useState(null);
  
  useEffect(()=>{

  firebase.auth().onAuthStateChanged(function(user) {

    if (user) {
      firebase.firestore()
        .collection('users')
        .doc(user.uid)
        .get()
        .then((doc)=>{
          setType(doc.data().type)
          if(doc.data().type==0){
            router.push('/dashboard')
          }
          if(doc.data().type==1){
            router.push('/admin')
          }
        })
    } else {
      setType(null)
      router.push('/admin')
    }
  });
  },[])


  // const redirect = React.useCallback((path) => {
  //   router.replace(path)
  // })

  //   if(type===null){
  //     redirect('/signin')
  //   }
  //   if(type===0){
  //     router.push('/dashboard');
  //   }
  //   if(type==1){
  //     redirect('/admin')
  //   }




  return(
    <Login />
  )


  
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
