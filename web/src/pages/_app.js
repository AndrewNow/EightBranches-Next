import "@/styles/globals.css";
import Layout from "components/layout";
import { LazyMotion, m, domAnimation, AnimatePresence } from "framer-motion";

export default function App({
  Component,
  pageProps,
  router
}) {
  const PageTransition = {
    initial: {
      opacity: 0,
      transition: {
        duration: 0.25,
        transition: "easeOut",
      },
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.25,
        transition: "easeOut",
      },
    },
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <LazyMotion features={domAnimation}>
        <AnimatePresence
          mode="wait"
          initial={true}
          // onExitComplete={scrollToTop}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <m.div
            key={router.asPath}
            variants={PageTransition}
            initial="initial"
            animate="animate"
            exit="initial"
          >
      <Layout contactInfo={pageProps.contactInfo}>
        <Component {...pageProps} />
      </Layout>
      </m.div>
        </AnimatePresence>
      </LazyMotion>
    </>
  );
}
