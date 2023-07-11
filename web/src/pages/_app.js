import "../styles/globals.css";
import Layout from "components/layout";
import { AnimatePresence } from "framer-motion";
import { useRouter } from 'next/router';
import { GoogleAnalytics } from "nextjs-google-analytics";
import { useEffect } from "react";
import TagManager from 'react-gtm-module';

export default function App({ Component, pageProps }) {

  const router = useRouter()
  const pageKey = router.asPath

  // page transition info:
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-MDFX6XJ' });
  }, []);

  return (
    <>
      <AnimatePresence initial={false} mode="popLayout" onExitComplete={scrollToTop}>
        <Layout contactInfo={pageProps.contactInfo} key={pageKey}>
          <GoogleAnalytics trackPageViews />
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
    </>
  );
}
