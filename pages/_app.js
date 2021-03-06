import SafeHydrate from "components/SafeHydrate";

import "styles/globals.scss";
import "styles/font.css";
import "styles/header.scss";
import "styles/dashboard.scss";
import "styles/home.scss";
import "swiper/swiper.scss";

function MyApp({ Component, pageProps }) {
  return (
    <SafeHydrate>
      <Component {...pageProps} />
    </SafeHydrate>
  );
}

export default MyApp;
