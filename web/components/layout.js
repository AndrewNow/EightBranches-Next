import React from "react"
import styled from "styled-components"
import Navbar from "../components/navbar.js"
import Footer from "../components/footer.js"
import breakpoints from "./breakpoints"
// import { motion } from "framer-motion"
// import { Script } from "gatsby"

const Layout = ({ children, contactInfo }) => {
  // const PageTransition = {
  //   initial: {
  //     opacity: 0,
  //     transition: {
  //       duration: 0.35,
  //       transition: "easeOut",
  //     },
  //   },
  //   animate: {
  //     opacity: 1,
  //     transition: {
  //       duration: 0.35,
  //       transition: "easeOut",
  //     },
  //   },
  // }

  return (
    <>
      <GlobalWrapper
        // variants={PageTransition}
        // initial="initial"
        // animate="animate"
        // exit="initial"
      >
        <Navbar />
        <Main>{children}</Main>
        <Footer contactInfo={contactInfo} />
      </GlobalWrapper>
      {/* <Script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js.hs-scripts.com/22821029.js"
      ></Script> */}
    </>
  )
}

const GlobalWrapper = styled.div`
  margin: 0 auto;
  padding-bottom: var(--footer-height);

  @media (max-width: ${breakpoints.xxl}px) {
    h1 {
      font-size: 50px;
      line-height: 58px;
    }
    h2 {
      font-size: 40px;
      line-height: 45px;
    }
    h3 {
      font-size: 30px;
      line-height: 40px;
    }
    h4 {
      font-size: 22px;
      line-height: 32px;
    }
    h5 {
      font-size: 20px;
      line-height: 30px;
    }
    h6 {
      font-size: 20px;
      line-height: 30px;
    }
    p,
    ul,
    li {
      font-size: 18px;
      line-height: 28px;
    }
  }
  @media (max-width: ${breakpoints.xl}px) {
    p,
    ul,
    li {
      font-size: 18px;
      line-height: 31px;
    }
    padding-bottom: 70vh;
    // ^ same value as FooterComponent's height in footer.js. see media queries in FooterComponent
  }
  @media (max-width: ${breakpoints.l}px) {
    h1 {
      font-size: 45px;
      line-height: 50px;
    }
    h2 {
      font-size: 30px;
      line-height: 45px;
    }
    h5 {
      font-size: 20px;
      line-height: 27px;
    }
    h6,
    p,
    ul,
    li {
      font-size: 18px;
      line-height: 28px;
    }
  }
  @media (max-width: ${breakpoints.m}px) {
    h1 {
      font-size: 45px;
      line-height: 50px;
    }
    h2 {
      font-size: 30px;
      line-height: 46px;
    }
    h3 {
      font-size: 28px;
      line-height: 36px;
    }
    h4 {
      font-size: 22px;
      line-height: 32px;
    }
    h5 {
      font-size: 18px;
      line-height: 28px;
    }
    h6 {
      font-size: 18px;
      line-height: 28px;
    }
    p,
    ul,
    li {
      font-size: 16px;
      line-height: 27px;
    }
    padding-bottom: 80vh;
  }

  @media (max-width: ${breakpoints.s}px) {
    h1 {
      font-size: 36px;
      line-height: 46px;
    }
    h2 {
      font-size: 30px;
      line-height: 46px;
    }
    h3 {
      font-size: 28px;
      line-height: 34px;
    }
    h4 {
      font-size: 22px;
      line-height: 32px;
    }
    h5 {
      font-size: 20px;
      line-height: 27px;
    }
    h6 {
      font-size: 17px;
      line-height: 28px;
    }
    p,
    ul,
    li {
      font-size: 16px;
      line-height: 27px;
    }
    padding-bottom: 98vh;
  }
`

const Main = styled.main`
  margin: 0 auto;
  border-bottom: 1px solid black;
  position: relative;
  z-index: 2;

  @media (max-width: ${breakpoints.m}px) {
    /* margin-bottom: 30vh; */
  }
  @media (max-width: ${breakpoints.s}px) {
    /* margin-bottom: 90vh; */
    /* margin-bottom: 30vh; */
  }
`

export default Layout
