import styled from "styled-components"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import breakpoints from "/components/breakpoints"
import StampLogo from "/svg/stamplogo"
import { CheckmarkSVG } from "/svg/misc"
import { LandingPageWebsiteRedirect } from "/components/generalcomponents"
import Form from "/components/EmailForm/form"
import Image from "next/image"
import landingImage from '../../images/Programs/diploma-acupuncture.png'
import { getContactData } from "lib/sanity/contactInfoQuery"
import Seo from "components/seo"

const Acupuncture = () => {
  const hideImage = {
    visible: {
      y: 0,
    },
    hidden: {
      y: "-100%",
      transition: {
        delay: 0.15,
        ease: "easeInOut",
        duration: 1,
      },
    },
  }
  const FadeIn = {
    hidden: {
      y: 40,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.45,
        duration: 1,
      },
    },
  }
  const StudentBenefitFadeIn = {
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
    threshold: 0.7,
    triggerOnce: true,
  })

  const [StudentBenefit1Ref, StudentBenefit1InView] = useInView({
    root: null,
    threshold: 0.35,
    triggerOnce: true,
  })
  const [StudentBenefit2Ref, StudentBenefit2InView] = useInView({
    root: null,
    threshold: 0.35,
    triggerOnce: true,
  })
  const [StudentBenefit3Ref, StudentBenefit3InView] = useInView({
    root: null,
    threshold: 0.35,
    triggerOnce: true,
  })

  // ---------- BULLET POINT DATA FOR MAPPING ----------
  const unorderedListData = [
    {
      text: "We offer 3 main Diploma programs in Acupuncture & Moxibustion, Traditional Chinese Medicine and Advanced Traditional Chinese Medicine, as well as an additional Diploma in Herbology.",
    },
    {
      text: "Our programs meet provincial, national and international education standards.",
    },
    {
      text: "Full-time students enrolled in the Acupuncture & Moxibustion Diploma Program, TCMP Diploma Program and Advanced TCMP Diploma Program may be eligible, if qualified, for loans, grants, or awards granted under the Ontario Student Assistance Program (OSAP). ",
    },
    {
      text: "Provides a great balance of academic, practical and clinical study.",
    },
    {
      text: "A flexible schedule that requires approximately 3 days of classroom studies to support a balance of education and home life. ",
    },
    {
      text: "Graduates consistently outperform their peers on the Pan-Canadian National Examinations, which is necessary for Acupuncturists to work in Ontario, Newfoundland and Labrador, Quebec, Alberta and British Columbia. ",
    },
    {
      text: "Offers a comprehensive education that teaches all 8 branches of Chinese medicine and places a strong emphasis on personal development and self-care. ",
    },
  ]
  return (
    <>
      <Seo
        title="Acupuncture Diploma Program"
        description="Our 2 year and 3 year acupuncture diploma program trains students to
become registered acupuncturists."
      />
      <LandingSection>
        <LeftSection ref={HideImageRef}>
          <HideImage
            animate={HideImageInView ? "hidden" : "visible"}
            variants={hideImage}
            initial="visible"
            exit="hidden"
          />
          <Image
            src={landingImage}
            alt="Image of a student weighing traditional herbal medicine."
            quality={90}
            width={950}
            height={970}
            className="landing-image"
          />
        </LeftSection>
        <RightSection>
          <LandingTextWrapper
            variants={FadeIn}
            initial="hidden"
            animate="visible"
          >
            <StampLogo fillColor="black" />
            <motion.h1 variants={FadeIn}>Acupuncture & Moxibustion</motion.h1>
            <motion.p variants={FadeIn}>
              Program starting: <br /> January 2023
            </motion.p>
            <br />
            <motion.h4 variants={FadeIn}>
              There's still time - apply today!
            </motion.h4>
          </LandingTextWrapper>
        </RightSection>
      </LandingSection>
      <FormSection>
        <FormFlex>
          <EmailFormWrapper>
            <Form landingPageType="Acupuncture & Moxibustion" />
          </EmailFormWrapper>
          <FormSectionText>
            <h4>
              Eight Branches Academy of Eastern Medicine is Toronto’s top
              Acupuncture School, offering students a comprehensive education
              with a firm foundation in Traditional Chinese Medicine. We are
              also the sister school of the Canadian College of Acupuncture and
              Traditional Chinese Medicine, CCATCM.{" "}
            </h4>
            <br />
            <br />
            <h6>
              Eight Branches offers Diploma programs that qualify graduates to
              write the Pan-Canadian regulatory examinations and to become a
              Registered Acupuncturist (R.Ac) or a Registered Traditional
              Chinese Medicine Practitioner (R.TCMP).
            </h6>
            <br />
            <br />
            <h3>About the Program:</h3>
            <UnorderedList>
              {unorderedListData.map((bullet, i) => {
                return (
                  <li key={i}>
                    <CheckmarkSVG />
                    <h6>{bullet.text}</h6>
                  </li>
                )
              })}
            </UnorderedList>
          </FormSectionText>
        </FormFlex>
      </FormSection>
      <StudentAcademicBenefits>
        <StampLogo fillColor="white" />
        <h1>Student Benefits</h1>
        <StudentBenefitWrapper>
          <StudentBenefit
            ref={StudentBenefit1Ref}
            variants={StudentBenefitFadeIn}
            initial="hidden"
            animate={StudentBenefit1InView ? "visible" : "hidden"}
            whileHover={{ y: -5 }}
            transition={{ ease: "easeInOut" }}
          >
            <h6>
              Spend your time building a repertoire of skills that will prepare
              you for the real world in TCM.
            </h6>
          </StudentBenefit>
          <StudentBenefit
            ref={StudentBenefit2Ref}
            variants={StudentBenefitFadeIn}
            initial="hidden"
            animate={StudentBenefit2InView ? "visible" : "hidden"}
            whileHover={{ y: -5 }}
            transition={{ ease: "easeInOut" }}
          >
            <h6>
              Our students participate in a number of practicum hours in our
              teaching clinic.
            </h6>
          </StudentBenefit>
          <StudentBenefit
            ref={StudentBenefit3Ref}
            variants={StudentBenefitFadeIn}
            initial="hidden"
            animate={StudentBenefit3InView ? "visible" : "hidden"}
            whileHover={{ y: -5 }}
            transition={{ ease: "easeInOut" }}
          >
            <h6>
              Take advantage of our numerous connections to real, practicing
              Acupuncture and TCM specialists, doctors, and PhDs.
            </h6>
          </StudentBenefit>
        </StudentBenefitWrapper>
      </StudentAcademicBenefits>
      <LandingPageWebsiteRedirect />
    </>
  )
}

