import React, { useEffect, useCallback, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"
import Seo from "components/seo"
import useEmblaCarousel from "embla-carousel-react"
import { useRecursiveTimeout } from "/components/Embla/useRecursiveTimeout"
import breakpoints from "/components/breakpoints"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GoogleMaps } from "/components/generalcomponents"
import { AiOutlineClockCircle } from "react-icons/ai"
import image1 from '../images/CampusImages/1.png'
import image3 from '../images/CampusImages/3.png'
import image4 from '../images/CampusImages/4.png'
import image5 from '../images/CampusImages/5.png'
import image6 from '../images/CampusImages/6.png'
import image7 from '../images/CampusImages/7.png'
import image8 from '../images/CampusImages/8.png'
import image9 from '../images/CampusImages/9.png'
import image12 from '../images/CampusImages/12.png'
import image13 from '../images/CampusImages/13.png'
import apothecaryImg from '../images/Facilities/apothecary.png'
import libraryImg from '../images/Facilities/library.png'
import teachingClinicImg from '../images/Facilities/teachingclinic.png'
import torontoImg from '../images/Facilities/toronto.jpg'  
import { getContactData } from "lib/sanity/contactInfoQuery"

const Campus = ({contactInfo}) => {
  const imageData = [image1, image3, image4, image5, image6, image7, image8, image9, image12, image13]

  // ---------- INTERSECTION OBSERVER LOGIC ----------
  const [SectionRef1, sectionInView1] = useInView({
    root: null,
    threshold: 0.5,
    triggerOnce: true,
  })
  const [SectionRef2, sectionInView2] = useInView({
    root: null,
    threshold: 0.5,
    triggerOnce: true,
  })
  const [SectionRef3, sectionInView3] = useInView({
    root: null,
    threshold: 0.5,
    triggerOnce: true,
  })
  const [HideCarouselRef, HideCarouselInView] = useInView({
    root: null,
    threshold: 0.3,
    triggerOnce: true,
  })

  // ---------- FRAMER LOGIC ----------

  const Header = {
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
  const fadeIn = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        // duration: 1,
        // staggerChildren: 0.35,
      },
    },
    hidden: {
      y: 30,
      opacity: 0,
    },
  }
  const hideImage = {
    visible: {
      y: 0,
    },
    hidden: {
      y: "-100%",
      transition: {
        // delay: 0.15,
        ease: "easeInOut",
        duration: 1,
      },
    },
  }

  // ---------- Initialize Embla Carousel ----------
  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    containScroll: "trimSnaps",
  })

  // ---------- Embla config for autoplay scrolling ----------
  const AUTOPLAY_INTERVAL = 1750
  const autoplay = useCallback(() => {
    if (!embla) return
    if (embla.canScrollNext()) {
      embla.scrollNext()
    } else {
      embla.scrollTo(0)
    }
  }, [embla])
  const { play, stop } = useRecursiveTimeout(autoplay, AUTOPLAY_INTERVAL)

  // ---------- Embla config for progressbar ----------
  const [scrollProgress, setScrollProgress] = useState(0)
  const onScroll = useCallback(() => {
    if (!embla) return
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()))
    setScrollProgress(progress * 100)
  }, [embla, setScrollProgress])

  // ---------- Run configurations ----------
  useEffect(() => {
    if (!embla) return
    onScroll()
    play()
    embla.on("scroll", onScroll)
    embla.on("pointerDown", stop)
  }, [embla, play, onScroll, stop])

  return (
    <>
      <Seo
        title="Our Campus"
        description="With the largest campus (7000+ sqft) in Toronto dedicated to TCM, Eight
Branches has medication areas, a dojo, multidisciplinary clinics, a library and
workshop spaces."
        keywords={[
          `Eight Branches`,
          `Eight Branches Campus Toronto`,
          `Acupuncture school`,
          `Acupuncture learn online`,
          `TCM`,
          `Traditional Chinese Medicine Toronto`,
          `Best acupuncture school`,
          `best acupuncture`,
          `best acupuncture toronto`,
          `school in toronto`,
          `acupuncture near me`,
          `local acupuncture clinic`,
          `local acupuncture school`,
          `local acupuncture academy`,
        ]}
      />
      <HeaderWrapper>
        <CampusHeader variants={Header} initial="hidden" animate="visible">
          <motion.h1 variants={Header}>Our Campus</motion.h1>
          <motion.h6 variants={Header}>
            Eight Branches offers students a range of classroom environments to
            suit different types of study, including academic classrooms, a
            serene studio and a teaching clinic, which features 8 fully equipped
            teaching spaces.
          </motion.h6>
        </CampusHeader>

        <Embla ref={HideCarouselRef}>
          <EmblaViewport ref={emblaRef}>
            <EmblaContainer>
              <HideImage
                style={{ backgroundColor: "var(--color-lightestbeige)" }}
                variants={hideImage}
                initial="visible"
                animate={HideCarouselInView ? "hidden" : "visible"}
                exit="hidden"
              />
              {imageData.map((image, index) => {
                return (
                  <EmblaSlide key={index}>
                    <EmblaSlideInner>
                      <Image
                        src={image}
                        alt={
                          "Images of the campus, including lecture halls, teaching clinic, etc."
                        }
                        className="embla-image"
                        quality={95}
                        width={1380}
                        height={750}
                      />
                    </EmblaSlideInner>
                  </EmblaSlide>
                )
              })}
            </EmblaContainer>
          </EmblaViewport>

          <EmblaProgress>
            <EmblaProgressBar
              style={{ transform: `translateX(${scrollProgress}%)` }}
            />
          </EmblaProgress>
        </Embla>
      </HeaderWrapper>

      <Facilities>
        <h1>Facilities</h1>
        <CardWrapper>
          <Card
            ref={SectionRef1}
            variants={fadeIn}
            initial="hidden"
            animate={sectionInView1 ? "visible" : "hidden"}
          >
            <CardText>
              <h4>Our Apothecary</h4>
              <h6>
                Discover the Eight Branches apothecary, which houses a unique
                and extensive collection of raw Chinese herbs & granules.
              </h6>
              <ComingSoon>
                <ComingSoonWrapper>
                  <AiOutlineClockCircle />
                  <p>Coming soon!</p>
                </ComingSoonWrapper>
              </ComingSoon>
            </CardText>

            <CardImage>
              <Image
                src={apothecaryImg}
                alt="Images of traditional Chinese herbs and granules."
                quality={100}
                className="facility-image"
                height={555}
                width={800}
              />
            </CardImage>
          </Card>
          <Card
            ref={SectionRef2}
            variants={fadeIn}
            initial="hidden"
            animate={sectionInView2 ? "visible" : "hidden"}
          >
            <CardImage>
              <Image
                src={libraryImg}
                alt="Images of a woman reading in our library, with a traditional Chinese scroll painting behind her."
                quality={100}
                className="facility-image"
                height={555}
                width={800}
              />
            </CardImage>
            <CardText>
              <h4>Our Library</h4>
              <h6>
                Eight Branches has an ever expanding library. Students can
                browse our collection in person or through our online catalogue.
              </h6>
              <CardLinkOutbound
                href="https://eightbranches.librarika.com/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkWrapper>
                  <p>View Our Catalog</p>
                  <svg
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.590088 10.59L5.17009 6L0.590088 1.41L2.00009 0L8.00009 6L2.00009 12L0.590088 10.59Z"
                      fill="black"
                    />
                  </svg>
                </LinkWrapper>
              </CardLinkOutbound>
            </CardText>
          </Card>
          <Card
            ref={SectionRef3}
            variants={fadeIn}
            initial="hidden"
            animate={sectionInView3 ? "visible" : "hidden"}
          >
            <CardText>
              <h4>The Teaching Clinic</h4>
              <h6>
                Explore affordable, community-based TCM treatments from our
                student-run clinic.
              </h6>
              <CardLink href="/teaching-clinic">
                <LinkWrapper>
                  <p>Learn more</p>{" "}
                  <svg
                    width="8"
                    height="12"
                    viewBox="0 0 8 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.590088 10.59L5.17009 6L0.590088 1.41L2.00009 0L8.00009 6L2.00009 12L0.590088 10.59Z"
                      fill="black"
                    />
                  </svg>
                </LinkWrapper>
              </CardLink>
            </CardText>
            <CardImage>
              <Image
                src={teachingClinicImg}
                alt="Images of traditional Chinese herbs and granules."
                quality={100}
                className="facility-image"
                height={555}
                width={800}
              />
            </CardImage>
          </Card>
        </CardWrapper>
      </Facilities>
      <LocationDescription>
        <LocationImage
        // ref={HideImageRef}
        >
          {/* <HideImage
            style={{ backgroundColor: "var(--color-sandbeige)" }}
            variants={hideImage}
            initial="visible"
            animate={HideImageInView ? "hidden" : "visible"}
            exit="hidden"
          /> */}
          <Image
            src={torontoImg}
            alt="Images of Toronto's skyline on a sunny day, with a body of water in the foreground."
            quality={100}
            className="toronto-image"
            // transformOptions={{ cropFocus: "center" }}
            // imgStyle={{ objectFit: "cover" }}
            // style={{ minHeight: "100%" }}
          />
        </LocationImage>
        <LocationText>
          <h1>
            Conveniently <br />
            Located
          </h1>
          <h6>
            Our school is in the heart of Midtown Toronto, a pleasant
            neighborhood rich in character and with a long history of embracing
            healthy and community-focused lifestyles.
            <br />
            <br />
            Situated 5 minutes from Davisville subway station and 10 minutes
            from local parks and walking trails, Eight Branches offers a
            tranquil learning environment with easy access to all the benefits
            of downtown Toronto.
          </h6>
        </LocationText>
      </LocationDescription>
      <GoogleMaps contactInfo={contactInfo} />
    </>
  )
}

