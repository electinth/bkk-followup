import SafeHydrate from "components/SafeHydrate";
import MetaHead from "components/MetaHead";

import "styles/globals.scss";
import "styles/font.css";
import "styles/dashboard.scss";
import "styles/home.scss";
import "swiper/swiper.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MetaHead />

      <SafeHydrate>
        <Component {...pageProps} />
      </SafeHydrate>
    </>
  );
}

export default MyApp;
