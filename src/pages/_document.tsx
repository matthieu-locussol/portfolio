import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
   static async getInitialProps(ctx: DocumentContext) {
      const initialProps = await Document.getInitialProps(ctx);
      return initialProps;
   }

   // eslint-disable-next-line class-methods-use-this
   render() {
      return (
         <Html lang="en" prefix="og: http://ogp.me/ns#">
            <Head />
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}

export default MyDocument;
