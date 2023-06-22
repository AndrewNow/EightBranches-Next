import "@/styles/globals.css";
import Layout from "components/layout";
import { AnimatePresence } from "framer-motion";
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {

  const router = useRouter()
  const pageKey = router.asPath


    const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  };


  return (
    <>
      <AnimatePresence initial={false} mode="popLayout" onExitComplete={scrollToTop}>
        <Layout contactInfo={pageProps.contactInfo} key={pageKey}>
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
    </>
  );
}
