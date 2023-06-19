import React from "react"
import styled from "styled-components"
// import Seo from "/components/seo"
import { getContactData } from "lib/sanity/contactInfoQuery"
import breakpoints from "/components/breakpoints"
import { FacultyMember } from "components/Faculty/facultyCards"
import { getFacultyInstructorData, getFacultyLeadershipData } from "lib/sanity/facultyQuery"
import Image from "next/image"
import img1 from "../images/PartnershipLogos/8BClinic.png"
import img2 from "../images/PartnershipLogos/Council.png"
import img3 from "../images/PartnershipLogos/Channels.png"
import img4 from "../images/PartnershipLogos/Hillgreen.png"
import img5 from "../images/PartnershipLogos/FTCM.png"
import img6 from "../images/PartnershipLogos/CCATCM.png"
import img7 from "../images/PartnershipLogos/MassageAddict.png"

const OurFaculty = ({ facultyLeadershipData, facultyInstructorData }) => {
  const leadershipData = facultyLeadershipData.facultyLeadershipData
  const instructorData = facultyInstructorData.facultyInstructorData

  // const siteTitle = data.site.siteMetadata?.title || `Our Alumni`
  return (
    <>
      {/* <Seo
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
      /> */}
      <FacultyWrapper>
        <SectionWrapper>
          <FacultyHeader>
            <h1>Meet Our Faculty</h1>
            <h6>
              Eight Branches’ greatest asset is our faculty, which is comprised
              of practicing health professionals who share the benefits of their
              expertise with our students.
            </h6>
          </FacultyHeader>
          <h2>Leadership</h2>
          {leadershipData.length === 0 ? (
            <p style={{ marginBottom: "5rem" }}>
              Coming soon... No leadership members to show yet!
            </p>
          )
          : (
            <FacultyGrid>
                {leadershipData.map((member, i) => {
                return (
                  <FacultyMember data={member} key={`${member.lqip} + ${i}leadership`}/>
                  )
                })}
            </FacultyGrid>
            )
          }
          <h2>Instructors</h2>
          {instructorData.length === 0 ? (
            <p style={{ marginBottom: "5rem" }}>
              Coming soon... No instructors to show yet!
            </p>
          )
          : (
            <FacultyGrid>
              {instructorData.map((member, i) => {
                return (
                  <FacultyMember data={member} key={`${member.lqip} + ${i}leadership`} />
                  )
                })}
            </FacultyGrid>
            )
          }
        </SectionWrapper>
      </FacultyWrapper>
      <OurPartners>
        <h1>Our Partners</h1>
        <h6>
          Eight Branches continues to support our alumni and students through
          our partnerships and connections to several groups and associations.
          We are continuously expanding our network to connect our students with
          internships and other opportunities.
        </h6>
        <LogoGrid>
          <Image quality={80} className="partner-logo-img" src={img1} alt="Eight Branches' Clinic and Apothecary logo"/>
          <Image quality={80} className="partner-logo-img" src={img2} alt="Council of Traditional Chinese Medicine & Acupuncture Schools of Ontario logo"/>
          <Image quality={80} className="partner-logo-img" src={img3} alt="Channels of Wellness logo"/>
          <Image quality={80} className="partner-logo-img" src={img4} alt="Hillgreen Oncology Acupuncture & Herbs logo"/>
          <Image quality={80} className="partner-logo-img" src={img5} alt="Federation of Traditional Chinese Medicine Colleges of Canada logo"/>
          <Image quality={80} className="partner-logo-img" src={img6} alt="Canadian College of Acupuncture & Traditional Chinese Medicine logo"/>
          <Image quality={80} className="partner-logo-img" src={img7} alt="Massage Addict logo"/>
        </LogoGrid>
      </OurPartners>
    </>
  )
}

export default OurFaculty

export async function getStaticProps() {
  const contactInfo = await getContactData();
  const facultyLeadershipData = await getFacultyLeadershipData();
  const facultyInstructorData = await getFacultyInstructorData();

  return {
    props: {
      facultyLeadershipData,
      facultyInstructorData,
      contactInfo
    },
    revalidate: 10,
  };
}


const SectionWrapper = styled.div`
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

const FacultyWrapper = styled.div`
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

const FacultyHeader = styled.div`
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
    margin-bottom: 0rem;

    h1 {
      padding-bottom: 1rem;
    }
    h6 {
      width: 100%;
    }
  }
`

const FacultyGrid = styled.div`
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

const OurPartners = styled.section`
  background-color: var(--color-charcoal);
  color: var(--color-beige);
  padding: 7rem 0;
  margin: 0 auto;
  text-align: center;

  h6 {
    padding: 2rem 0;
    margin: 0 auto;
    width: 50%;
  }

  @media (max-width: ${breakpoints.xl}px) {
    h6 {
      width: 75%;
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    padding: 5rem 0;
    h6 {
      width: 90%;
    }
  }
`

const LogoGrid = styled.div`
  width: 67%;
  margin: 0 auto;
  padding-top: 2rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  .partner-logo-img {
    margin: 1rem 2rem;
    object-fit: contain;
  }

  @media (max-width: 1600px) {
    width: 70%;
  }
  @media (max-width: ${breakpoints.xxl}px) {
    width: 75%;
  }
  @media (max-width: ${breakpoints.xl}px) {
    width: 80%;
    .partner-logo-img {
      margin: 0.5rem 1.5rem;
    }
  }
  @media (max-width: ${breakpoints.l}px) {
    width: 85%;

    .partner-logo-img {
      transform: scale(0.8);
    }
  }
  @media (max-width: ${breakpoints.m}px) {
    width: 100%;

    .partner-logo-img {
      margin: 0.5rem 1rem;
      transform: scale(1);
      max-width: 200px;
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    .partner-logo-img {
      max-width: 145px;
    }
  }
  @media (max-width: ${breakpoints.xs}px) {
    .partner-logo-img {
      max-width: 125px;
    }
  }
`