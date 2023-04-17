import "bootstrap/dist/css/bootstrap.min.css";
import '../global.css';
import { useEffect } from 'react';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js")
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
