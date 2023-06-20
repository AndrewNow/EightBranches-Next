import React, { useState } from "react"
import styled from "styled-components"
// import Seo from "../components/seo"
import Image from "next/image"
import breakpoints from "/components/breakpoints"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GoogleMaps } from "/components/generalcomponents"
import { getContactData } from "lib/sanity/contactInfoQuery"
import practitioner2 from '../images/TeachingClinic/practitioner2.png'
import bookanappointment from "../images/TeachingClinic/bookanappointment.png"
import { getTeachingClinicData } from "lib/sanity/teachingClinicQuery"
import TreatmentsOffered from "components/treatmentsOffered"

const TeachingClinic = ({ teachingClinicData, contactInfo }) => {
  // const siteTitle = data.site.siteMetadata?.title || `Book a treatment with our students`
  const [open, setOpen] = useState(false)

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
  const FadeInDelay = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        ease: "easeInOut",
        duration: 1,
        delay: 0.5,
      },
    },
    hidden: {
      y: 40,
      opacity: 0,
    },
  }
  const Covid = {
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        ease: "easeOut",
      },
    },
  }

  const hideTCImage = {
    visible: {
      y: 0,
    },
    hidden: {
      y: "-100%",
      transition: {
        delay: 0.2,
        ease: "easeInOut",
        duration: 1,
      },
    },
  }
  const hideApptImage = {
    visible: {
      y: 0,
    },
    hidden: {
      y: "-100%",
      transition: {
        delay: 0.2,
        ease: "easeInOut",
        duration: 1,
      },
    },
  }

  const ParentAnim = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        // staggerChildren: 0.1,
      },
    },
  }
  const Child = {
    hidden: {
      opacity: 0,
      // y: 15
    },
    visible: {
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
      opacity: 1,
      // y: 0
    },
  }


  // ---------- INTERSECTION OBSERVER LOGIC ----------

  const [TeachingClinicRef, TeachingClinicInView] = useInView({
    root: null,
    threshold: 0.4,
    triggerOnce: true,
  })
  const [AppointmentRef, AppointmentInView] = useInView({
    root: null,
    threshold: 0.5,
    triggerOnce: true,
  })
  const [ListRef, ListInView] = useInView({
    root: null,
    threshold: 0.75,
    triggerOnce: true,
  })

  return (
    <>
      {/* <Seo
        title="Book a treatment with our students"
        description="Affordable Acupuncture starting at $10. Open to all members of the public."
        keywords={[
          `Eight Branches`,
          `Eight Branches Toronto`,
          `local TCM`,
          `best chinese doctor in toronto`,
          `inexpensive acupuncture treatment`,
          `safe acupuncture toronto`,
          `best acupuncture toronto`,
          `cheap student acupuncture`,
          `expert chinese medicine doctor`,
          `the best chinese medicine toronto`,
        ]}
      /> */}
      <HeaderWrapper>
        <TeachingClinicHeader
          variants={FadeIn}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={FadeIn}>The Teaching Clinic</motion.h1>
          <motion.h6 variants={FadeIn}>
            Explore affordable TCM treatments we offer to the public from our
            student-run clinic.
          </motion.h6>
          <motion.div variants={FadeIn}>
            <BookNowButton
              href="https://eightbranches.janeapp.com/#"
              target="_blank"
              rel="noreferrer"
            >
              Book Treatment
            </BookNowButton>
          </motion.div>
        </TeachingClinicHeader>
      </HeaderWrapper>

      <COVIDBanner onClick={() => setOpen(!open)}>
        <h6>Read COVID-19 Update</h6>
        <AnimatePresence exitBeforeEnter>
          {open && (
            <COVIDNews
              variants={Covid}
              initial="closed"
              animate={open ? "open" : "closed"}
              exit="closed"
            >
              <motion.p variants={Covid} exit="closed">
                Eight Branches continually supports the community by offering
                acupuncture, herbs, and bodywork/shiatsu treatments at an
                affordable price. With the recent changes in COVID-19
                statistics, our Eight Branches Teaching Clinic will be reopening
                on February 1st, 2021, and will be operating in a “community
                acupuncture” style.
                <br />
                <br />
                Extensive clinic safety and disinfection protocols are in place
                to ensure our site remains safe for all patients, students, and
                staff. 24-hours prior to your appointment, you will receive a
                COVID pre-screening form that must be filled out. We strongly
                encourage patients to wear loose clothing to their appointments.
                When you arrive at the clinic, we will check your temperature
                and do an in-person screening.
                <br />
                <br />
                We require all students to wear a face mask and shield and all
                patients attending clinic must wear a face mask. Waiting areas
                will be removed so we kindly ask that patients wait in their
                vehicle until their appointment time. These practices have been
                implemented in order to keep our patients, students, and staff
                members safe, as well as maintain the highest standards of
                cleanliness and ensure social distancing is practiced.
                <br />
                <br />
                Patients can now conveniently schedule their Teaching Clinic
                appointments online.{" "}
              </motion.p>
            </COVIDNews>
          )}
        </AnimatePresence>
      </COVIDBanner>
      <HoursSection ref={TeachingClinicRef}>
        <ImageWrapper>
          <HideImage
            style={{ backgroundColor: "var(--color-beige)" }}
            variants={hideTCImage}
            initial="visible"
            animate={TeachingClinicInView ? "hidden" : "visible"}
            exit="hidden"
          />
          <Image
            src={practitioner2}
            alt="Image of a practitioners working on a cupping patient, who is lying on a massage table."
            quality={100}
            className="practitioner-image"
            width={875}
          />
        </ImageWrapper>
        <TextWrapper>
          <motion.div
            variants={ParentAnim}
            initial="hidden"
            animate={TeachingClinicInView ? "visible" : "hidden"}
          >
            <motion.h6 variants={FadeIn}>About The Clinic</motion.h6>
            <motion.h2 variants={FadeIn}>
              Supervised by our most talented instructors, the clinic is a great
              way for our students to gain real-world expertise and knowledge in
              patient care.
            </motion.h2>
          </motion.div>
          <motion.h6
            variants={FadeInDelay}
            initial="hidden"
            animate={TeachingClinicInView ? "visible" : "hidden"}
          >
            Clinic Hours
          </motion.h6>
          <Hours
            variants={ParentAnim}
            initial="hidden"
            animate={TeachingClinicInView ? "visible" : "hidden"}
          >
            <motion.h6 variants={FadeInDelay}>
              Monday
              <br />
              Tuesday
              <br />
              Wednesday
              <br />
              Thursday
              <br />
              Friday
              <br />
              Saturday
              <br />
              Sunday
              <br />
            </motion.h6>
            <motion.h6 variants={FadeInDelay}>
              {teachingClinicData.mon} <br />
              {teachingClinicData.tues} <br />
              {teachingClinicData.wed} <br />
              {teachingClinicData.thurs} <br />
              {teachingClinicData.fri} <br />
              {teachingClinicData.sat} <br />
              {teachingClinicData.sun} <br />
            </motion.h6>
          </Hours>
        </TextWrapper>
      </HoursSection>
      <TreatmentsOffered />
      <CommonConditions>
        <Inner>
          <motion.h2
            variants={Child}
            initial="hidden"
            animate={ListInView ? "visible" : "hidden"}
          >
            Common Conditions/
            <br />
            Illnesses We Treat:
          </motion.h2>
          <List ref={ListRef}>
            <motion.div
              variants={ParentAnim}
              initial="hidden"
              animate={ListInView ? "visible" : "hidden"}
            >
              <motion.h6 variants={Child}>Addiction</motion.h6>
              <motion.h6 variants={Child}>Allergies</motion.h6>
              <motion.h6 variants={Child}>Anxiety</motion.h6>
              <motion.h6 variants={Child}>Arthritis</motion.h6>
              <motion.h6 variants={Child}>Cold & Flu</motion.h6>
              <motion.h6 variants={Child}>Cough</motion.h6>
              <motion.h6 variants={Child}>Constipation</motion.h6>
            </motion.div>
            <motion.div
              variants={ParentAnim}
              initial="hidden"
              animate={ListInView ? "visible" : "hidden"}
            >
              <motion.h6 variants={Child}>Depression</motion.h6>
              <motion.h6 variants={Child}>Diarrhea</motion.h6>
              <motion.h6 variants={Child}>Facial paralysis</motion.h6>
              <motion.h6 variants={Child}>Fatigue</motion.h6>
              <motion.h6 variants={Child}>Fibromyalgia</motion.h6>
              <motion.h6 variants={Child}>Gastritis</motion.h6>
              <motion.h6 variants={Child}>Headaches</motion.h6>
            </motion.div>
            <motion.div
              variants={ParentAnim}
              initial="hidden"
              animate={ListInView ? "visible" : "hidden"}
            >
              <motion.h6 variants={Child}>Indigestion</motion.h6>
              <motion.h6 variants={Child}>Infertility</motion.h6>
              <motion.h6 variants={Child}>Immune disorders</motion.h6>
              <motion.h6 variants={Child}>​Insomnia</motion.h6>
              <motion.h6 variants={Child}>Menstrual problems</motion.h6>
              <motion.h6 variants={Child}>Menopause</motion.h6>
              <motion.h6 variants={Child}>Nausea</motion.h6>
            </motion.div>
            <motion.div
              variants={ParentAnim}
              initial="hidden"
              animate={ListInView ? "visible" : "hidden"}
            >
              <motion.h6 variants={Child}>PMS</motion.h6>
              <motion.h6 variants={Child}>Sports Injuries</motion.h6>
              <motion.h6 variants={Child}>Stress</motion.h6>
              <motion.h6 variants={Child}>Skin Conditions</motion.h6>
              <motion.h6 variants={Child}>Sciatica</motion.h6>
              <motion.h6 variants={Child}>Urination disorders</motion.h6>
            </motion.div>
          </List>
        </Inner>
      </CommonConditions>
      <BookAnAppointment ref={AppointmentRef}>
        <BookAnAppointmentInner>
          <BookAnAppointmentImage>
            <HideImage
              style={{ backgroundColor: "var(--color-sandbeige)" }}
              variants={hideApptImage}
              initial="visible"
              animate={AppointmentInView ? "hidden" : "visible"}
              exit="hidden"
            />
            <Image
              src={bookanappointment}
              alt="Image of an empty massage table with windows in the background, lush green trees casting a calming atmosphere."
              className="appointment-image"
              width={950}
              height={1045}
              quality={95}
              loading="eager"
            />
          </BookAnAppointmentImage>
          <InnerText>
            <h1>Book an Appointment</h1>
            <h6>
              Interested in scheduling a treatment session? <br />
              Click the link below to book an appointment.
              {/* Explore low-cost treatments performed by our students with careful
              supervision from certified professionals. */}
            </h6>
            <BookNowButton
              href="https://eightbranches.janeapp.com/#"
              target="_blank"
              rel="noreferrer"
            >
              Book Treatment
            </BookNowButton>
          </InnerText>
        </BookAnAppointmentInner>
      </BookAnAppointment>
      <GoogleMaps contactInfo={contactInfo} />
    </>
  )
}
export default TeachingClinic