export default Acupuncture

export async function getStaticProps() {
  const contactInfo = await getContactData();

  return {
    props: {
      contactInfo
    },
    revalidate: 10,
  };
}

const LandingSection = styled.span`
  height: 100vh;
  display: flex;
  position: relative;
  align-items: center;
  background-color: var(--color-beige);
  h1,
  p,
  h4 {
    color: var(--color-charcoal);
  }
  svg {
    color: var(--color-charcoal);
  }

  @media (max-width: ${breakpoints.l}px) {
    background-color: var(--color-lightestbeige);
    flex-direction: column-reverse;
    height: 125vh;
  }
  @media (max-width: ${breakpoints.m}px) {
    height: auto;
  }
`

const LeftSection = styled.div`
  position: relative;
  width: 50%;
  height: 100%;

  /* ! */
  overflow: hidden;
  z-index: 2;
  height: 100%;

  .landing-image {
    object-fit: cover;
    min-height: 100%;
    height: 100%;
    width: 100%;
  }

  @media (max-width: ${breakpoints.l}px) {
    width: 100%;
    height: 40%;
  }
  @media (max-width: ${breakpoints.m}px) {
    height: 40vh;
  }
  @media (max-width: ${breakpoints.s}px) {
    height: 250px;
  }
`

const RightSection = styled.div`
  height: 100%;
  width: 50vw;
  position: relative;
  z-index: 10;
  background-color: var(--color-sandbeige);

  @media (max-width: ${breakpoints.l}px) {
    background-color: var(--color-lightestbeige);
    width: 100vw;
    margin-top: 10vh;
    height: 60%;
    svg {
      width: 45px;
    }
  }

  @media (max-width: ${breakpoints.m}px) {
    height: auto;
    svg {
      width: 40px;
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    margin-top: 5vh;
    padding-top: 10vh;
  }
`

