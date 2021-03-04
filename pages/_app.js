import "styles/globals.scss";
import "styles/font.css";
import "styles/header.scss";
import "styles/dashboard.scss";
import "styles/home.scss";
import "swiper/swiper.scss";

function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? null : children}
    </div>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <SafeHydrate>
      <Component {...pageProps} />
    </SafeHydrate>
  );
}

export default MyApp;
