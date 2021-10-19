import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class Doc extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }


  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="amphtml" href="https://ady.world/" />
          <link rel="canonical" href="https://www.ady.world/" />
          <meta name="googlebot" content="follow, index, noarchive" />
          <meta name="robots" content="follow, index, noarchive" />

          <meta name="msapplication-config" content="/browserconfig.xml" />
					<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />

          <meta name="description" content="Atelier Design Yield®" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="@ady.world" />
          <meta name="twitter:site" content="@ady.world" />
          <meta property="og:locale" content="en_us" />
          <meta property="og:site_name" content="Atelier" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.ady.world/" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
