import { CssBaseline } from '@mui/material';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

export default (props: AppProps) => {
   const { Component, pageProps } = props;

   return (
      <>
         <Head>
            <title>Matthieu Locussol | Software Engineer</title>
         </Head>
         <CssBaseline />
         <Component {...pageProps} />
      </>
   );
};
