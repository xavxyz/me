import Document, { Head, Main, NextScript } from 'next/document';
import resets from '../styles/resets';
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
          <title>Xavier Cazalot Linkedin Recommendations</title>

          <style dangerouslySetInnerHTML={{ __html: resets }} />
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
