import Document, { Head, Main, NextScript } from 'next/document';
import globalStyles from '../styles';
import { styleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage();
    const style = styleSheet.getCSS();

    return { ...page, style };
  }

  render() {
    const { style } = this.props;

    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="stylesheet"
            type="text/css"
            src="https://fonts.googleapis.com/css?family=Space+Mono:700"
          />
          <title>Xavier Cazalot</title>
          <link href="/static/favicon.ico" rel="shortcut icon" />
          <meta content="Xavier Cazalot, JavaScript Explorer @ OK GROW!" name="description" />
          <meta content="article" property="og:type" />
          <meta content="https://xaviercazalot.com" property="og:url" />
          <meta
            content="https://d13yacurqjgara.cloudfront.net/users/39185/screenshots/2380677/helmet.jpg"
            property="og:image"
          />
          <meta content="Xavier Cazalot 🚀" property="og:title" />
          <meta
            content="Xavier Cazalot, JavaScript Explorer @ OK GROW!"
            property="og:description"
          />
          <meta content="summary" name="twitter:card" />
          <meta
            content="https://d13yacurqjgara.cloudfront.net/users/39185/screenshots/2380677/helmet.jpg"
            name="twitter:image:src"
          />
          <meta content="Xavier Cazalot 🚀" name="twitter:title" />
          <meta
            content="Xavier Cazalot, JavaScript Explorer @ OK GROW!"
            name="twitter:description"
          />

          <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
          <style dangerouslySetInnerHTML={{ __html: style }} />
        </Head>

        <body>
          <div className="root">
            <Main />
          </div>

          <NextScript />
        </body>
      </html>
    );
  }
}
