import React from "react"
import styled from "styled-components"
import Seo from "/components/seo"
import { getContactData } from "lib/sanity/contactInfoQuery"
// import MapAlumniData from "/components/mapAlumniData"
import breakpoints from "/components/breakpoints"
import { getAlumniData } from "lib/sanity/alumniQuery"
import { FacultyMember } from "components/Faculty/facultyCards"

const Alumni = ({ alumniData }) => {
  return (
    <>
      <Seo
        title="Our Faculty"
        keywords={[
          `Eight Branches`,
          `Eight Branches Toronto`,
          `Eight Branches ontario`,
          `Eight Branches faculty`,
          `chinese medicine experts canada`,
          `chinese medicine experts ontario`,
          `chinese medicine experts toronto`,
          `chinese medicine doctor toronto`,
          `chinese medicine doctor ontario`,
          `tcm doctor toronto`,
          `best chinese medicine toronto`,
          `traditional chinese medicine mississauga`,
        ]}
      />
      <AlumniWrapper>
        <SectionWrapper>
          <AlumniHeader>
            <h1>Success Stories</h1>
            <h6>
              Read about our notable alumni and the great things they have gone
              on to do.
            </h6>
          </AlumniHeader>
          {alumniData.alumniData.length === 0 ? (
            <p style={{marginBottom: "5rem"}}>
              Coming soon... No alumni entries to show yet!
            </p>
          ) : (
              <AlumniGrid>
                {alumniData.alumniData.map((alumni, i) => {
                  return (
                    <FacultyMember data={alumni} key={`${alumni.lqip} + ${i}`} />
                  )
                })}
              {/* <MapAlumniData /> */}
            </AlumniGrid>
          )}
        </SectionWrapper>
      </AlumniWrapper>
    </>
  )
}

export default Alumni

export async function getStaticProps() {
  const contactInfo = await getContactData();
  const alumniData = await getAlumniData();

  return {
    props: {
      alumniData,
      contactInfo
    },
    revalidate: 10,
  };
}


const SectionWrapper = styled.section`
  width: 90%;
  margin: 0 auto;
  padding-bottom: 15rem;

  h2 {
    padding-bottom: 5rem;
  }

  @media (max-width: ${breakpoints.m}px) {
    padding-bottom: 5rem;
    h2 {
      padding-top: 5rem;
      padding-bottom: 2.5rem;
    }
  }
`

const AlumniWrapper = styled.div`
  width: 100%;
  padding-top: 15rem;
  z-index: 2;
  position: relative;
  background-color: var(--color-white);
  margin: 0 auto;

  @media (max-width: ${breakpoints.m}px) {
    padding-top: 10rem;
  }
`

const AlumniHeader = styled.header`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 5rem;

  h1 {
    padding-bottom: 2rem;
  }

  h6 {
    width: 60%;
  }
  @media (max-width: ${breakpoints.m}px) {
    margin-bottom: 3rem;

    h1 {
      padding-bottom: 1rem;
    }
    h6 {
      width: 100%;
    }
  }
`

const AlumniGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 2em;

  @media (max-width: ${breakpoints.xl}px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${breakpoints.s}px) {
    display: inline;
  }
`
