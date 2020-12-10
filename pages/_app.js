import '../styles/index.css';
import '../styles/menu.scss';
import '../styles/navbar.scss';
import '../styles/text.scss';
import Nav from '../src/components/HomeNavbar.js';
import Footer from '../src/components/footer';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
