import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import breakpoints from "components/breakpoints";
// import Seo from "components/seo";
import Image from "next/image";
import { client } from "lib/sanity/client";
import { getEventsData } from "lib/sanity/eventsQuery";
import { getBlogData } from "lib/sanity/blogQuery";
import moment from "moment-timezone";
import { getContactData } from "lib/sanity/contactInfoQuery";

const News = ({ eventData, blogData }) => {
  const MORE_POSTS = 6;
  // Only display 6 posts at first
  const [visiblePosts, setVisiblePosts] = useState(MORE_POSTS);

  // When user clicks on the load more button, load 2 more posts (see: MORE_POSTS)
  const handleLoadNewPosts = () =>
    setVisiblePosts((visiblePosts) => visiblePosts + MORE_POSTS);
  // When we reach the end of the array, load more posts button becomes a "close posts" button
  const handleClosePosts = () => setVisiblePosts(MORE_POSTS);

  console.log(blogData)
  return (
    <>
      {eventData.length > 0 ? (
        <UpcomingEventsWrapper>
          <SectionWrapper>
            <h2>Upcoming Events</h2>
            <EventWrapper>
              {eventData.slice(0, 3).map((eventData) => {
                let isoString;
                let formattedDate;

                if (eventData.date) {
                  isoString = eventData.date;
                  formattedDate = moment
                    .utc(isoString)
                    .tz("America/Toronto")
                    .format("dddd, MMMM Do (h:mm A z)");
                } else {
                  formattedDate = "Date TBD";
                }
                return (
                  <Event key={eventData._id}>
                    <div>
                      <Link
                        href={eventData.slug.current}
                        itemProp="url"
                        passHref
                        legacyBehavior
                      >
                        <EventLink>
                          <h4>{eventData.title}</h4>
                        </EventLink>
                      </Link>
                      <h6>Hosted by: {eventData.host}</h6>
                      {formattedDate ? (
                        <h6>{formattedDate}</h6>
                      ) : (
                        <h6>Event TBD</h6>
                      )}
                      <Link
                        href={`/bulletin-board/events/${eventData.slug.current}`}
                        itemProp="url"
                        passHref
                        legacyBehavior
                      >
                        <SignUpLink>View details</SignUpLink>
                      </Link>
                    </div>
                  </Event>
                );
              })}
            </EventWrapper>
          </SectionWrapper>
        </UpcomingEventsWrapper>
      ) : (
        <NoEventsFallback />
      )}
      <BulletinWrapper>
        <SectionWrapper>
          <BulletinHeader>
            <h2>Bulletin Board</h2>
            <h6>
              Stay up to date with our school and learn more about TCM
              (traditional Chinese medicine). The bulletin board is the best
              place to find updates.
            </h6>
          </BulletinHeader>
          <Bulletingrid>
            {blogData.slice(0, visiblePosts).map((blogData) => {
              const isoString = blogData.date;
              const formattedDate = moment
                .utc(isoString)
                .tz("America/Toronto")
                .format("DD.MM.YYYY");
              return (
                <BulletinPost key={blogData.slug}>
                  <h6>
                    <Link
                      itemProp="url"
                      href={`/bulletin-board/${blogData.slug}`}
                    >
                      {blogData.title}
                    </Link>
                  </h6>
                  <Link
                    href={`/bulletin-board/${blogData.slug}`}
                  >
                    {blogData.imageUrl &&
                      <Image
                        src={blogData.imageUrl}
                        alt={blogData.title}
                        placeholder="blur"
                        blurDataURL={blogData.lqip}
                        quality={90}
                        width={550}
                        height={314}
                        className="bulletin-image"
                        />
                      }
                  </Link>
                  <BulletinDescription>
                    <p>{blogData.readtime} minute read</p>
                    <p>{formattedDate}</p>
                  </BulletinDescription>
                </BulletinPost>
              );
            })}
          </Bulletingrid>
          {blogData.length > MORE_POSTS && (
            <>
              {visiblePosts >= blogData.length ? (
                // if user hits end of data.blog.edges array, button closes posts
                <LoadMore>
                  <EventsButton onClick={handleClosePosts}>
                    <p>View less posts</p>
                  </EventsButton>
                </LoadMore>
              ) : (
                // Button to open more posts
                <LoadMore>
                  <EventsButton onClick={handleLoadNewPosts}>
                    <p>Load more posts</p>
                  </EventsButton>
                </LoadMore>
              )}
            </>
          )}
        </SectionWrapper>
      </BulletinWrapper>
    </>
  );
};

export async function getStaticProps() {
  const eventData = await getEventsData();
  const blogData = await getBlogData();
  const contactInfo = await getContactData();
  return {
    props: {
      eventData,
      blogData,
      contactInfo,
    },
    revalidate: 10,
  };
}

export default News;

