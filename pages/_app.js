import '../styles/globals.css';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  return <>
    <NextNProgress options={{ easing: "ease", speed: 500 }} color="#74f2d8" />
    <Component {...pageProps} />
  </>
}

export default MyApp
