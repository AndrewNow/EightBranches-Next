import React from "react"
import Link from "next/link"
import styled from "styled-components"
import breakpoints from "/components/breakpoints"
// import Seo from "/components/seo"
import { Arrow } from "/svg/misc"
import { getCareersData } from "lib/sanity/careersQuery"
import { getContactData } from "lib/sanity/contactInfoQuery"

const Careers = ({careersData}) => {
  // const siteTitle = data.site.siteMetadata?.title || `Work at Eight Branches`


  console.log(JSON.stringify(careersData, undefined, 4))
  const studentJobs = careersData.careerData.filter(post => post.category === "Students")
  const instructorJobs = careersData.careerData.filter(post => post.category === "Instructor")
  // const studentJobs = careersData.studentData
  return (
    <>
      {/* <Seo
        title={siteTitle}
        description="Interested in teaching or volunteering at Eight Branches? Send us your resume!"
      /> */}
      <Wrapper>
        <Header>
          <h1>Careers</h1>
          <p>
            Interested in working at Eight Branches? Explore our open positions
            below.
          </p>
        </Header>
        <Jobs>
          <JobTypeWrapper>
            <JobTypeTitle>
              <h2>Listings for instructors</h2>
            </JobTypeTitle>
            {instructorJobs.length > 0 ? (
              <Job>
                {instructorJobs?.map(job => {
                  return (
                    <HideArrowLi key={job.slug}>
                      <Link href={`careers/${job.slug}`} itemProp="url" className="job-link">
                        <ArrowWrapper>
                          <Arrow color={"var(--color-orange)"} />
                        </ArrowWrapper>
                        <h4>{job.careersTitle}</h4>
                        {job.description && <small>{job.description}</small>}
                      </Link>
                    </HideArrowLi>
                  )
                })}
              </Job>
            ) : (
              <p className="fallback">No instructor job listings available at the moment!</p>
            )}
          </JobTypeWrapper>
          <JobTypeWrapper>
            <JobTypeTitle>
              <h2>Listings for students</h2>
              <p>
                <small>
                  Students can visit our regularly updated job board for
                  acupuncturist listings.
                  {/* <br /> */}
                  <strong> Employers: </strong>
                  contact us at{" "}
                  <a href="mailto:marketing@eightbranches.ca">
                    marketing@eightbranches.ca
                  </a>{" "}
                  to list your open acupuncturist position on this page.
                </small>
              </p>
            </JobTypeTitle>
            {studentJobs.length > 0 ? (
              <Job>
                {studentJobs?.map(job => {
                  return (
                    <HideArrowLi key={job.slug}>
                      <Link href={`careers/${job.slug}`} itemProp="url" className="job-link">
                        <ArrowWrapper>
                          <Arrow color={"var(--color-orange)"} />
                        </ArrowWrapper>
                        <h4>{job.careersTitle}</h4>
                        {job.description && <small>{job.description}</small>}
                      </Link>
                    </HideArrowLi>
                  )
                })}
              </Job>
            ) : (
              <p className="fallback">No student job listings available at the moment!</p>
            )}
          </JobTypeWrapper>
        </Jobs>
      </Wrapper>
    </>
  )
}

export default Careers

export async function getStaticProps() {
  const careersData = await getCareersData();
  const contactInfo = await getContactData();
  
  return {
    props: {
      careersData,
      contactInfo
    },
    revalidate: 10,
  };
}

const Wrapper = styled.div`
  background: var(--color-lightestbeige);
`

const Header = styled.header`
  width: 50%;
  padding-top: 20vh;
  padding-bottom: 5vh;
  margin: 0 auto;
  text-align: center;
  h1 {
    margin-bottom: 1rem;
  }
  p {
    font-family: "Matter-Light";
  }
  @media (max-width: ${breakpoints.l}px) {
    width: 80%;
    text-align: left;
  }
  @media (max-width: ${breakpoints.s}px) {
    width: 90%;
  }
`

const Jobs = styled.section`
  width: 60%;
  margin: 5rem auto;
  margin-bottom: 0;
  padding-bottom: 20vh;
  position: relative;

  @media (max-width: ${breakpoints.xxl}px) {
    width: 75%;
  }
  @media (max-width: ${breakpoints.l}px) {
    width: 80%;
  }

  @media (max-width: ${breakpoints.m}px) {
    margin: 2.5rem auto;
    margin-bottom: 0rem;
  }
  @media (max-width: ${breakpoints.s}px) {
    width: 90%;
  }
`

const JobTypeTitle = styled.div`
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--color-brown);
  h2 {
    color: var(--color-darkgreen);
    padding-bottom: 1rem;
  }
  a {
    color: var(--color-lightorange);
  }
  strong {
    font-family: "Matter-Regular";
  }
  p {
    color: #3d3d3d;
    padding-bottom: 1.5rem;
    small {
      line-height: 115%;
      font-family: "Matter-Light";
    }
  }
`

const JobTypeWrapper = styled.div`
  display: block;
  margin-bottom: 7.5rem;
  .fallback {
    padding: 1rem 2rem;
  }
  @media (max-width: ${breakpoints.s}px) {
    .fallback {
      padding: 1rem;
    }
  }
`

const Job = styled.ul`
  margin: 1rem 0;
  padding-left: 0;

  li {
    transition: var(--hover-transition-slow);
    display: flex;
    border-radius: 5px;
    justify-content: space-between;
    align-items: baseline;
    cursor: pointer;
    a {
      display: inline-block;
      width: 100%;
      transition: var(--hover-transition-slow);
      text-decoration: none;
    }
    :hover {
      background: #f5f2ea;
      border-radius: 5px;
      a {
        color: var(--color-orange) !important;
        /* text-decoration: underline; */
      }
    }
  }
`

const HideArrowLi = styled.li`
  position: relative;
  padding: 1rem 2rem;

  .job-link {
    position: relative;
    width: 100%;
    height: 100%;
  }
  h4 {
    position: relative;
    z-index: 2;
    cursor: pointer;
    background: var(--color-lightestbeige);
    box-sizing: border-box;
    width: 100%;
    color: var(--color-charcoal) !important;
    transition: var(--hover-transition-slow);
  }
  small {
    color: var(--color-grey);
    font-family: "Matter-Light";
  }
  :hover {
    div {
      svg {
        color: var(--color-orange);
      }
    }
    h4 {
      background: #f5f2ea;
      color: var(--color-orange) !important;
      margin-left: 1rem;
      padding-left: 1rem;
    }
  }

  @media (max-width: ${breakpoints.l}px) {
    display: flex;
    align-items: baseline;
    justify-content: flex-start;
    :hover {
      h4 {
        padding-left: 0;
        margin-left: 0;
        transform: none;
      }
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    padding: 1rem;

    h4 {
      font-size: 19px;
    }
  }
`

const ArrowWrapper = styled.div`
  position: absolute;
  z-index: 0;
  top: 1px;
  left: 0;

  @media (max-width: ${breakpoints.l}px) {
    display: none;
  }
`