const NoEventsFallback = styled.div`
  background-color: white;
  height: 7rem;
`;
const UpcomingEventsWrapper = styled.div`
  background-color: var(--color-darkgreen);
  position: sticky;
  z-index: 1;
  width: 100%;
  top: 0;
  padding-top: 15rem;

  h2 {
    color: var(--color-white);
    padding-bottom: 5rem;
  }

  @media (max-width: ${breakpoints.m}px) {
    position: relative;
    padding-top: 10rem;

    h2 {
      padding-bottom: 2.5rem;
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    padding-top: 7rem;
  }
`;

const SectionWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const EventWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  article:first-child {
    padding-right: 2.5rem;
  }
  article:not(:first-child) {
    border-left: 1px solid var(--color-white);
    padding-left: 5rem;
    padding-right: 5rem;
  }

  @media (max-width: ${breakpoints.xxl}px) {
    article:not(:first-child) {
      padding-left: 2.5rem;
      padding-right: 2.5rem;
    }
  }

  @media (max-width: ${breakpoints.m}px) {
    flex-direction: column;

    article:not(:first-child) {
      border-top: 1px solid white;
      padding-left: 0rem;
      padding-top: 2.5rem;
      border-left: none;
    }
  }
`;

const Event = styled.article`
  min-width: 33%;
  max-width: 40%;
  color: var(--color-white);
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    padding-bottom: 1rem;
    font-family: "Matter-light";
  }

  h6 {
    :last-child {
      padding-bottom: 0.5rem;
    }
  }

  @media (max-width: ${breakpoints.xxl}px) {
    min-width: 33%;
    max-width: 50%;
  }
  @media (max-width: ${breakpoints.m}px) {
    margin-bottom: 2.5rem;
    min-width: 100%;
    max-width: 100%;
    width: 100%;
  }
`;
const EventLink = styled.a`
  text-decoration: none;
  h4 {
    color: var(--color-white);
    padding-bottom: 0.75rem;
    /* padding-right: 0.5rem; */
  }
`;

const SignUpLink = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 150px;
  cursor: pointer;
  border-radius: 10px;
  line-height: 26px;
  font-size: 16px;
  border: 1px solid var(--color-white);
  color: var(--color-white);
  margin-top: 1rem;
  padding: 0.35rem 1.5rem;
  text-decoration: none;
  font-family: "Matter-regular";

  transition: 0.25s all ease-in-out;
  :hover {
    color: var(--color-darkgreen);
    background-color: var(--color-white);
  }
`;

const BulletinWrapper = styled.div`
  width: 100%;
  padding-top: 5rem;
  z-index: 2;
  position: relative;
  background-color: var(--color-white);
  margin: 0 auto;
`;

const Bulletingrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2em;
  @media (max-width: ${breakpoints.xl}px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.m}px) {
  }
  @media (max-width: ${breakpoints.s}px) {
    grid-template-columns: 1fr;

    column-gap: 0rem;
  }
`;

const BulletinHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1em;
  /* margin-top: 15rem; */
  margin-bottom: 7rem;

  & h6 {
    width: 70%;
  }

  @media (max-width: ${breakpoints.m}px) {
    gap: 0em;
    display: flex;
    flex-direction: column;
    & h6 {
      width: 100%;
    }
    & h2 {
      padding-bottom: 1rem;
    }
  }
`;

const BulletinPost = styled.article`
  border-top: 1px solid black;
  justify-self: center;
  max-width: 550px;
  /* height: 420px; */
  margin-bottom: 5rem;
  .bulletin-image {
    transition: var(--hover-transition);
    aspect-ratio: 550/314;
    object-fit: cover;
    width: 100%;
    max-width: 550;
    height: auto;
  }
  & h6 {
    padding-top: 0.75rem;
    margin-bottom: 1rem;
    transition: var(--hover-transition);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    height: 75px;
    width: 85%;
    overflow: hidden;

    &:hover {
      color: var(--color-orange);
    }
  }
  @media (max-width: 1600px) {
    margin-bottom: 4rem;
  }

  @media (max-width: ${breakpoints.m}px) {
    width: auto;
  }

  @media (max-width: ${breakpoints.s}px) {
    margin-bottom: 3rem;
    h6 {
      height: auto;
    }
    height: auto;
  }
`;

const BulletinDescription = styled.small`
  display: flex;
  justify-content: space-between;

  & p {
    padding-top: 0.75rem;
    font-size: 16px;
    color: #3a3a3a;
  }

  @media (max-width: ${breakpoints.m}px) {
    & p {
      font-size: 12px;
      letter-spacing: 0.02rem;
    }
  }
`;

const LoadMore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  padding-top: 1rem;
`;

const EventsButton = styled.button`
  background: none;
  border: 1px solid black;
  border-radius: 10px;
  text-align: center;
  padding: 0.25rem;
  cursor: pointer;
  margin: 0 auto;
  font-family: "Matter-regular";
  transition: var(--hover-transition);
  p {
    transition: var(--hover-transition);
  }
  :hover {
    p {
      color: var(--color-orange);
    }
    border: 1px solid var(--color-orange);
  }
  p {
    color: black;
    font-size: 18px;
    font-family: "Matter-light";
    padding-bottom: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    width: 160px;
  }
`;