export default Campus

export async function getStaticProps() {
  const contactInfo = await getContactData()

  return {
    props: {
      contactInfo,
    },
    revalidate: 10,
  };
}

const HeaderWrapper = styled.section`
  width: 100%;
  padding-top: 12.5rem;
  z-index: 2;
  position: relative;
  background-color: var(--color-lightestbeige);
  margin: 0 auto;

  @media (max-width: ${breakpoints.m}px) {
    padding-top: 7rem;
  }
`

const CampusHeader = styled(motion.div)`
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
  @media (max-width: ${breakpoints.xxl}px) {
    h6 {
      width: 55%;
    }
  }

  @media (max-width: ${breakpoints.xl}px) {
    h6 {
      width: 65%;
    }
  }
  @media (max-width: ${breakpoints.l}px) {
    padding-bottom: 5rem;
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
      width: 95%;
    }
  }
`

const Embla = styled.div`
  width: 72.5%;
  margin: 0 auto;
  padding-bottom: 15rem;

  @media (max-width: ${breakpoints.xxl}px) {
    width: 85%;
  }

  @media (max-width: ${breakpoints.xl}px) {
    width: 90%;
  }

  @media (max-width: ${breakpoints.m}px) {
    padding-bottom: 10rem;
  }

  @media (max-width: ${breakpoints.s}px) {
    padding-bottom: 5rem;
  }
`

