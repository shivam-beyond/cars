import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head>
        <title>Flexcar</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body className="antialiased">
        <div id="app">
          <Header />
          <Main />
          <Footer />
        </div>
        <NextScript />
      </body>
    </Html>
  );
}
