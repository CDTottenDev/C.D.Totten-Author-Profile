// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Official website of C.D. Totten, author of the Project Exodus series" />
        <meta property="og:title" content="C.D. Totten | Science Fiction Author" />
        <meta property="og:description" content="Official website of C.D. Totten, author of the Project Exodus series" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cdtotten.com/" />
        <meta property="og:image" content="https://cdtotten.com/images/og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}