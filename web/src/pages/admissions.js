import React from "react"
import Image from "next/image"
import styled from "styled-components"
// import Seo from "/components/seo"
import breakpoints from "/components/breakpoints"
import StampLogo from "/svg/stamplogo"
import { AcademicAdvisor } from "/components/generalcomponents"
import { FaRegCalendar } from "react-icons/fa"
import { AiOutlineClockCircle } from "react-icons/ai"
import { CheckmarkSVG } from "/svg/misc"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
// import admissions from "../../site/settings/admissions.json"
import { getAdmissionsData } from "lib/sanity/admissionsQuery"
import bannerImg from '../images/Admissions/admissionsbanner.png'
import interiorImg from '../images/Admissions/bannerimage.png'
import { getContactData } from "lib/sanity/contactInfoQuery"
  
const Admissions = ({ admissionsData }) => {
  // const siteTitle = data.site.siteMetadata?.title || `Student Admissions`

  const hideImage = {
    visible: {
      clipPath: "inset(100% 0% 0% 0%)",
    },
    hidden: {
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        delay: 0.15,
        ease: "easeInOut",
        duration: 1,
      },
    },
  }
  const FadeIn = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delayChildren: 0.15,
        staggerChildren: 0.15,
        ease: "easeInOut",
        duration: 1,
      },
    },
    hidden: {
      y: 40,
      opacity: 0,
    },
  }

  const RequirementFadeIn = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.85,
        ease: "easeInOut",
        staggerChildren: 0.35,
      },
    },
  }

  // ---------- INTERSECTION OBSERVER LOGIC ----------
  const [HideImageRef, HideImageInView] = useInView({
    root: null,
    threshold: 0.4,
    triggerOnce: true,
  })


  const [Requirement1Ref, Requirement1InView] = useInView({
    root: null,
    threshold: 0.35,
    triggerOnce: true,
  })
  const [Requirement2Ref, Requirement2InView] = useInView({
    root: null,
    threshold: 0.35,
    triggerOnce: true,
  })
  const [Requirement3Ref, Requirement3InView] = useInView({
    root: null,
    threshold: 0.35,
    triggerOnce: true,
  })

  return (
    <>
      {/* <Seo
        title="Student Admissions"
        description="Book a free call with a career advisor to see which programs at Eight Branches
are right for you."
        keywords={[
          `Eight Branches`,
          `Eight Branches admissions`,
          `8 branches admissions`,
          `learn acupuncture near me`,
          `learn acupuncture toronto`,
          `Acupuncture learn online`,
          `Acupuncture school online`,
          `Acupuncture blog online`,
          `learn TCM online`,
          `learn TCM toronto`,
          `tcm part time studies`,
          `tcm university toronto`,
          `tcm university online`,
          `tcm graduates`,
          `chinese medicine diploma`,
          `learn traditional chinese medicine toronto`,
          `best school for acupuncture`,
        ]}
      /> */}
      <HeaderWrapper ref={HideImageRef}>
        <AdmissionsHeader variants={FadeIn} initial="hidden" animate="visible">
          <motion.h1 variants={FadeIn}>Study at Eight Branches</motion.h1>
          <motion.h6 variants={FadeIn}>
            Interested in studying at Eight Branches? Learn about the admissions
            procedure and ensure that you meet the necessary requirements when
            sending in your application.
            <br />
            <br />
            <BookNowButton
              href="https://eightbranches.classe365.com/form/view/Eight_Branches_Admission_Form"
              target="_blank"
              rel="noreferrer"
            >
              View Application Form
            </BookNowButton>
          </motion.h6>
        </AdmissionsHeader>
        <AdmissionsImage
          variants={hideImage}
          initial="visible"
          animate={HideImageInView ? "hidden" : "visible"}
          exit="hidden"
        >
          <Image
            alt="Image of practitioners checking the tongue health of a student."
            quality={100}
            src={bannerImg}
            className='banner-image'
          />
        </AdmissionsImage>
      </HeaderWrapper>
      <AcademicRequirements>
        <StampLogo fillColor="white" />
        <h1>Academic Requirements</h1>
        <RequirementWrapper>
          <Requirement
            ref={Requirement1Ref}
            variants={RequirementFadeIn}
            initial="hidden"
            animate={Requirement1InView ? "visible" : "hidden"}
            whileHover={{ y: -5 }}
            transition={{ ease: "easeInOut" }}
          >
            <h6>
              Completion of Ontario Secondary School Diploma (OSSD) or
              equivalent;
            </h6>
          </Requirement>
          <Requirement
            ref={Requirement2Ref}
            variants={RequirementFadeIn}
            initial="hidden"
            animate={Requirement2InView ? "visible" : "hidden"}
            whileHover={{ y: -5 }}
            transition={{ ease: "easeInOut" }}
          >
            <h6>
              If applying as a mature student, completion of an Eight Branches
              &quot;Mature Student Test&quot; and/or &quot;Canadian Adult Achievement Test&quot;
              and/or equivalent;
            </h6>
          </Requirement>
          <Requirement
            ref={Requirement3Ref}
            variants={RequirementFadeIn}
            initial="hidden"
            animate={Requirement3InView ? "visible" : "hidden"}
            whileHover={{ y: -5 }}
            transition={{ ease: "easeInOut" }}
          >
            <h6>
              Strong desire to learn and uphold the principles and ideologies of
              Eastern medicine.
            </h6>
          </Requirement>
        </RequirementWrapper>
      </AcademicRequirements>
      <AdmissionsSection>
        <Left>
          <h2>Admission Guideline</h2>
        </Left>
        <Right>
          <Procedure>
            Prospective students are invited to fill out the following{" "}
            <a
              href="https://eightbranches.classe365.com/form/view/Eight_Branches_Admission_Form"
              target="_blank"
              rel="noreferrer"
            >
              <strong>online admissions form</strong>
            </a>{" "}
            in order to send out their application. The form can also be
            obtained by calling the registration office, or in person if a tour
            of the facility is desired. Please ensure you read all the admission
            guidelines prior to completing the form.
          </Procedure>
          <DividingLine />
          <h3>Application Requirements</h3>
          <ul>
            <li>
              <CheckmarkSVG />
              <h6>
                Submission of properly-completed{" "}
                <a
                  href="https://eightbranches.classe365.com/form/view/Eight_Branches_Admission_Form"
                  target="_blank"
                  rel="noreferrer"
                >
                  <strong>application form;</strong>
                </a>{" "}
              </h6>
            </li>
            <li>
              <CheckmarkSVG />
              <h6>
                Transcripts from secondary school or all post-secondary
                institutions attended (this can also be sent directly from the
                institution);
              </h6>
            </li>
            <li>
              <CheckmarkSVG />
              <h6>Non-refundable application fee;</h6>
            </li>
            <li>
              <CheckmarkSVG />
              <p>$100 for domestic students</p>
            </li>
            <li>
              <CheckmarkSVG />
              <p>$200 for international students</p>
            </li>
            <li>
              <CheckmarkSVG />
              <h6>
                Two letters of recommendation attesting to your individual
                learning capacities, skills and attitude;
              </h6>
            </li>
            <li>
              <CheckmarkSVG />
              <h6>
                Personal letter (200-300 words) detailing your abilities,
                purpose and motivation for studying at Eight Branches Academy.
              </h6>
            </li>
            <li>
              <CheckmarkSVG />
              <h6>Resume</h6>
            </li>
          </ul>
          <DividingLine />
          <h3>Application Procedure:</h3>
          <h5>
            Once all documentation and application fees are received, each
            applicant will be contacted to schedule an interview. Successful
            applicants will be notified of their acceptance by mail and
            instructed on how to proceed with enrollment.
            <br /> <br />
            Prospective students for whom English is not their primary language
            may be required to submit a TOEFL (Test of English as a Foreign
            Language) exam in which they received a passing grade, and
            demonstrate satisfactory written/oral comprehension of English.
          </h5>
          {/* <DividingLine />
          <h3>Mailing Instructions:</h3>
          <h5>
            Eight Branches Academy of Eastern Medicine
            <br />
            112 Merton Street, 3rd Floor <br />
            Toronto, ON <br />
            M4S 2Z8
            <br />
            Attention: Admissions
          </h5> */}
        </Right>
      </AdmissionsSection>
      <BannerWrapper>
        <BannerImage>
          <Image
            alt="Image of a hall of practicing tables."
            quality={100}
            src={interiorImg}
            className="banner-image"
          />
        </BannerImage>
      </BannerWrapper>
      <AdmissionsSection>
        <Left>
          <h2>Application Deadlines</h2>
        </Left>
        <Right>
          <h5>
            Applications are due one month prior to the commencement of term.
            Students are encouraged to apply early as space is limited. Late
            applicants will only be considered on a case-by-case basis if space
            is available in the program.
            <br />
            <br />
            The academic year is split into three terms: Fall, Winter, and
            Spring, each term is 12 weeks in duration.
          </h5>
          <DividingLine />

          {admissionsData.admissionsData.map((term, i) => {
            return (
              <span key={i}>
                <Term>
                  <h3>{term.title}</h3>
                  <TermInner>
                    <TermItem>
                      <FaRegCalendar size={21} />
                      <DeadlineText>
                        Start Date: {term.start} <br /> End Date:{" "}
                        {term.end}
                      </DeadlineText>
                    </TermItem>
                    <TermItem>
                      <AiOutlineClockCircle size={24} />
                      <DeadlineText>Applications due: {term.due}</DeadlineText>
                    </TermItem>
                  </TermInner>
                </Term>
                <DividingLine />
              </span>
            )
          })}
        </Right>
      </AdmissionsSection>
      <AcademicAdvisor />
    </>

  )
}

