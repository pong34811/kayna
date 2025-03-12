import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Add favicon and other meta tags here */}
        <link rel="icon" href="/Kayna12.ico" />
        <meta name="description" content="Official website of KaynaVtuberTH. Enjoy gaming, fun content, and promotional videos." />
        <meta name="keywords" content="Kayna, VTuber, gaming, fun content, promotional videos" />
        <meta name="author" content="KaynaVtuberTH" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Sans+Thai:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
