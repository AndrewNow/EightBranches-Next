import React from "react";
import Link from "next/link";
// // import { StaticImage } from "gatsby-plugin-image";
// // import Seo from "../components/seo";
// // import Seo from "components/seo";
import Image from "next/image";
import styled from "styled-components";
import StampLogo from "svg/stamplogo";
import breakpoints from "components/breakpoints";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Arrow, LeftLogoPattern } from "svg/misc";
import { AcademicAdvisor } from "components/generalcomponents";
import YouTubeReel from "components/Homepage/YouTubeReel";
import landingImage from "../images/HomePage/home.png";
import aboutUs from "../images/HomePage/aboutus.png";
import acupunctureImage from "../images/HomePage/acupuncture.png";
import tcmdiplomaImage from "../images/HomePage/tcmpdiploma.png";
import advtcmpImage from "../images/HomePage/advtcmp.png";
import herbologyImage from "../images/HomePage/herbologydiploma.png";
import moment from "moment-timezone";
import EducationalExcellence from "components/Embla/educationalExcellence";
import { getEventsData } from "lib/sanity/eventsQuery";
import { getContactData } from "lib/sanity/contactInfoQuery";

export default function HomePage({eventData}) {
  console.log(eventData)  
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
  };
  const hideDiplomaImage = {
    visible: {
      clipPath: "inset(100% 0% 0% 0%)",
    },
    hidden: {
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        // delay: 0.2,
        ease: "easeInOut",
        duration: 1,
      },
    },
  };
  const fadeIn = {
    hidden: {
      y: 40,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.65,
        duration: 1,
      },
    },
  };
  const fadeInDiplomaText = {
    hidden: {
      y: 25,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
        staggerChildren: 0.5,
      },
    },
  };

  // ---------- INTERSECTION OBSERVER LOGIC ----------
  const [HideImageRef, HideImageInView] = useInView({
    root: null,
    threshold: 0.5,
    triggerOnce: true,
  });
  const [DiplomaRef0, DiplomaInView0] = useInView({
    root: null,
    threshold: 0.5,
    triggerOnce: true,
  });
  const [DiplomaRef1, DiplomaInView1] = useInView({
    root: null,
    threshold: 0.5,
    triggerOnce: true,
  });
  const [DiplomaRef2, DiplomaInView2] = useInView({
    root: null,
    threshold: 0.5,
    triggerOnce: true,
  });
  const [DiplomaRef3, DiplomaInView3] = useInView({
    root: null,
    threshold: 0.5,
    triggerOnce: true,
  });

  const DiplomaData = [
    {
      title: "Acupuncture & Moxibustion",
      path: "/programs/diploma-programs/acupuncture-and-moxibustion",
      ref: DiplomaRef0,
      inView: DiplomaInView0,
      image: (
        <Image
          src={acupunctureImage}
          alt="Image of a practitioner lighting a fire in order to perform cupping on a patient."
          quality={100}
          className="diplomaImage"
          width={810}
          height={500}
          // transformOptions={{ cropFocus: "bottom" }}
          // imgStyle={{ objectFit: "cover" }}
          // style={{ minHeight: "100%" }}
        />
      ),
    },
    {
      title: "Traditional Chinese Medicine Practitioner ",
      path: "/programs/diploma-programs/TCMP",
      ref: DiplomaRef1,
      inView: DiplomaInView1,
      image: (
        <Image
          src={tcmdiplomaImage}
          alt="Image of a practitioner lighting a fire in order to perform cupping on a patient."
          quality={100}
          className="diplomaImage"
          width={810}
          height={500}
        />
      ),
    },
    {
      title: "Post-Graduate Advanced TCMP",
      path: "/programs/diploma-programs/advanced-TCMP",
      ref: DiplomaRef2,
      inView: DiplomaInView2,
      image: (
        <Image
          src={advtcmpImage}
          alt="Image of a practitioner lighting a fire in order to perform cupping on a patient."
          quality={100}
          className="diplomaImage"
          width={810}
          height={500}
          // transformOptions={{ cropFocus: "bottom" }}
          // imgStyle={{ objectFit: "cover" }}
          // style={{ minHeight: "100%" }}
        />
      ),
    },
    {
      title: "Herbology",
      path: "/programs/diploma-programs/herbology",
      ref: DiplomaRef3,
      inView: DiplomaInView3,
      image: (
        <Image
          src={herbologyImage}
          alt="Image of a practitioner lighting a fire in order to perform cupping on a patient."
          quality={100}
          className="diplomaImage"
          width={810}
          height={500}
          // transformOptions={{ cropFocus: "bottom" }}
          // imgStyle={{ objectFit: "cover" }}
          // style={{ minHeight: "100%" }}
        />
      ),
    },
  ];

  

  return (
    <>
      {/* <Seo
        title="College of Eastern Medicine"
        keywords={[
          `Eight Branches`,
          `acupuncture program in toronto`,
          `Acupuncture education toronto ontario`,
          `Acupuncture school online course`,
          `Traditional Chinese Medicine toronto`,
          `learn homeopathic medicine`,
          `natural healing in toronto`,
          `best local acupuncture clinic`,
          `local acupuncture school`,
          `top tcm academy`,
          `tcm school in toronto`,
          `acupuncture college toronto`,
          `acupuncture program university`,
          `chinese medicine diploma`,
          `local oriental healing`,
          `eastern medicine ontario`,
          `traditional chinese medicine training`,
        ]}
      /> */}
      <LandingSection>
        <LeftSection ref={HideImageRef}>
          <HideImage
            variants={hideImage}
            initial="visible"
            animate={HideImageInView ? "hidden" : "visible"}
            exit="hidden"
          >
            <Image
              src={landingImage}
              alt="Soft image of a practitioner performing acupuncture on a foot."
              quality={90}
              className="landing-image"
              fill
            />
          </HideImage>
        </LeftSection>
        <RightSection>
          <LandingTextWrapper
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            <StampLogo />
            <motion.h1 variants={fadeIn}>
              Ancient Wisdom, <br />
              Modern Practice
            </motion.h1>
            <motion.p variants={fadeIn}>
              Eight Branches offers students a holistic and industry-leading
              education, firmly rooted in Traditional Chinese Medicine (TCM).
            </motion.p>
          </LandingTextWrapper>
        </RightSection>
      </LandingSection>
      <AboutUsSection>
        <AboutUsWrapper>
          <AboutUsImage>
            <Image
              src={aboutUs}
              alt="Image of a practitioner lighting a fire in order to perform cupping on a patient."
              // height={822}
              // width={548}
              fill
              className="about-image"
            />
          </AboutUsImage>
          <AboutUsText>
            <h6>About Us</h6>
            <h1>
              Our college empowers students to uplift communities through the
              practice of Eastern medicine, promoting restoration of health and
              prevention of illness.
              <Link
                href="/about-us/"
                rel="canonical"
                aria-label="Link to About Us page"
                legacyBehavior
                passHref
              >
                <ReadMore>Learn More</ReadMore>
              </Link>
            </h1>
          </AboutUsText>
        </AboutUsWrapper>
      </AboutUsSection>
      <YouTubeReel />
      <DiplomaPrograms>
        <DiplomaHeader>
          <h1>Diploma Programs</h1>
          <p>
            Our programs are tailored to suit any kind of learner at any phase
            of life. Explore our courses below and find out how you can take
            part in sharing and integrating the powerful healing benefits of
            Eastern medicine.
          </p>
          <Link href="/programs" legacyBehavior passHref>
            <ProgramsLink>
              <p>View All Programs</p> <Arrow color="var(--color-darkgreen)" />
            </ProgramsLink>
          </Link>
        </DiplomaHeader>
        {DiplomaData.map((diploma, index) => (
          <DiplomaEntry key={diploma.title} ref={diploma.ref}>
            <EntryText
              variants={fadeInDiplomaText}
              initial="hidden"
              animate={diploma.inView ? "visible" : "hidden"}
            >
              <motion.h1 variants={fadeInDiplomaText}>
                {diploma.title}
              </motion.h1>
              <Link href={diploma.path} passHref legacyBehavior>
                <DiplomaReadMore>View Program</DiplomaReadMore>
              </Link>
            </EntryText>
            <EntryImage>
              <BorderRadius
                variants={hideDiplomaImage}
                initial="visible"
                animate={diploma.inView ? "hidden" : "visible"}
                exit="hidden"
              >
                {diploma.image}
              </BorderRadius>
            </EntryImage>
          </DiplomaEntry>
        ))}
      </DiplomaPrograms>
          <EducationalExcellence />
      {eventData.length ? (
        <UpcomingEvents>
          <EventsHeader>
            <h1>Upcoming Events</h1>
            <Link
              href="/bulletin-board"
              aria-label="Link to Bulletin Board page"
              passHref
              legacyBehavior
            >
              <BulletinBoardLink>
                <p>Visit Bulletin Board</p> <Arrow />
              </BulletinBoardLink>
            </Link>
          </EventsHeader>
          <EventWrapper>
            {eventData?.slice(0, 2).map((eventData) => {
              const isoString = eventData.date;
              const formattedDate = moment
                .utc(isoString)
                .tz("America/Toronto")
                .format("dddd, MMMM Do (h:mm A z)");
              return (
                eventData && (
                  <Event key={eventData._id}>
                    <div>
                      <EventTitle href={eventData.slug} itemProp="url">
                        <h4 key={eventData.slug}>{eventData.title}</h4>
                      </EventTitle>
                      <h6>
                        {!eventData.date || eventData.date === "Invalid date"
                          ? " Date TBD"
                          : " " + formattedDate}
                        <br />
                      </h6>
                      <h6>
                        <strong>Hosted by: </strong>
                        {eventData.host}
                      </h6>
                    </div>
                    <Link
                      href={`/bulletin-board/events/${eventData.slug.current}`}
                      itemProp="url"
                      legacyBehavior
                      passHref
                    >
                      <SignUpLink>Event Details</SignUpLink>
                    </Link>
                  </Event>
                )
              );
            })}
          </EventWrapper>
          <LeftPattern>
            <LeftLogoPattern />
          </LeftPattern>
          <RightPattern>
            <LeftLogoPattern />
          </RightPattern>
        </UpcomingEvents>
      ) : null}
      <AcademicAdvisor />
    </>
  );
};

