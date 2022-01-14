import { CssBaseline } from '@mui/material';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { ColorModeProvider } from '../contexts/ColorModeContext';
import { DARK_BACKGROUND_DEFAULT } from '../theme/constants';

export default (props: AppProps) => {
   const { Component, pageProps } = props;

   return (
      <ColorModeProvider>
         <Head>
            <html lang="en" prefix="og: http://ogp.me/ns#" />
            <title itemProp="name" lang="en">
               Matthieu Locussol | Software Engineer
            </title>
            <meta charSet="utf-8" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link
               href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;700;800&display=swap"
               rel="stylesheet"
            />
            <link
               href="https://fonts.googleapis.com/css2?family=Fira+Code&display=swap"
               rel="stylesheet"
            />
            <link rel="shortcut icon" href="/favicon.ico" />
            <meta
               name="description"
               content="Matthieu Locussol is a web developer and software engineer who enjoys architecting & building wonderful applications."
            />
            <meta
               name="keywords"
               content="Matthieu Locussol, Matthieu, Locussol, software engineer, software architecture, galadrim, c, c++, python, javascript, typescript, vercel, github, gitlab, innovation consulting, innovation, consulting, freelance"
            />
            <meta
               name="google-site-verification"
               content="NYPo--D5bfJS12SG4DK7MgqSyXB_nDElWEpWahY1I3E"
            />
            <meta property="og:title" content="Matthieu Locussol | Software Engineer" />
            <meta
               property="og:description"
               content="Matthieu Locussol is a software engineer currently working in freelance who enjoys architecting & building applications."
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.matthieu-locussol.com" />
            <meta property="og:site_name" content="Matthieu Locussol | Software Engineer" />
            <meta property="og:image" content={`https://www.matthieu-locussol.com/og.png`} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:locale" content="en_US" />
            <meta itemProp="name" content="Matthieu Locussol | Software Engineer" />
            <meta
               itemProp="description"
               content="Matthieu Locussol is a software engineer currently working in freelance who enjoys architecting & building applications."
            />
            <meta itemProp="image" content={`https://www.matthieu-locussol.com/og.png`} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content="https://www.matthieu-locussol.com" />
            <meta name="twitter:title" content="Matthieu Locussol | Software Engineer" />
            <meta
               name="twitter:description"
               content="Matthieu Locussol is a software engineer currently working in freelance who enjoys architecting & building applications."
            />
            <meta name="twitter:image" content={`https://www.matthieu-locussol.com/og.png`} />
            <meta name="twitter:image:alt" content="Matthieu Locussol | Software Engineer" />

            <link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-icon-180x180.png" />
            <link
               rel="icon"
               type="image/png"
               sizes="192x192"
               href="/favicons/android-icon-192x192.png"
            />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
            <meta name="msapplication-TileColor" content={DARK_BACKGROUND_DEFAULT} />
            <meta name="msapplication-TileImage" content="/favicons/ms-icon-144x144.png" />
            <meta name="theme-color" content={DARK_BACKGROUND_DEFAULT} />
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-LJFJF8WHYB"></script>
            <script
               dangerouslySetInnerHTML={{
                  __html: `
                           window.dataLayer = window.dataLayer || [];
                           function gtag(){dataLayer.push(arguments);}
                           gtag('js', new Date());

                           gtag('config', 'G-LJFJF8WHYB');
                           `,
               }}></script>
         </Head>
         <CssBaseline />
         <Component {...pageProps} />
      </ColorModeProvider>
   );
};
