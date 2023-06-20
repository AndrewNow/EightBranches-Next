import React from "react"
import Link from "next/link"
import styled from "styled-components"
// import Seo from "../components/seo"
import breakpoints from "/components/breakpoints"
import { getCareersPage } from "lib/sanity/careersQuery"
import client from "lib/sanity/client"
import groq from "groq"
import { getContactData } from "lib/sanity/contactInfoQuery"
import MarkdownContent from "utils/markdownContent"

const CareerPost = ({ careerData }) => {
  // const siteTitle = frontmatter.title || `Title`
  return (
    <>
      {/* <Seo title={siteTitle} description={frontmatter.description} /> */}
      <Wrapper>
        <InnerWrapper>
          <Header>
            <h1>{careerData.careersTitle}</h1>
            {careerData.description && (
              <small>{careerData.description}</small>
            )}
            <br />
          </Header>
          <Content>
            <MarkdownContent blocks={ careerData.body } />
          </Content>
          <BackLink href="/careers">
            <p>
              <svg
                width="8"
                height="12"
                viewBox="0 0 8 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.41016 10.59L2.83016 6L7.41016 1.41L6.00016 0L0.000156403 6L6.00016 12L7.41016 10.59Z"
                  fill="black"
                />
              </svg>
              Back to Careers
            </p>
          </BackLink>
        </InnerWrapper>
      </Wrapper>
    </>
  )
}

export default CareerPost

export async function getStaticProps({ params }) {
  // Use the 'blog' parameter to query for the correct blog post
  const careerData = await getCareersPage(params)
  const contactInfo = await getContactData()

  return {
    props: {
      careerData,
      contactInfo
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const slugs = await client.fetch(
    groq`*[_type == "careers" && defined(careerData[].slug.current)][].careerData[].slug.current`
  );

  return {
    paths: slugs.map((careers) => ({ params: { careers } })),
    fallback: "blocking",
  };
}



const Wrapper = styled.article`
  background: var(--color-lightestbeige);
  padding-bottom: 5rem;
  position: relative;
`
const InnerWrapper = styled.div`
  width: 65%;
  margin: 0 auto;

  @media (max-width: ${breakpoints.l}px) {
    width: 80%;
  }

  @media (max-width: ${breakpoints.m}px) {
    width: 90%;
  }
`

const Header = styled.header`
  padding-top: 20vh;
  padding-bottom: 5vh;
  margin: 0 auto;
  border-bottom: 1px solid var(--color-salmon);
  h1 {
    margin-bottom: 1rem;
  }
  small {
    font-size: 18px;
    color: var(--color-charcoal);
    font-family: "Matter-light";
  }
  @media (max-width: ${breakpoints.l}px) {
    padding-bottom: 2.5rem;
  }
`

const Content = styled.div`
  width: 80%;
  margin: 0;
  padding: 2rem 0;
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  small {
    display: block;
    padding: 1rem 0;
    font-family: "Matter-light";
    a {
      font-family: "Matter-light";
      color: var(--color-orange);
    }
  }
  a {
    font-family: "Matter-light";
    color: var(--color-orange);
  }
  @media (max-width: ${breakpoints.xl}px) {
    width: 100%;
    padding-top: 0;
  }
`

const BackLink = styled(Link)`
  color: var(--color-black);
  width: 100%;
  margin: 2rem auto;
  display: block;
  text-decoration: none;
  display: grid;
  place-items: center;
  transition: var(--hover-transition);
  p > svg {
    transition: var(--hover-transition);
    margin-right: 0.75rem;
  }
  :hover {
    text-decoration: underline;

    p > svg {
      transform: translateX(-10px);
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    text-align: center;
  }
`

const BlogContent = styled.section`
  /* overflow-x: hidden; */

  // target image padding -- images are nested in p > span > picture > etc.
  p {
    span {
      margin: 1.5em 0;
    }
  }

  img {
    padding-left: 0;
  }

  p {
    font-size: 24px;
    line-height: 35px;
    font-family: "Matter-light";
  }

  h3 {
    font-family: "Matter-light";
    margin-top: 3rem;
    margin-bottom: 1rem;
  }

  a {
    text-decoration: underline;
    font-weight: 800;
    color: var(--color-black);
    transition: ease 0.15s all;
    :hover {
      color: var(--color-orange);
    }
  }

  ul,
  ol {
    font-size: 18px;
    line-height: 25px;
    font-family: "Matter-regular";
  }

  figcaption {
    font-family: "Matter-light";
    letter-spacing: 0.01rem;
    font-style: italic;
    color: #989898;
  }

  li,
  a,
  em,
  strong,
  code,
  span,
  td,
  tr,
  th,
  figcaption {
    padding-left: 0;
  }

  ul {
    li {
      padding-left: 0.5rem;
      ul {
        padding-left: 0.5rem;
      }
    }
    p {
      padding-left: 0;
    }
  }

  @media (max-width: ${breakpoints.xxl}px) {
    p {
      font-size: 20px;
      line-height: 150%;
    }
  }
  @media (max-width: ${breakpoints.xl}px) {
    // target image padding -- images are nested in p > span > picture > etc.
    p {
      span {
        margin: 1rem 0;
      }
    }

    * {
      padding-left: 0vw;
    }

    p {
      font-size: 18px;
      line-height: 30px;
      font-family: "Matter-light";
    }

    a {
      text-decoration: underline;
      font-weight: 800;
      color: var(--color-black);
      transition: ease 0.15s all;
      &:hover {
        color: var(--color-orange);
      }
    }
  }

  @media (max-width: ${breakpoints.m}px) {
    p {
      font-size: 16px;
      line-height: 27.5px;
    }
    ul,
    ol {
      font-size: 16px;
      line-height: 27.5px;
      font-family: "Matter-regular";
    }
  }
`