export async function getStaticProps() {
  const contactInfo = await getContactData();
  const teachingClinicData = await getTeachingClinicData()
  return {
    props: {
      contactInfo,
      teachingClinicData
    },
    revalidate: 10,
  };
}


const HeaderWrapper = styled.section`
  width: 100%;
  padding-top: 15rem;
  z-index: 2;
  position: relative;
  background-color: var(--color-beige);
  margin: 0 auto;

  @media (max-width: ${breakpoints.m}px) {
    padding-top: 10rem;
  }
`
const TeachingClinicHeader = styled(motion.div)`
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
    width: 30%;
    padding-bottom: 2rem;
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
      padding-bottom: 1rem;
    }
    h6 {
      width: 94%;
      padding-bottom: 1.5rem;
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
`

const COVIDBanner = styled(motion.div)`
  cursor: pointer;
  padding: 1.5rem;
  width: 100%;
  background-color: var(--color-charcoal);
  color: var(--color-beige);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  :hover {
    h6 {
      text-decoration: underline;
    }
  }
  @media (max-width: ${breakpoints.l}px) {
    padding: 1rem;
  }
  @media (max-width: ${breakpoints.m}px) {
    padding: 1rem;
  }
`

const COVIDNews = styled(motion.div)`
  width: 60%;

  p {
    letter-spacing: 0.01rem;
    line-height: 140%;
    padding: 2.5rem 0;
    font-family: "matter-light";
  }

  @media (max-width: ${breakpoints.m}px) {
    width: 90%;
  }
`

