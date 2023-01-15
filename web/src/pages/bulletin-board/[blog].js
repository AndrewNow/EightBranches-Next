import { client } from "lib/sanity/client";
import { blogPageQuery } from "lib/sanity/blogQuery";
import groq from "groq";
import Layout from "components/layout";
import styled from "styled-components";
import breakpoints from "components/breakpoints";
import Link from "next/link";
import moment from "moment-timezone";
import Image from "next/image";
import MarkdownContent from "utils/markdownContent";
import FooterStamp from "svg/footerStamp";

const Blog = ({ blogData }) => {
  let isoString;
  let formattedDate;

  if (blogData.date) {
    isoString = blogData.date;
    formattedDate = moment
      .utc(isoString)
      .tz("America/Toronto")
      .format("DD.MM.YYYY");
  }

  let prevIsoString;
  let prevFormattedDate;

  if (blogData.prev) {
    if (blogData.prev.date) {
      prevIsoString = blogData.prev.date;
      prevFormattedDate = moment
        .utc(prevIsoString)
        .tz("America/Toronto")
        .format("DD.MM.YYYY");
    }
  }
  let nextIsoString;
  let nextFormattedDate;

  if (blogData.next) {
    if (blogData.next.date) {
      nextIsoString = blogData.next.date;
      nextFormattedDate = moment
        .utc(nextIsoString)
        .tz("America/Toronto")
        .format("DD.MM.YYYY");
    }
  }

  return (
    <Layout>
      {/* <Seo /> */}
      <BgColor>
        <SectionWrapper>
          <Article itemScope itemType="http://schema.org/Article">
            <Header>
              <h1 itemProp="headline">{blogData.title}</h1>
              <p>
                {blogData.readtime} minute read | {formattedDate}
              </p>
            </Header>
            <BlogContentHeader>
              <h6>{blogData.description}</h6>
            </BlogContentHeader>
            <ImageWrapper>
              <Image
                src={blogData.imageUrl}
                alt={blogData.description}
                placeholder="blur"
                blurDataURL={blogData.lqip}
                className="blog-image"
                width={1150}
                height={657}
                quality={100}
              />
            </ImageWrapper>
            <MarkdownWrapper>
              <MarkdownContent blocks={blogData.body} />
            </MarkdownWrapper>
            <EndArticle>
              <FooterStamp />
            </EndArticle>
          </Article>
        </SectionWrapper>
        <ContinueReading>
          <h1>More Posts</h1>
          <ContinueReadingPostWrapper>
            {blogData.prev && (
              <BulletinPost key={blogData.prev._id}>
                <h6>
                  <Link href={`/bulletin-board/${blogData.prev.slug}`}>
                    <span itemProp="headline">{blogData.prev.title}</span>
                  </Link>
                </h6>
                <Link
                  href={`/bulletin-board/${blogData.prev.slug}`}
                  passHref
                  legacyBehavior
                >
                  <a>
                    <Image
                      src={blogData.prev.imageUrl}
                      alt={blogData.prev.title}
                      placeholder="blur"
                      blurDataURL={blogData.prev.lqip}
                      width={546}
                      height={312}
                      className="image-cover"
                    />
                  </a>
                </Link>
                <BulletinDescription>
                  <p>{blogData.prev.readtime} minute read</p>
                  <p>{prevFormattedDate}</p>
                </BulletinDescription>
              </BulletinPost>
            )}
            {blogData.next && (
              <BulletinPost key={blogData.next._id}>
                <h6>
                  <Link href={`/bulletin-board/${blogData.next.slug}`}>
                    <span itemProp="headline">{blogData.next.title}</span>
                  </Link>
                </h6>
                <Link
                  href={`/bulletin-board/${blogData.next.slug}`}
                  passHref
                  legacyBehavior
                >
                  <a>
                    <Image
                      src={blogData.next.imageUrl}
                      alt={blogData.next.title}
                      placeholder="blur"
                      blurDataURL={blogData.next.lqip}
                      width={546}
                      height={312}
                      className="image-cover"
                    />
                  </a>
                </Link>
                <BulletinDescription>
                  <p>{blogData.next.readtime} minute read</p>
                  <p>{nextFormattedDate}</p>
                </BulletinDescription>
              </BulletinPost>
            )}
          </ContinueReadingPostWrapper>
        </ContinueReading>
        <ReturnBack>
          <Link href="/bulletin-board" passHref legacyBehavior>
            <ProgramLink>
              <LinkWrapper>
                <svg
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 1.41L3.42 6L8 10.59L6.59 12L0.590001 6L6.59 -1.23266e-07L8 1.41Z"
                    fill="black"
                  />
                </svg>
                <p>Return to Bulletin Board</p>{" "}
              </LinkWrapper>
            </ProgramLink>
          </Link>
        </ReturnBack>
      </BgColor>
    </Layout>
  );
};