export default Admissions

export async function getStaticProps() {
  const admissionsData = await getAdmissionsData()
  const contactInfo = await getContactData()
  
  return {
    props: {
      admissionsData,
      contactInfo
    },
    revalidate: 10,
  };
}


const HeaderWrapper = styled.section`
  width: 100%;
  padding-top: 15rem;
  z-index: 2;
  position: relative;
  background-color: var(--color-lightestbeige);
  margin: 0 auto;

  @media (max-width: ${breakpoints.m}px) {
    padding-top: 10rem;
  }
`
const AdmissionsHeader = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  padding-bottom: 7.5rem;
  position: relative;
  z-index: 10;

  h1 {
    padding-bottom: 2rem;
  }

  h6 {
    width: 40%;
  }

  @media (max-width: ${breakpoints.xl}px) {
    h6 {
      width: 60%;
    }
  }
  @media (max-width: ${breakpoints.l}px) {
    h6 {
      width: 60%;
    }
  }

  @media (max-width: ${breakpoints.m}px) {
    padding-bottom: 2.5rem;

    h6 {
      width: 90%;
    }
  }

  @media (max-width: ${breakpoints.s}px) {
    padding-bottom: 4rem;
    h1 {
      width: 95%;
      padding-bottom: 1rem;
    }
    h6 {
      width: 95%;
    }
  }
