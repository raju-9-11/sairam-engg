import React, { useState, useEffect, useContext, createContext } from 'react';
import Router from 'next/router';
import firebase from './firebase';
import { createUser } from './db';
import { useSnackbar } from 'notistack';

const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useFirebaseAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useFirebaseAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { enqueueSnackbar } = useSnackbar();

  const firestore = firebase.firestore();

  const handleUser = async (rawUser) => {
    // console.log('handleUser called', new Date(), rawUser);
    if (rawUser) {
      const user = await formatUser(rawUser);
      const { token, ...userWithoutToken } = user;

      createUser(user.uid, userWithoutToken);
      setUser(user);

      setLoading(false);
      return user;
    } else {
      setUser(false);
      setLoading(false);
      return false;
    }
  };

  const signupWithEmail = (email, password, firstName, type, lastName, cid, redirect) => {
    setLoading(true);
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        firestore.collection('users').doc(response.user.uid)
        .set({
          first_name: firstName,
          last_name: lastName,
          type: type,
          cid: cid,
        })
        handleUser(response.user);
        enqueueSnackbar("Registration successful", { variant: 'success'})
    
        if (redirect) {
          Router.push(redirect);
        }
    })
    .catch((err) => {
      enqueueSnackbar(err.message, {variant  :'error'})
    });
    
  }

  const signinWithEmail = (email, password, redirect) => {
    setLoading(true);
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        handleUser(response.user);

        enqueueSnackbar("Welcome back", { variant: 'success'})
        if (redirect) {
          Router.push(redirect);
        }
      })
      .catch((e)=>{
        enqueueSnackbar(e.message, {variant  :'error'})
      });
  };


  const signinWithGoogle = (redirect) => {
    setLoading(true);
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((response) => {
        handleUser(response.user);

        if (redirect) {
          Router.push(redirect);
        }
      });
  };

  const signout = () => {
    Router.push('/signin')
    return firebase
      .auth()
      .signOut()
      .then(() => {
        handleUser(false)
        enqueueSnackbar("User successfully logged out", { variant: 'success'});
      })
      .catch((e)=>{
        enqueueSnackbar(e.message, {variant  :'error'})
      });
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onIdTokenChanged(handleUser);
    return () => unsubscribe();
  }, []);


  const getFreshToken = async () => {
    console.log('getFreshToken called', new Date());
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      const token = await currentUser.getIdToken(false);
      return `${token}`;
    } else {
      return '';
    }
  };

  return {
    user,
    loading,
    signinWithEmail,
    signinWithGoogle,
    signout,
    getFreshToken,
    signupWithEmail
  };
}


const formatUser = async (user) => {
  // const token = await user.getIdToken(/* forceRefresh */ true);
  const decodedToken = await user.getIdTokenResult(/*forceRefresh*/ true);
  const { token, expirationTime } = decodedToken;
  // console.log(token);
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
    token,
    expirationTime,
    // stripeRole: await getStripeRole(),
  };
};