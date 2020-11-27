import Head from "next/head";

import GlobalStyles from '../styles/globals'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Intro Text</title>
        <link rel="shortcut icon" href="/lamp-512.png" />
        <link rel="apple-touch-icon" href="/lamp-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Blade runner 2049's intro text" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
          rel="stylesheet"
        />
      </Head>

      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp
