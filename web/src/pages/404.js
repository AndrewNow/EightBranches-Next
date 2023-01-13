// import { graphql, Link } from "gatsby";
import Link from "next/link";
import Layout from "components/layout";
// import Seo from "../components/seo";
import styled from "styled-components";
import breakpoints from "components/breakpoints";
import { motion } from "framer-motion";

const NotFoundPage = () =>
  // { data, location }
  {
    // const siteTitle = data.site.siteMetadata.title;

    const FadeIn = {
      hidden: {
        y: 40,
        opacity: 0,
      },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
        },
      },
    };

    return (
      <Layout
      // location={location} title={siteTitle}
      >
        {/* <Seo title="404: Not Found" /> */}
        <Bg>
          <TextWrapper variants={FadeIn} initial="hidden" animate="visible">
            <h1>404</h1>
            <p>
              Oops! You&apos;ve reached a page that no longer exists. Please
              click the button below to return to the home page.
            </p>
            <ReadMore href="/">Home</ReadMore>
          </TextWrapper>
        </Bg>
      </Layout>
    );
  };

export default NotFoundPage;

// export const pageQuery = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `;

const Bg = styled.div`
  background-color: var(--color-lightestbeige);
  height: 95vh;
  text-align: center;
  color: var(--color-darkgreen);
`;

const TextWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  h1 {
    font-size: 11vw;
    line-height: 130%;
  }
  p {
    width: 35%;
    font-family: "matter-light";
  }

  @media (max-width: ${breakpoints.xl}px) {
    h1 {
      font-size: 180px;
    }
    p {
      width: 50%;
    }
  }
  @media (max-width: ${breakpoints.l}px) {
    h1 {
      font-size: 150px;
    }
    p {
      width: 70%;
    }
  }
  @media (max-width: ${breakpoints.m}px) {
    h1 {
      font-size: 130px;
    }

    p {
      width: 80%;
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    h1 {
      font-size: 110px;
    }
  }
`;

const ReadMore = styled(Link)`
  display: inline-block;
  margin-top: 4rem;
  border-radius: 10px;
  line-height: 26px;
  font-size: 16px;
  border: 1px solid var(--color-darkgreen);
  color: var(--color-darkgreen);
  padding: 0.35rem 2.5rem;
  text-decoration: none;
  font-family: "Matter-regular";
  text-align: center;
  transition: 0.25s all ease-in-out;

  :hover {
    color: var(--color-white);
    background-color: var(--color-darkgreen);
  }
  @media (max-width: ${breakpoints.xl}px) {
    margin-left: 0rem;
    margin-top: 3rem;
    display: block;
    max-width: 140px;
  }
  @media (max-width: ${breakpoints.m}px) {
    margin: 0 auto;
    margin-top: 2rem;
  }
`;
