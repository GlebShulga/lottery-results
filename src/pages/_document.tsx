import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="Check if your favorite numbers have ever won in the Bonoloto lottery"
          />
          <meta
            httpEquiv="Content-Security-Policy"
            content="default-src 'self'; img-src *; child-src 'none';"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