export default Blog;

export async function getStaticProps({ params }) {
  // Use the 'blog' parameter to query for the correct blog post
  const blogData = await client.fetch(blogPageQuery, {
    slug: params.blog,
  });

  return {
    props: {
      blogData,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  // Query for the 'slug' values of all blog posts
  const slugs = await client.fetch(
    groq`*[_type == "blog" && defined(slug.current)][].slug.current`
  );

  // Map the 'slug' values to an object with the 'params' key
  return {
    paths: slugs.map((blog) => ({ params: { blog } })),
    fallback: "blocking",
  };
}

const BgColor = styled.div`
  background-color: var(--color-white);
  position: relative;
  z-index: 5;
`;

const SectionWrapper = styled.div`
  width: 75%;
  margin: 0 auto;
  position: relative;

  @media (max-width: ${breakpoints.m}px) {
    width: 90%;
  }
`;

const Article = styled.article`
  width: 100%;
  position: relative;
`;
const ImageWrapper = styled.div`
  width: 80%;
  position: relative;

  .blog-image {
    aspect-ratio: 1150/657;
    object-fit: contain;
    object-position: left;
    width: 100%;
    height: auto;
  }

  @media (max-width: ${breakpoints.l}px) {
    width: 100%;
  }
`;
const Header = styled.div`
  padding-top: 15rem;

  h1 {
    max-width: 55%;
  }

  p {
    color: #989898;
    padding-top: 3rem;
    font-size: 16px;
    line-height: 26px;
  }
  @media (max-width: ${breakpoints.xxl}px) {
    h1 {
      max-width: 70%;
    }
  }
  @media (max-width: ${breakpoints.xl}px) {
    h1 {
      max-width: 80%;
    }
    p {
      padding-top: 1rem;
      padding-bottom: 2rem;
    }
  }

  @media (max-width: ${breakpoints.l}px) {
    p {
      padding-top: 1rem;
      padding-bottom: 2rem;
    }
  }

  @media (max-width: ${breakpoints.m}px) {
    padding-top: 10rem;
    p {
      padding-bottom: 0rem;
      padding-top: 1rem;
    }
    h1 {
      max-width: 100%;
    }
  }
`;

const BlogContentHeader = styled.section`
  padding-left: 25vw;
  padding-bottom: 5rem;
  position: relative;

  @media (max-width: ${breakpoints.l}px) {
    padding-left: 0rem;
  }

  @media (max-width: ${breakpoints.m}px) {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }
  @media (max-width: ${breakpoints.s}px) {
    h6 {
      font-size: 16px;
    }
  }
`;

const MarkdownWrapper = styled.section`
  padding-top: 5rem;
  overflow-x: hidden;

  * {
    padding-left: 25vw;
    > iframe {
      padding-left: 0;
      aspect-ratio: 16/9;
      width: 100%;
      height: auto;
    }
  }

  // target image padding -- images are nested in p > span > picture > etc.
  p {
    span {
      /* margin: 1.5em 0; */
    }
  }

  img {
    /* object-fit: contain; */
    height: auto;
    margin: 1rem auto;
    padding-bottom: 1rem;
    /* padding-left: 0; */
  }

  p {
    font-size: 22px;
    line-height: 175%;
    font-family: "Matter-light";
    margin-bottom: 1.5rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 4rem;
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
    padding-left: 30vw;
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

  ul,
  ol {
    li {
      font-size: 22px;
      line-height: 150%;
      padding-left: 1rem;
      padding-bottom: 1rem;
      font-family: "Matter-light";
      strong {
        font-family: "Matter-regular";
      }
    }
  }

  blockquote {
    border-left: 2px solid var(--color-darkgreen);
    padding-left: 1rem;
    margin-top: 5rem;
    margin-bottom: 5rem;
    font-family: "Matter-regular";
    font-size: 18px;
    line-height: 150%;

    p {
      font-family: "Matter-regular";
      padding-left: 1rem;
      font-size: 36px;
      line-height: 38.5px;
    }

    ol,
    li,
    a,
    em,
    strong,
    code,
    span,
    td,
    tr,
    th,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    div {
      padding-left: 1rem;
    }
  }
  ol {
    padding-top: 3rem;
  }

  @media (max-width: ${breakpoints.xxl}px) {
    * {
      padding-left: 15vw;
    }
    p {
      font-size: 20px;
      line-height: 150%;
    }
    ul,
    ol {
      padding-left: 20vw;
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

    ul,
    ol {
      li {
        font-size: 18px;
        line-height: 30px;
      }
      padding-left: 2rem;
      font-size: 18px;
      line-height: 30px;
      font-family: "Matter-regular";
    }

    ul {
      li {
        padding-left: 1rem;
        ul {
          padding-left: 1rem;
        }
      }
      p {
        padding-left: 0;
      }
    }

    blockquote {
      border-left: 2px solid var(--color-darkgreen);
      padding-left: 1rem;
      margin: 2.5rem auto;

      p {
        font-family: "Matter-regular";
        padding-left: 1rem;
        font-size: 18px;
        line-height: 30px;
      }
    }
  }

  @media (max-width: ${breakpoints.m}px) {
    padding-top: 2.5rem;
    * {
      padding-left: 0vw;
    }

    // target image padding -- images are nested in p > span > picture > etc.
    p {
      span {
        margin: 1rem 0;
      }
    }

    p {
      font-size: 16px;
      line-height: 27.5px;
      font-family: "Matter-light";
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
      li {
        font-size: 16px;
        line-height: 27.5px;
      }
      padding-left: 1.5rem;
      font-size: 16px;
      line-height: 27.5px;
      font-family: "Matter-regular";
    }

    ul {
      li {
        padding-left: 0.5rem;
        ul {
          padding-left: 1rem;
        }
      }
      p {
        padding-left: 0;
      }
    }

    blockquote {
      border-left: 2px solid var(--color-darkgreen);
      margin: 2.5rem auto;

      p {
        font-family: "Matter-regular";
        padding-left: 1rem;
        font-size: 18px;
        line-height: 27.5px;
      }
    }
  }
`;

const ContinueReading = styled.section`
  width: 90%;
  margin: 0 auto;
  margin-top: 10rem;

  h1 {
    margin: 0 auto;
    margin-bottom: 7rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${breakpoints.xxl}px) {
    margin-top: 10rem;
  }
  @media (max-width: ${breakpoints.m}px) {
    width: 100%;
    margin-top: 10rem;
    h1 {
      margin-bottom: 4rem;
    }
  }
`;

const BulletinPost = styled.article`
  border-top: 1px solid black;
  justify-self: center;
  width: 550px;
  margin-bottom: 5rem;
  margin: 0 3rem;
  position: relative;

  h6 {
    cursor: pointer;
    a {
      height: 70px;
      -webkit-line-clamp: 2;
      display: -webkit-box;
      line-clamp: 2;
      width: 100%;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    padding-top: 0.75rem;
    padding-bottom: 1rem;
    transition: color ease-in-out 0.15s;

    :hover {
      color: var(--color-orange);
    }
  }

  @media (max-width: ${breakpoints.m}px) {
    h6 {
      a {
        height: auto;
      }
    }
    margin: 0 auto;
    width: auto;
    padding-bottom: 5rem;
  }
`;

const BulletinDescription = styled.small`
  display: flex;
  justify-content: space-between;

  p {
    padding-top: 0.75rem;
    font-size: 16px;
    color: #3a3a3a;
  }
`;

const EndArticle = styled.div`
  margin-top: 7.5rem;
  margin-bottom: 0rem;
  display: flex;

  svg {
    margin: 0 auto;
  }

  @media (max-width: ${breakpoints.xxl}px) {
    margin-top: 5rem;
    margin-bottom: 5rem;
  }

  @media (max-width: ${breakpoints.m}px) {
    svg {
      width: 30px;
    }
  }
`;

const ContinueReadingPostWrapper = styled.div`
  width: 75%;
  display: flex;
  margin: 0 auto;
  flex-direction: row;
  justify-content: center;
  list-style: none;
  padding-bottom: 10rem;
  .image-cover {
    object-fit: cover;
  }

  @media (max-width: ${breakpoints.xl}px) {
    width: 95%;
    padding-bottom: 7rem;
  }

  @media (max-width: ${breakpoints.l}px) {
    width: 95%;
  }

  @media (max-width: ${breakpoints.m}px) {
    width: 90%;
    flex-direction: column;
    padding-bottom: 2.5rem;
  }
`;

const ReturnBack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5rem;
`;

const ProgramLink = styled.a`
  cursor: pointer;
  color: black;
  text-decoration: none;
`;

const LinkWrapper = styled.div`
  display: flex;
  align-items: baseline;
  font-family: "matter-light";

  svg {
    transition: 0.2s all cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  p {
    padding-left: 0.75rem;
    padding-top: 1rem;
    font-family: "Matter-regular";
    font-size: 19px;
    transition: var(--hover-transition);
  }

  :hover {
    p {
      color: #00000095;
    }
    svg {
      opacity: 0.65;
      transform: translate3d(-8px, 0, 0);
    }
  }

  @media (max-width: ${breakpoints.m}px) {
    p {
      font-size: 17px;
    }
  }
`;