export async function getStaticProps() {
  const eventData = await getEventsData()
  const contactInfo = await getContactData();

  return {
    props: {
      eventData,
      contactInfo
    },
    revalidate: 10,
  };
}

const LandingSection = styled.div`
  height: 100vh;
  display: flex;
  position: relative;
  align-items: center;
  background-color: var(--color-beige);

  @media (max-width: ${breakpoints.l}px) {
    flex-direction: column-reverse;
    height: 125vh;
  }
  @media (max-width: ${breakpoints.m}px) {
    height: auto;
  }
`;

const LeftSection = styled.div`
  position: relative;
  width: 50%;
  height: 100%;

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
`;

const HideImage = styled(motion.div)`
  position: absolute;
  overflow: hidden;
  z-index: 2;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  .landing-image {
    object-fit: cover;
    min-height: 100%;
  }
`;

const RightSection = styled.div`
  height: 100%;
  width: 50vw;
  position: relative;
  z-index: 10;
  background-color: var(--color-beige);

  @media (max-width: ${breakpoints.l}px) {
    width: 100vw;
    margin-top: 10vh;
    height: 60%;
  }

  @media (max-width: ${breakpoints.m}px) {
    height: auto;
  }
  @media (max-width: ${breakpoints.s}px) {
    padding-top: 10vh;
  }
`;

