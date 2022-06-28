import "../styles/globals.css";
import { ContextGlobal } from "../Context/context";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ContextGlobal>
        <Component {...pageProps} />
      </ContextGlobal>
    </>
  );
}

export default MyApp;