`

const BookNowButton = styled.a`
  display: inline;
  cursor: pointer;
  border-radius: 10px;
  line-height: 26px;
  font-size: 16px;
  border: 1px solid var(--color-darkgreen);
  color: var(--color-darkgreen);
  padding: 0.35rem 1.5rem;
  text-decoration: none;
  font-family: "Matter-regular";

  transition: 0.25s all ease-in-out;
  :hover {
    color: var(--color-white);
    background-color: var(--color-darkgreen);
  }
  @media (max-width: ${breakpoints.s}px) {
    /* align-self: flex-start; */
  }
`

const AdmissionsImage = styled(motion.div)`
  position: relative;
  height: 100%;
  width: 100%;

  .banner-image {
    max-height: 525px;
    width: 100%;
    object-fit: cover;
    transform: translateY(5px);
  }

  @media (max-width: ${breakpoints.l}px) {
    .banner-image {
      max-height: unset;
      aspect-ratio: 16/9;
      height: auto;
    }
  }
`

const AcademicRequirements = styled.section`
  background-color: var(--color-darkgreen);
  margin: 0 auto;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5.5rem 0;
  flex-direction: column;

  h1 {
    text-align: center;
    padding: 2rem;
  }
  @media (max-width: ${breakpoints.l}px) {
    padding: 3.5rem 0;
    h1 {
      padding-top: 0rem;
    }
    svg {
      max-width: 40px;
    }
  }
`

const RequirementWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;

  h6 {
    margin: 0 auto;
    width: 90%;
  }
  @media (max-width: ${breakpoints.xxl}px) {
    width: 95%;
  }

  @media (max-width: ${breakpoints.m}px) {
    /* width: 55%; */
    width: 75%;
    flex-direction: column;
  }
  @media (max-width: ${breakpoints.s}px) {
    width: 95%;
  }
`

const Requirement = styled(motion.div)`
  cursor: default;
  display: flex;
  align-items: center;
  text-align: center;
  border: 1px solid white;
  border-radius: 20px;
  height: 200px;
  width: 35%;
  margin: 2.5rem 1.5rem;
  padding: 1rem;

  @media (max-width: ${breakpoints.xl}px) {
    height: auto;
    width: auto;
    border-radius: 20px;
    margin: 0.75rem 1rem;
    padding: 0.75rem 1rem;
  }
  @media (max-width: ${breakpoints.l}px) {
    margin: 0.5rem 0.75rem;
    padding: 0.5rem;
    border-radius: 15px;
  }
  @media (max-width: ${breakpoints.m}px) {
    border-radius: 10px;
    margin: 0.75rem 1rem;
    padding: 0.75rem 0.5rem;
  }
`

const AdmissionsSection = styled.section`
  background-color: var(--color-lightestbeige);
  display: flex;
  justify-content: space-evenly;
  padding-top: 10rem;
  padding-bottom: 10rem;

  @media (max-width: ${breakpoints.l}px) {
    flex-direction: column;
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
`