const LandingTextWrapper = styled(motion.div)`
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1,
  p {
    color: var(--color-darkgreen);
  }
  p {
    font-family: "Matter-light";
    width: 60%;
    font-size: 22px;
    line-height: 32px;
    margin-bottom: 3rem;
  }

  h1 {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: ${breakpoints.xxl}px) {
    p {
      font-size: 20px;
      line-height: 30px;
    }
  }
  @media (max-width: ${breakpoints.l}px) {
    p {
      margin-bottom: 6rem;
    }
    svg {
      transform: scale(0.8);
    }
  }

  @media (max-width: ${breakpoints.m}px) {
    p {
      width: 70%;
      font-size: 18px;
      line-height: 28px;
    }
    svg {
      transform: scale(0.75);
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    h1 {
      margin-top: 0.5rem;
    }
    p {
      margin-bottom: 5rem;
      width: 90%;
      font-size: 17px;
      line-height: 28px;
    }
    svg {
      transform: scale(0.7);
    }
  }
`;

const AboutUsSection = styled.div`
  background-color: var(--color-lightgreen);
  color: var(--color-white);
  width: 100%;
  /* height: 80vh; */
  padding: 2rem 0;
`;

const AboutUsWrapper = styled.div`
  width: 90%;
  height: 100vh;
  min-height: 100vh;
  margin: 0 auto;
  padding: 2.5rem 0;
  position: relative;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: ${breakpoints.xxl}px) {
    height: auto;
    min-height: auto;
  }
  @media (max-width: ${breakpoints.m}px) {
    height: auto;
  }
`;

