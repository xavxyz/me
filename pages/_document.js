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