const Left = styled.div`
  position: sticky;
  align-self: flex-start;
  color: var(--color-darkgreen);
  top: 10rem;
  left: 5rem;
  width: 30%;

  @media (max-width: ${breakpoints.l}px) {
    position: relative;
    top: auto;
    left: auto;
    width: 90%;
    margin: 0 auto;
  }

  @media (max-width: ${breakpoints.s}px) {
  }
`

const Procedure = styled.h5`
  a {
    font-family: "Matter-regular";
    text-decoration: underline;
    color: var(--color-darkgreen);
    cursor: pointer;
  }
  @media (max-width: ${breakpoints.s}px) {
    font-size: 16px;
  }
`

const DeadlineText = styled.h6`
  @media (max-width: 1560px) {
    font-size: 20px !important;
    padding-left: 0.6rem !important;
  }
  @media (max-width: ${breakpoints.xxl}px) {
    font-size: 18px !important;
    padding-top: 0.2rem;
    padding-left: 0.5rem !important;
    margin-right: 0.5rem;
  }

  @media (max-width: 1310px) {
    font-size: 17px !important;
  }

  @media (max-width: ${breakpoints.xl}px) {
    font-size: 18px !important;
  }
  @media (max-width: ${breakpoints.l}px) {
    padding-top: 0;
    padding-left: 0.75rem !important;
  }

  @media (max-width: ${breakpoints.m}px) {
    padding-top: 0;
  }
`

const DividingLine = styled.div`
  width: 100%;
  border-top: 1px solid #cbcbcb;
  margin-top: 2.5rem;
  padding-bottom: 2.5rem;
`

const Right = styled.div`
  width: 45%;

  a {
    font-family: "Matter-regular";
    text-decoration: underline;
    color: var(--color-darkgreen);
    cursor: pointer;
  }

  h3 {
    color: var(--color-darkgreen);
  }

  h5 {
    margin-top: 1rem;
  }

  ul {
    padding-left: 0;
  }

  li {
    list-style: none;
    padding: 0.5rem 1rem;
    padding-left: 0;
    display: flex;
    justify-content: flex-start;
    align-items: baseline;

    h6,
    p {
      padding-left: 1.5rem;
    }

    svg {
      transform: translateY(0.5rem);
      min-width: 31px;
      min-height: 31px;
    }

    :nth-child(4),
    :nth-child(5) {
      padding-left: 7rem;

      p {
        font-size: 22px;
        font-family: "Matter-regular";
      }
    }
  }
  @media (max-width: ${breakpoints.xl}px) {
    width: 60%;
  }
  @media (max-width: ${breakpoints.l}px) {
    position: relative;
    width: 90%;
    margin: 0 auto;

    li {
      padding: 0.25rem 0rem;

      h6,
      p {
        padding-left: 1rem;
      }

      svg {
        transform: translateY(0.5rem);
        max-width: 18px;
        max-height: 18px;
      }

      :nth-child(4),
      :nth-child(5) {
        padding-left: 2.5rem;
        padding-top: 0rem;
        padding-bottom: 0rem;

        p {
          padding-left: 1.5rem;
          font-size: 18px;
          line-height: 22px;
        }
      }
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    h5,
    h6 {
      font-size: 18px;
    }
  }
`

const BannerWrapper = styled.div`
  height: 100%;
  position: relative;
  background-color: var(--color-lightestbeige);
`

const BannerImage = styled.div`
  width: 69%;
  position: relative;
  margin: 0 auto;
  .banner-image {
    border-radius: 20px;
    aspect-ratio: 16/9;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  @media (max-width: ${breakpoints.xxl}px) {
    width: 80%;
  }
  @media (max-width: ${breakpoints.l}px) {
    width: 90%;
  }
  @media (max-width: ${breakpoints.m}px) {
    .banner-image {
      border-radius: 10px;
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    width: 95%;
  }
`

const Term = styled.div``

const TermInner = styled.div`
  padding-top: 1rem;
  display: flex;
  justify-content: flex-start;
  min-width: 50%;

  @media (max-width: ${breakpoints.l}px) {
    flex-direction: column;
  }
`

const TermItem = styled.div`
  display: flex;
  justify-content: flex-start;
  :first-child {
    min-width: 50%;
    margin-right: 1rem;
  }
  h6 {
    padding-left: 1rem;
  }
  svg {
    transform: translateY(0.5rem);
    min-width: 24px;
    aspect-ratio: 1/1;
  }

  @media (max-width: ${breakpoints.l}px) {
    padding-bottom: 1rem;
    justify-content: flex-start;
    min-width: 100%;
    max-width: 100%;

    svg {
      align-self: flex-start;
      min-width: 22px;
      min-height: 22px;
      width: 22px;
      height: 22px;
      transform: translateY(0.1rem);
    }
  }
  @media (max-width: ${breakpoints.m}px) {
    svg {
      margin-top: 0.15rem;
      width: 22px;
      height: 22px;
    }
  }
`
