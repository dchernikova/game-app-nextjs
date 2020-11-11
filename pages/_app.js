import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';

import CssBaseline from '@material-ui/core/CssBaseline';

import theme from '../theme';

import { CartProvider } from '../contexts/Cart';
import { AuthenticationProvider } from '../contexts/Authentication';

import GlobalStyles from '../helpers/GlobalStyles';
import ScrollToTop from '../helpers/ScrollToTop';

import Layout from '../components/Layout';

import 'swiper/swiper-bundle.css';

import makeServer from '../api/mirage';

makeServer({ environment: 'development' });

class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles />
          <AuthenticationProvider>
            <CartProvider>
              <ScrollToTop />
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </CartProvider>
          </AuthenticationProvider>
        </ThemeProvider>
      </>
    );
  }
}

export default CustomApp;
