import { RecoilRoot } from "recoil";
import { Toaster } from "react-hot-toast";

import "@/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      {/* React Host Toast Root */}
      <Toaster position="top-right" reverseOrder={true} />
      {/* React Host Toast Root */}

      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