const EmblaViewport = styled.div`
  overflow: hidden;
  width: 100%;

  border-radius: 20px;
  -webkit-border-radius: 20px;

  @media (max-width: ${breakpoints.m}px) {
    border-radius: 10px;
    -webkit-border-radius: 10px;
  }
  @media (max-width: ${breakpoints.s}px) {
    border-radius: 5px;
    -webkit-border-radius: 5px;
  }
`

const EmblaContainer = styled.div`
  display: flex;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -webkit-tap-highlight-color: transparent;

  position: relative;
  /* overflow: hidden; */
  /* border: 1px solid; */
`

const EmblaSlide = styled.div`
  position: relative;
  min-width: 100%;
  /* padding-left: 10px; */
  height: 750px;
  cursor: ew-resize;
  @media (max-width: ${breakpoints.xl}px) {
    height: 530px;
  }
  @media (max-width: ${breakpoints.l}px) {
    height: 400px;
  }
  @media (max-width: ${breakpoints.m}px) {
    height: 300px;
  }
  @media (max-width: ${breakpoints.s}px) {
    height: 200px;
  }
`
const EmblaSlideInner = styled.div`
  display: block;
  height: 100%;
  width: 100%;
  .embla-image {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`

const EmblaProgress = styled.div`
  position: relative;
  background-color: white;
  max-width: 930px;
  width: calc(100% - 40px);
  height: 10px;
  overflow: hidden;
  border: 1px solid white;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
  top: -60px;

  @media (max-width: ${breakpoints.m}px) {
    margin-top: 50px;
    top: -30px;
    height: 7px;
  }
`
const EmblaProgressBar = styled.div`
  position: absolute;
  background-color: var(--color-lightgreen);
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  top: -60px;
  bottom: -60px;
  left: -100%;

  @media (max-width: ${breakpoints.m}px) {
    top: -30px;
  }
`