const HoursSection = styled.section`
  background-color: var(--color-beige);
  display: flex;
  position: relative;
  height: 105vh;

  @media (max-width: ${breakpoints.l}px) {
    flex-direction: column;
    height: 100vh;
  }
  @media (max-width: ${breakpoints.m}px) {
    height: 120vh;
  }
`

const ImageWrapper = styled(motion.div)`
  flex-basis: 50%;
  max-width: 50%;
  min-height: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  .practitioner-image {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }


  @media (max-width: ${breakpoints.l}px) {
    min-height: auto;
    max-width: 100%;
    width: 100%;
  }

  @media (max-width: ${breakpoints.m}px) {
    .practitioner-image {
      aspect-ratio: 390/330;
      height: auto;
    }
  }
`

const TextWrapper = styled.div`
  flex-basis: 50%;
  /* align-self: center; */
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  padding: 0 10rem;

  h6 {
    color: var(--color-darkgreen);
    padding-bottom: 1rem;
  }

  h2 {
    font-size: 2.34vw;
    line-height: 130%;
    padding-bottom: 5rem;
  }

  @media (max-width: 1700px) {
    padding: 0 7rem;
  }
  @media (max-width: ${breakpoints.xxl}px) {
    padding: 0 4rem;
    h2 {
      font-size: 2.75vw;
    }
  }
  @media (max-width: ${breakpoints.xl}px) {
    h2 {
      font-size: 3vw;
      padding-bottom: 2.5rem;
    }
  }

  @media (max-width: ${breakpoints.l}px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding: 0 4rem;
    h2 {
      font-size: 3.75vw;
    }
  }

  @media (max-width: ${breakpoints.m}px) {
    margin: 0 auto;
    flex-basis: 100%;
    width: 90%;
    padding: 2rem 0rem;

    h6 {
      padding-bottom: 0.5rem;
    }

    h2 {
      font-size: 4.5vw;
      padding-bottom: 2.5rem;
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    h2 {
      font-size: 23px;
      line-height: 140%;
    }
  }
`

