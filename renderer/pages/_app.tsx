import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import '../styles/index.scss';

export default function(props: AppProps) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <title>Trickster Administrator</title>
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}
