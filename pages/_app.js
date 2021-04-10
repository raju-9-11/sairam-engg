import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Home from './index'
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import firebase from '../lib/firebase'
import { AuthProvider } from '../lib/auth'
import { SnackbarProvider } from 'notistack';
import { useRouter } from 'next/router';
import Dashboard from './dashboard';
import Admin from './admin';


export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);


  return (
    <React.Fragment>
      <Head>
        <title>Sairam Engineering College Work Manager</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <SnackbarProvider maxSnack={2}>
        <AuthProvider >
          <Component {...pageProps} />
        </AuthProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