const LandingTextWrapper = styled(motion.div)`
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1,
  h6,
  svg {
    color: var(--color-black);
  }
  p {
    font-family: "Matter-Light";
    color: black;
    width: 60%;
    margin-bottom: 3rem;
  }
  h4 {
    margin-bottom: 2rem;
  }

  h1 {
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 60%;
  }

  @media (max-width: 1600px) {
    h1 {
      font-size: 60px;
      line-height: 130%;
    }
  }
  @media (max-width: ${breakpoints.xxl}px) {
    h1 {
      font-size: 50px;
      line-height: 58px;
    }
  }
  @media (max-width: ${breakpoints.xl}px) {
    h1 {
      width: 55%;
    }
  }
  @media (max-width: ${breakpoints.l}px) {
    h1 {
      font-size: 45px;
      line-height: 50px;
      margin-top: 0rem;
    }
  }
  @media (max-width: ${breakpoints.m}px) {
    h1 {
      font-size: 45px;
      line-height: 50px;
      margin-bottom: 1rem;
      width: 70%;
    }
    p {
      margin-bottom: 2rem;
    }
    h4 {
      margin-bottom: 3rem;
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    h1 {
      font-size: 36px;
      line-height: 46px;
      width: 90%;
    }
  }
`

const HideImage = styled(motion.div)`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: var(--color-sandbeige);

  @media (max-width: ${breakpoints.l}px) {
    background-color: var(--color-lightestbeige);
  }
`

const FormSection = styled.section`
  position: relative;
  background-color: var(--color-lightestbeige);
`
const FormFlex = styled.div`
  position: relative;
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: ${breakpoints.l}px) {
    flex-direction: column;
  }
`

const EmailFormWrapper = styled.div`
  width: 50%;
  position: sticky;
  display: block;
  align-self: flex-start;
  justify-self: flex-start;
  top: 7rem;
  margin: 5rem 0;
  margin-left: 0;
  @media (max-width: ${breakpoints.l}px) {
    position: relative;
    top: 0;
    width: 100%;
  }
  @media (max-width: ${breakpoints.m}px) {
    margin: 2.5rem 0;
  }
  @media (max-width: ${breakpoints.s}px) {
    margin: 1.5rem 0;
  }
`

const FormSectionText = styled.div`
  width: 48%;
  padding: 5rem 0;
  h3 {
    color: var(--color-darkgreen);
  }
  h4 {
    font-family: "Reckless-Book";
    line-height: 150%;
    font-size: 28px;
    line-height: 150%;
    margin-top: 3rem;
    margin-bottom: 2.5rem;
  }
  h6 {
    font-family: "Matter-Regular";
    margin-bottom: 2.5rem;
  }

  @media (max-width: ${breakpoints.xl}px) {
    h4 {
      margin-bottom: 2.5rem;
    }
  }
  @media (max-width: ${breakpoints.l}px) {
    width: 100%;
    margin: 0 auto;
    padding-top: 0;
  }

  @media (max-width: ${breakpoints.s}px) {
    padding: 0;
    padding-bottom: 5rem;
    h4 {
      font-size: 22px;
      margin-bottom: 0.5rem;
      /* font-family: "Matter-regular"; */
    }
    h6 {
      margin-bottom: 0.5rem;
    }
  }
`

const UnorderedList = styled.ul`
  padding-left: 0;
  width: 100%;
  li {
    list-style: none;
    padding: 0.5rem 1rem;
    padding-left: 0;
    display: flex;
    justify-content: flex-start;
    align-items: baseline;

    h6,
    p {
      margin-bottom: 0;
      padding-left: 1.5rem;
      font-family: "Matter-regular";
    }

    svg {
      transform: translateY(0.5rem);
      min-width: 31px;
      min-height: 31px;
    }
  }
`

const StudentAcademicBenefits = styled.section`
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

const StudentBenefitWrapper = styled.div`
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
    width: 75%;
    flex-direction: column;
  }
  @media (max-width: ${breakpoints.s}px) {
    width: 95%;
  }
`

const StudentBenefit = styled(motion.div)`
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
