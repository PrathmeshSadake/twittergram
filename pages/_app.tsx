import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";

import Layout from "./components/Layout";

import "@/styles/globals.css";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <Head>
        <title>twittergram</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