const Hours = styled(motion.div)`
  width: 75%;
  display: flex;
  justify-content: space-between;

  h6 {
    padding-right: 1.5rem;
    white-space: nowrap;
    color: black;
  }

  @media (max-width: ${breakpoints.xl}px) {
    /* width: 50%; */
    width: 80%;
  }
  @media (max-width: ${breakpoints.l}px) {
    width: 50%;
  }

  @media (max-width: ${breakpoints.m}px) {
    width: 70%;
  }
  @media (max-width: ${breakpoints.s}px) {
    width: 95%;
  }
`



const CommonConditions = styled.section`
  background-color: var(--color-lightestbeige);
  width: 100%;
  padding: 3rem 0;
  @media (max-width: ${breakpoints.m}px) {
    text-align: left;
  }
  @media (max-width: ${breakpoints.s}px) {
    padding: 2rem 0;
  }
`

const Inner = styled.div`
  width: 90%;
  margin: 0 auto;
  border-top: 2px solid var(--color-darkgreen);
  border-bottom: 2px solid var(--color-darkgreen);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h2 {
    padding: 5rem;
    color: var(--color-darkgreen);
    margin: 0 auto;
    text-align: center;
  }

  @media (max-width: ${breakpoints.m}px) {
    border-top: 1px solid var(--color-darkgreen);
    border-bottom: 1px solid var(--color-darkgreen);

    h2 {
      padding: 1rem;
      padding-left: 0rem;
      padding-bottom: 1.5rem;
      margin-left: 0rem;
      text-align: left;
    }
  }
`

const List = styled(motion.div)`
  display: flex;
  width: 70%;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 5rem;

  @media (max-width: ${breakpoints.xl}px) {
    width: 85%;
  }

  @media (max-width: ${breakpoints.m}px) {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: start;
    padding-bottom: 2.5rem;
  }
`

const BookAnAppointment = styled.section`
  background-color: var(--color-sandbeige);
  position: relative;
  z-index: 2;
  overflow: hidden;
  padding: 4rem 0;

  @media (max-width: ${breakpoints.l}px) {
    padding: 0;
  }
`

const BookAnAppointmentInner = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 90%;
  height: auto;
  position: relative;

  @media (max-width: ${breakpoints.l}px) {
    flex-direction: column;
    width: 100%;
  }
`

const BookAnAppointmentImage = styled.div`
  width: 60%;
  position: relative;

  .appointment-image {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: ${breakpoints.l}px) {
    width: 100%;
  }
`

const InnerText = styled.div`
  position: relative;
  z-index: 2;
  width: 45%;
  margin-left: 4rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  h1 {
    padding-bottom: 2rem;
    line-height: 100%;
  }
  h6 {
    width: 90%;
    margin-bottom: 2rem;
  }

  @media (max-width: ${breakpoints.xxl}px) {
    br {
      display: none;
    }
  }
  @media (max-width: ${breakpoints.l}px) {
    margin: 4rem auto;
    width: 70%;
    text-align: center;
    align-items: center;
    h1 {
      padding-bottom: 1rem;
    }
  }

  @media (max-width: ${breakpoints.m}px) {
    width: 90%;
    margin: 1rem auto;
    padding: 2rem 0;
    border-top: 1px solid var(--color-white);
    border-bottom: 1px solid var(--color-white);
    /* text-align: center; */
    /* align-items: center; */
    h6 {
      width: 100%;
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    /* text-align: left; */
    h1 {
      padding-bottom: 0.75rem;
    }
    h6 {
      width: 85%;
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
