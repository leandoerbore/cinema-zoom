import "../../styles/globals.scss";
import "../assets/scss/_index.scss";
import Header from "../layout/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
        <Header />
        <Component {...pageProps} />
    </>
  );
}

export default MyApp;