const Facilities = styled.section`
  background-color: var(--color-lightestbeige);
  display: flex;
  flex-direction: column;

  h1 {
    margin: 0 auto;
    padding-bottom: 5rem;
  }

  @media (max-width: ${breakpoints.m}px) {
    h1 {
      padding-bottom: 4.5rem;
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    h1 {
      padding-bottom: 2.5rem;
    }
  }
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  position: relative;
  padding-bottom: 7.5rem;

  @media (max-width: ${breakpoints.m}px) {
    padding-bottom: 5rem;
  }
  @media (max-width: ${breakpoints.s}px) {
    padding-bottom: 3rem;
  }
`

const Card = styled(motion.div)`
  position: relative;
  display: flex;
  width: 72.5%;
  height: 100%;
  border: 1px solid black;
  border-radius: 20px;
  overflow: hidden;
  background-color: white;
  margin: 0 auto;
  margin-bottom: 4rem;
  align-items: center;

  @media (max-width: ${breakpoints.xxl}px) {
    width: 85%;
  }

  @media (max-width: ${breakpoints.xl}px) {
    width: 90%;
  }
  @media (max-width: ${breakpoints.l}px) {
    height: 330px;
  }
  @media (max-width: ${breakpoints.m}px) {
    border-radius: 10px;
  }

  @media (max-width: ${breakpoints.s}px) {
    height: 425px;
    flex-direction: column;
    width: 90%;
    margin-bottom: 2rem;

    :nth-child(odd) {
      flex-direction: column-reverse;
    }
  }
`

const CardImage = styled.div`
  width: 55%;
  height: 100%;
  overflow: hidden;
  position: relative;
  z-index: 1;
  display: grid;
  place-items: center;

  .facility-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: ${breakpoints.s}px) {
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`

const CardText = styled(motion.div)`
  width: 35%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h4 {
    padding-bottom: 1.5rem;
  }

  @media (max-width: ${breakpoints.xxl}px) {
    /* padding: 3rem; */
  }

  @media (max-width: ${breakpoints.l}px) {
    h6 {
      font-size: 17px;
    }
  }

  @media (max-width: ${breakpoints.s}px) {
    width: 100%;
    padding: 1.5rem 1rem;
    border: none;

    h4 {
      padding-bottom: 1rem;
    }
  }
`

const CardLink = styled(Link)`
  color: black;
  text-decoration: none;
`
const CardLinkOutbound = styled.a`
  color: black;
  text-decoration: none;
`
const ComingSoon = styled.div`
  color: black;
  text-decoration: none;
`

const ComingSoonWrapper = styled(motion.div)`
  display: flex;
  align-items: baseline;
  font-family: "matter-regular";

  filter: opacity(0.5);

  svg {
    margin-right: 0.5rem;
    transform: translateY(0.1rem);
  }

  p {
    padding-right: 0.75rem;
    padding-top: 1rem;
    font-family: "Matter-regular";
    font-size: 19px;
    transition: var(--hover-transition);
  }

  @media (max-width: ${breakpoints.xl}px) {
    p {
      font-size: 17px;
    }
  }
`

const LinkWrapper = styled(motion.div)`
  display: flex;
  align-items: baseline;
  font-family: "matter-regular";

  svg {
    transition: 0.2s all cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  p {
    padding-right: 0.75rem;
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
      transform: translate3d(8px, 0, 0);
    }
  }

  @media (max-width: ${breakpoints.xl}px) {
    p {
      font-size: 17px;
    }
  }
`

const LocationDescription = styled.section`
  padding-top: 4rem;
  padding-bottom: 4rem;
  background-color: var(--color-sandbeige);

  @media (max-width: ${breakpoints.s}px) {
    padding: 0;
  }
`

const LocationImage = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
  .toronto-image {
    border-radius: 20px;
    width: 100%;
    height: auto;
    aspect-ratio: 1920/925;

  }
  @media (max-width: ${breakpoints.s}px) {
    .toronto-image {
      border-radius: 0;
    }
    width: 100%;
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

const LocationText = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding-top: 3rem;
  padding-bottom: 5rem;

  h1 {
    padding-right: 3rem;
  }

  h6 {
    width: 55%;
    align-self: flex-end;
  }
  @media (max-width: ${breakpoints.l}px) {
    flex-direction: column;
    h1 {
      padding-right: 0rem;
    }
    h6 {
      padding-top: 2rem;
      align-self: flex-start;
      width: 85%;
    }
  }
  @media (max-width: ${breakpoints.m}px) {
    padding-bottom: 2rem;
    h6 {
      width: 100%;
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    padding-top: 2rem;
  }
`
