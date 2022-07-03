import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        {/* React Portals */}
        <div id="modal-portal" />
        <div id="dialog-portal" />
        {/* React Portals */}

        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