const AboutUsImage = styled.div`
  position: relative;
  width: 32%;
  height: 100%;
  aspect-ratio: 548/822;
  .about-image {
    object-fit: cover;
    min-height: 100%;
  }

  @media (max-width: ${breakpoints.xxl}px) {
    max-width: 30vw;
    height: auto;
  }
  @media (max-width: ${breakpoints.l}px) {
    display: none;
    visibility: hidden;
  }
`;

const AboutUsText = styled.div`
  width: 57%;
  margin-left: 4rem;
  h6 {
    margin-bottom: 2rem;
  }
  h1 {
    font-size: 3.54vw;
    line-height: 130%;
    margin-bottom: 3rem;
  }

  @media (max-width: ${breakpoints.xxl}px) {
    h1 {
    }
  }

  @media (max-width: ${breakpoints.l}px) {
    width: 100%;
    margin-left: 0;
    h1 {
      font-size: 45px;
    }
  }
  @media (max-width: ${breakpoints.m}px) {
    text-align: center;
    h1 {
      font-size: 32px;
    }
  }
  @media (max-width: 376px) {
    h1 {
      font-size: 28px;
    }
  }
`;

const ReadMore = styled.a`
  cursor: pointer;
  display: inline-block;
  transform: translateY(-1rem);
  margin-left: 2rem;
  border-radius: 10px;
  line-height: 26px;
  font-size: 16px;
  border: 1px solid var(--color-white);
  color: var(--color-white);
  padding: 0.35rem 1.5rem;
  text-decoration: none;
  font-family: "Matter-regular";
  text-align: center;

  transition: 0.25s all ease-in-out;
  :hover {
    color: var(--color-lightgreen);
    background-color: var(--color-white);
  }
  @media (max-width: ${breakpoints.xl}px) {
    transform: translateY(-0.5rem);
    margin-left: 0rem;
    margin-top: 3rem;
    display: block;
    max-width: 140px;
  }
  @media (max-width: ${breakpoints.m}px) {
    transform: translateY(0rem);
    margin: 0 auto;
    margin-top: 2rem;
  }
`;

const DiplomaPrograms = styled.section`
  background-color: var(--color-lightestbeige);
`;

const DiplomaHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 7rem;
  padding-bottom: 5rem;

  h1,
  p {
    color: var(--color-darkgreen);
    text-align: center;
  }
  h1 {
    padding-bottom: 2rem;
  }
  p {
    width: 50%;
    font-family: "matter-light";
  }
  @media (max-width: ${breakpoints.l}px) {
    p {
      width: 80%;
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    p {
      width: 90%;
    }
  }
`;

const DiplomaEntry = styled.div`
  width: 90%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;

  border-top: 1px solid #82af82;
  padding: 2rem 0;

  @media (max-width: ${breakpoints.m}px) {
    flex-direction: column-reverse;
    padding: 4rem 0;
  }
`;

const EntryText = styled(motion.div)`
  width: 35%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h1 {
    color: var(--color-darkgreen);
    max-width: 90%;
    margin-bottom: 2rem;
  }

  @media (max-width: 1870px) {
    width: 39%;
  }
  @media (max-width: 1670px) {
    width: 43%;
  }
  @media (max-width: 1600px) {
    width: 45vw;
  }
  @media (max-width: ${breakpoints.xl}px) {
    width: 50%;
  }
  @media (max-width: ${breakpoints.l}px) {
    h1 {
      font-size: 40px;
      line-height: 130%;
    }
  }
  @media (max-width: ${breakpoints.m}px) {
    width: auto;
    margin: 0;
    h1 {
      font-size: 45px;
      margin-top: 1.5rem;
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    h1 {
      font-size: 36px;
    }
  }
`;

const EntryImage = styled.div`
  overflow: hidden;
  position: relative;
  max-width: 50%;
  @media (max-width: 1600px) {
    max-width: 45vw;
  }
  @media (max-width: ${breakpoints.m}px) {
    max-width: none;
  }
`;

const BorderRadius = styled(motion.div)`
  border-radius: 30px;
  overflow: hidden;
  position: relative;
  aspect-ratio: 810/500;
  height: auto;
  width: 100%;
  .diplomaImage {
    object-fit: contain;
    aspect-ratio: 810/500;
    width: 100%;
    height: auto;
    display: block;
  }

  @media (max-width: ${breakpoints.l}px) {
    border-radius: 20px;
  }

  @media (max-width: ${breakpoints.m}px) {
    border-radius: 5px;
  }
`;

const DiplomaReadMore = styled.a`
  cursor: pointer;
  align-self: flex-start;
  display: inline-block;
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
`;

const UpcomingEvents = styled.section`
  background-color: #e6dacc;
  padding: 6rem 0;
  position: relative;
  @media (max-width: ${breakpoints.s}px) {
    padding-bottom: 4rem;
  }
`;

const EventsHeader = styled.header`
  text-align: center;
  margin: 0 auto;
`;

const ProgramsLink = styled.a`
  cursor: pointer;
  color: var(--color-darkgreen);
  text-decoration: none;
  display: flex;
  align-items: baseline;
  justify-content: center;

  svg {
    transition: 0.2s all cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  p {
    width: unset;
    padding-top: 1.5rem;
    padding-right: 0.75rem;
    font-family: "Matter-regular";
    font-size: 19px;
    transition: 0.2s all cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  :hover {
    color: #00000095;
    p {
      opacity: 0.65;
    }
    svg {
      opacity: 0.65;
      transform: translate3d(4px, 0, 0);
    }
  }

  @media (max-width: ${breakpoints.m}px) {
    p {
      font-size: 17px;
    }
  }
`;

const BulletinBoardLink = styled.a`
  cursor: pointer;
  color: black;
  text-decoration: none;
  display: flex;
  align-items: baseline;
  justify-content: center;

  svg {
    transition: 0.2s all cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  p {
    padding-right: 0.75rem;
    padding-top: 0.5rem;
    font-family: "Matter-regular";
    font-size: 19px;
    transition: 0.2s all cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  :hover {
    color: #00000095;
    svg {
      opacity: 0.65;
      transform: translate3d(4px, 0, 0);
    }
  }

  @media (max-width: ${breakpoints.m}px) {
    p {
      font-size: 17px;
    }
  }
`;

const EventWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem 0;
  flex-direction: row;

  @media (max-width: ${breakpoints.l}px) {
    flex-direction: column;
    width: 80%;
    margin: 0 auto;

    h4 {
      font-size: 32px;
    }
  }
  @media (max-width: ${breakpoints.m}px) {
    h4 {
      font-size: 25px;
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    width: 90%;
  }
`;
const Event = styled.article`
  width: 29%;
  color: var(--color-black);
  background-color: var(--color-white);
  border-radius: 20px;
  border: 1px solid black;
  padding: 2.5rem 3.5rem;
  margin: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h6 {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    font-size: 20px;
    line-height: 120%;
    font-family: "Matter-light";
    strong {
      font-family: "Matter-regular";
    }

    :last-child {
      margin-bottom: 2rem;
    }
  }

  @media (max-width: 1600px) {
    width: 34%;
  }

  @media (max-width: ${breakpoints.xxl}px) {
    min-width: 33%;
    max-width: 50%;
    border-radius: 20px;
    h4 {
      font-size: 24px;
    }
    h6 {
      font-size: 17px;
    }
  }
  @media (max-width: ${breakpoints.xl}px) {
    h6 {
      font-size: 17px;
    }
  }
  @media (max-width: ${breakpoints.l}px) {
    min-width: 80%;
    max-width: 80%;
    width: 80%;
    margin: 1rem auto;
    padding: 2rem 2rem;
  }
  @media (max-width: ${breakpoints.m}px) {
    margin-bottom: 2.5rem;
    min-width: none;
    max-width: none;
    width: 90%;
    h6 {
      line-height: 130%;
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    width: 100%;

    h6 {
      font-size: 16px;
    }
  }
`;

const EventTitle = styled(Link)`
  text-decoration: none;

  h4 {
    line-height: 125%;
    padding-bottom: 0.25rem;
    color: var(--color-black);
  }
`;

const SignUpLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  font-size: 18px;
  font-family: "Matter-light";
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: var(--color-darkgreen);
  border: 1px solid var(--color-darkgreen);
  border-radius: 10px;
  width: 160px;
  height: 40px;
  transition: var(--hover-transition);

  :hover {
    background-color: var(--color-darkgreen);
    color: var(--color-white);
  }

  @media (max-width: ${breakpoints.xl}px) {
    font-size: 17px;
  }
`;

const LeftPattern = styled.div`
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translateY(-50%);
  @media (max-width: ${breakpoints.m}px) {
    left: 2%;
  }
  @media (max-width: ${breakpoints.s}px) {
    display: none;
  }
`;

const RightPattern = styled.div`
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%) rotate(180deg);
  @media (max-width: ${breakpoints.m}px) {
    right: 2%;
  }
  @media (max-width: ${breakpoints.s}px) {
    display: none;
  }
`;
