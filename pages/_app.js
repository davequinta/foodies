import '../styles/index.css';
import '../styles/menu.scss';
import '../styles/navbar.scss';
import '../styles/text.scss';
import Nav from '../src/components/HomeNavbar.js';
import Footer from '../src/components/footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
