import { RecoilRoot } from "recoil";
import { Toaster } from "react-hot-toast";
import "@/styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Head>
        <title>Starter</title>
        <meta name="description" content="Awesome nextjs starter project" />
      </Head>

      {/* React Host Toast Root */}
      <Toaster position="top-right" reverseOrder={false} />
      {/* React Host Toast Root */}
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
