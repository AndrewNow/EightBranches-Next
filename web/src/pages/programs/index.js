import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import styled, {css} from "styled-components"
// import Seo from "/components/seo"
import { useInView } from "react-intersection-observer"
import breakpoints from "/components/breakpoints"
import LeafPattern from "/svg/leafPattern"
import StampLogo from "/svg/stamplogo"
import { motion } from "framer-motion"
import { ApplyNow, AcademicAdvisor } from "/components/generalcomponents"
import { AiOutlineClockCircle } from "react-icons/ai"
import banner from '../../images/TeachingClinic/banner.png'
import bannerMobile from '../../images/TeachingClinic/mobilebanner.png'
import acupuncture from '../../images/Programs/programs-acupuncture.png'
import cupping from '../../images/Programs/programs-cupping.png'
import tcmp from '../../images/Programs/programs-tcmp.png'
import herbology from '../../images/Programs/programs-herbology.png'
import acuCert from '../../images/Programs/certificate-acupuncture-1.jpg'
import bodyworkCert from '../../images/Programs/certificate-bodywork.png'
import tcmpCert from '../../images/Programs/certificate-tcm.png'
import { getContactData } from "lib/sanity/contactInfoQuery"

const OurPrograms = () => {
  // const siteTitle = data.site.siteMetadata?.title || `Explore Our Programs`

  // ---------- INTERSECTION OBSERVER LOGIC ----------
  const [SectionRef1, sectionInView1] = useInView({
    root: null,
    threshold: 0.85,
    triggerOnce: true,
  })
  const [SectionRef2, sectionInView2] = useInView({
    root: null,
    threshold: 0.4,
    triggerOnce: true,
  })
  const [SectionRef3, sectionInView3] = useInView({
    root: null,
    threshold: 0.4,
    triggerOnce: true,
  })
  const [SectionRef4, sectionInView4] = useInView({
    root: null,
    threshold: 0.4,
    triggerOnce: true,
  })
  const [contentRef, inView] = useInView({
    root: null,
  })
  const [contentRef2, inView2] = useInView({
    root: null,
  })
  const [CardRef, CardInView] = useInView({
    root: null,
    triggerOnce: true,
    threshold: 0.5,
  })


  // ---------- PARALLAX SCROLL LOGIC ----------
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() => {
    inView && window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [inView])

  useEffect(() => {
    inView2 && window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [inView2])

  // ---------- FRAMER LOGIC ----------

  const fadeIn = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delayChildren: 0.1,
        staggerChildren: 0.15,
        ease: "easeInOut",
      },
    },
    hidden: {
      y: 25,
      opacity: 0,
    },
  }
  const fadeCards = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    hidden: {
      y: 20,
      opacity: 0,
    },
  }

  const hideImage = {
    visible: {
      clipPath: "inset(100% 0% 0% 0%)",
    },
    hidden: {
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        delay: 0.1,
        ease: "easeInOut",
        duration: 1,
      },
    },
  }

  const programData = [
    {
      title: `Acupuncture & <br /> Moxibustion`,
      description: "This program qualifies graduates to write the Pan-Canadian regulatory examinations and to become a Registered Acupuncturist (R.Ac).",
      image: acupuncture,
      imageAlt: "A practitioner carefully performs acupuncture on a patient's foot.",
      href: "/programs/diploma-programs/acupuncture-and-moxibustion/",
      observers: {
        inView: sectionInView1,
        sectionRef: SectionRef1,
      },
    },
    {
      title: `Traditional Chinese <br />Medicine Practitioner`,
      description: "This program qualifies graduates to write the Pan-Canadian regulatory examinations and to become a Registered Acupuncturist (R.Ac) and a Registered TCM Practitioner (R.TCMP).",
      image: cupping,
      imageAlt: "A practitioner performs cupping on a patient with 6 cups on their back.",
      href: "/programs/diploma-programs/TCMP/",
      observers: {
        inView: sectionInView2,
        sectionRef: SectionRef2,
      },
      svg: (
        <SvgWrapper
            ref={contentRef}
            style={{
              transform: `translate3D(0, calc(225px + ${
                offsetY * -0.175
              }px), 0) rotate(180deg)`,
            }}
          >
          <LeafPattern />
        </SvgWrapper>
      )
    },
    {
      title: `Post-Graduate <br />Advanced TCMP`,
      description: "This one year post-graduate program is available for R. TCMPs to qualify as an Advanced Registered Traditional Chinese Medicine Practitioner or Doctor of Traditional Chinese Medicine, according to different Provincial designations.",
      image: tcmp,
      imageAlt: "A practitioner working on a patient in one of our clinic rooms.",
      href: "/programs/diploma-programs/advanced-TCMP/",
      observers: {
        inView: sectionInView3,
        sectionRef: SectionRef3,
      },
    },
    {
      title: `Herbology`,
      description: "This program qualifies graduates to apply for professional membership as a Registered Herbalist (RH) with the Ontario Herbalists Association.",
      image: herbology,
      imageAlt: "A picture of a collection of herbs and jars from our Apothecary.",
      href: "/programs/diploma-programs/herbology/",
      observers: {
        inView: sectionInView4,
        sectionRef: SectionRef4,
      },
      svg2: (
          <SvgWrapper
            ref={contentRef2}
            style={{
              transform: `translate3D(0, calc(425px + ${
                offsetY * -0.175
              }px), 0) rotate(0deg)`,
            }}
          >
          <LeafPattern />
        </SvgWrapper>
      )
    },
  ] 

  const certificateData = [
    {
      title: `Acupuncture & Moxibustion Certificate`,
      href: "/programs/certificate-programs/acupuncture-and-moxibustion",
      image: acuCert,
      imageAlt: "A picture of a prosthetic foot with illustrated acupuncture points.",
    },
    {
      title: `Certificate in Asian Bodywork Therapy`,
      href: false,
      image: bodyworkCert,
      imageAlt: "A picture of an instructor guiding students while illustrating bodywork points of interest on a patient.",
    },
    {
      title: `TCM Preparatory Certificate`,
      href: false,
      image: tcmpCert,
      imageAlt: "A practitioner performs moxibustion, igniting a bundle of herbs.",
    },
  ]

  return (
    <>
      {/* <Seo
        title="Explore Our Programs"
        description="Explore Programs Available at Eight Branches."
        keywords={[
          `Eight Branches`,
          `Eight Branches toronto`,
          `Eight Branches programs`,
          `herbology program`,
          `acupuncture and moxibustion`,
          `advanced TCMP`,
          `Chinese medicine certificate`,
          `TCM diploma`,
          `toronto acupuncture programs`,
          `toronto chinese medicine programs`,
        ]}
      /> */}
      <SectionWrapper>
        <BannerText variants={fadeIn} initial="hidden" animate="visible">
          <motion.h1 variants={fadeIn}>
            Explore Programs Available at Eight Branches
          </motion.h1>
          <motion.h5 variants={fadeIn}>
            Our college offers a rich experience across a wide gamut of academic
            environments. Explore our programs to find one that suits you best.
          </motion.h5>
        </BannerText>
        <ImageBanner>
          <Image
            src={banner}
            alt="Beige background image with a tea set in the foreground."
            placeholder="blurred"
            quality={100}
            width={1920}
            loading="eager"
            priority={true}
            className="image-banner-desktop"
          />
          <Image
            src={bannerMobile}
            alt="Beige background image with a tea set in the foreground."
            quality={100}
            placeholder="blurred"
            width={900}
            loading="eager"
            className="image-banner-mobile"
          />
        </ImageBanner>
      </SectionWrapper>

      <ProgramContainer>
        {programData.map((program, index) => {
          return (
            <ProgramSection key={program.imageAlt}>
              {program.svg && program.svg}
              <ProgramInnerFlex index={index}>
                <ProgramImage
                  variants={fadeIn}
                  initial="hidden"
                  animate={program.observers.inView ? "visible" : "hidden"}
                >
                  <ImageWrapper
                    variants={hideImage}
                    initial="visible"
                    animate={program.observers.inView ? "hidden" : "visible"}
                    exit="hidden"
                  >
                    <Image
                      src={program.image}
                      alt={program.imageAlt}
                      className="program-image"
                      width={587}
                      height={370}
                      quality={100}
                    />
                  </ImageWrapper>
                </ProgramImage>
                <ProgramText
                  variants={fadeIn}
                  initial="hidden"
                  animate={program.observers.inView ? "visible" : "hidden"}
                  ref={program.observers.sectionRef}
                >
                  <motion.h2 variants={fadeIn} dangerouslySetInnerHTML={{__html: program.title}} />
                  <motion.h6 variants={fadeIn}>
                    {program.description}
                  </motion.h6>
                  <ProgramLink
                    variants={fadeIn}
                    rel="canonical"
                    href={program.href}
                  >
                    <LinkWrapper variants={fadeIn}>
                      <p>View Program</p>{" "}
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
                  </ProgramLink>
                </ProgramText>
                </ProgramInnerFlex>
              {program.svg2 && program.svg2}
          </ProgramSection>
          )
        })}
      </ProgramContainer>

      <CertificatePrograms>
        <Title>
          <StampLogo />
          <h1>Certificate Programs</h1>
        </Title>
        <Cards ref={CardRef} >
          {certificateData.map((certificate) => {
            return (
              <Card
                key={certificate.imageAlt}
                variants={fadeCards}
                animate={CardInView ? "visible" : "hidden"}
                intial="hidden"
              >
                <CardText>
                  <h4>{certificate.title}</h4>
                  {certificate.href ? 
                    <CertificateLink href={certificate.href}>
                        <p>View Program</p> 
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
                    </CertificateLink>
                    :
                    <ComingSoonFallback>
                      <AiOutlineClockCircle />
                      <p>Coming Soon!</p>
                    </ComingSoonFallback>
                  }
                </CardText>
                <CardImage>
                  <Image
                    src={certificate.image}
                    alt={certificate.imageAlt}
                    quality={100}
                    className="cert-image"
                  />
                </CardImage>
              </Card>
            )
          })}
        </Cards>
        <p className='cert-info'>
          Certificate programs are designed for general interest or Regulated
          Health Practitioners interested in practicing TCM Modalities as an
          <strong> adjunct therapy to their primary method of treatment</strong>
          . You must complete one of our diploma programs if you would like to
          practice as a Registered TCMP Practitioner, Registered Acupuncturist
          or Registered Herbalist.
        </p>
      </CertificatePrograms>
      <ApplyNow />
      <AcademicAdvisor />
    </>
  )
}

export default OurPrograms

export async function getStaticProps() {
  const contactInfo = await getContactData()

  return {
    props: {
      contactInfo,
    },
    revalidate: 10,
  };
}

const SectionWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: var(--color-beige);
  position: relative;
`

const ImageBanner = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 850px;
  /* max-height: 90vh; */
  /* min-height: 50vh; */
  /* overflow: hidden;
  margin: 0 auto;
  bottom: 0; */

  & .image-banner-desktop {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  & .image-banner-mobile {
    display: none;
    object-fit: cover;
  }
  @media (max-width: ${breakpoints.xxl}px) {
    height: 800px;
  }
  @media (max-width: ${breakpoints.xl}px) {
    height: 700px;
    .image-banner-desktop {
      max-width: 100%;
    }
  }

  @media (max-width: ${breakpoints.l}px) {
    height: 600px;
  }

  @media (max-width: 860px) {
    display: block;
    width: 100%;
    height: 65vh;
    overflow: hidden;
    margin: 0 auto;
    position: relative;

    /* & .image-banner-desktop {
      display: none;
    }
    & .image-banner-mobile {
      height: 100%;
      display: block;
    } */
  }
  @media (max-width: 700px) {
    height: 55vh;
  }

  @media (max-width: 600px) {
    /* height: 90vh; */
    height: 75vh;
    & .image-banner-desktop {
      display: none;
    }
    & .image-banner-mobile {
      height: 100%;
      width: 100%;
      display: block;
    }
  }
  @media (max-width: 490px) {
    height: 75vh;
  }
`

const BannerText = styled(motion.div)`
  position: absolute;
  z-index: 20;
  top: 25%;
  left: 10%;
  width: 55%;
  h1 {
    padding-bottom: 0.5rem;
    /* width: 50%; */
  }

  h5 {
    margin-top: 1rem;
    width: 70%;
  }
  @media (max-width: 1500px) {
    width: 60%;
    h1 {
      width: 100%;
    }
  }
  @media (max-width: ${breakpoints.xl}px) {
    width: 60%;
    h5 {
      width: 100%;
    }
  }
  @media (max-width: ${breakpoints.l}px) {
    width: 75%;
    h1 {
      width: 100%;
    }
    h5 {
      width: 80%;
    }
  }

  @media (max-width: ${breakpoints.m}px) {
    width: 90%;
    left: 5vw;
    /* top: 30vw; */

    h1 {
      padding-bottom: 0.5rem;
    }
    h5 {
      font-size: 17px;
      margin-top: 0rem;
    }
  }
  
  @media (max-width: ${breakpoints.s}px) {
    h5 {
      width: 100%;
    }
  }

  @media (max-width: ${breakpoints.xs}px) {
    bottom: 1rem;
  }
`

const ProgramContainer = styled.section`
  background-color: var(--color-beige);
`

const ProgramSection = styled.div`
  max-height: 70vh;
  position: relative;
  overflow: hidden !important;

  :nth-child(1) {
    background-color: var(--color-beige);
  }
  :nth-child(2) {
    background-color: var(--color-brown);
  }
  :nth-child(3) {
    background-color: var(--color-sandbeige);
  }
  :nth-child(4) {
    background-color: var(--color-salmon);
  }
  @media (max-width: ${breakpoints.xl}px) {
    max-height: 85vh;
  }

  @media (max-width: ${breakpoints.l}px) {
    min-height: 50vh;
  }

  @media (max-width: ${breakpoints.m}px) {
    max-height: none;
    height: auto;
    padding: 2rem 0;
  }
`

const ProgramInnerFlex = styled.div`
  width: 90%;
  padding: 6rem 0;
  align-self: center;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  height: 100%;
  margin: 0 auto;
  position: relative;
  
  ${({ index }) => index % 2 === 0 ? css`
    flex-direction: row-reverse;
  ` : css`
    flex-direction: row;
  `}

  @media (max-width: ${breakpoints.xl}px) {
    justify-content: space-between;
  }
  @media (max-width: ${breakpoints.l}px) {
    width: 90%;
    margin: 0 auto;
  }
  @media (max-width: ${breakpoints.m}px) {
    flex-direction: column-reverse;
    padding: 2rem 0;
  }
`

const ProgramImage = styled(motion.div)`
  z-index: 2;
  position: relative;
  overflow: hidden;
  margin: 0.5rem;
  height: 100%;
  flex-basis: 35%;
  @media (max-width: ${breakpoints.xxl}px) {
    margin: 1rem;
    align-self: center;
  }
  @media (max-width: ${breakpoints.xl}px) {
    flex-basis: 40%;
  }
  @media (max-width: ${breakpoints.m}px) {
    margin: 2rem 0;
    flex-basis: 100%;
    width: 100%;
  }
`

const ProgramText = styled(motion.div)`
  max-width: 45%;
  padding-top: 1rem;
  position: relative;
  z-index: 2;
  align-self: center;

  h2 {
    font-family: "Reckless-light" !important;
    padding-bottom: 1rem;
    white-space: nowrap;
  }

  h6 {
    max-width: 85%;
  }

  @media (max-width: ${breakpoints.xxl}px) {
    h2 {
      font-size: 50px;
      line-height: 58px;
    }
  }
  @media (max-width: ${breakpoints.xl}px) {
    max-width: 50%;
    padding-top: 0rem;
    /* margin: 0 2rem; */
    margin-left: 2rem;

    h2 {
      font-size: 40px;
      line-height: 130%;
    }
    h6 {
      max-width: 90%;
    }
  }

  @media (max-width: ${breakpoints.l}px) {
    h2 {
      white-space: normal;
    }
  }
  @media (max-width: ${breakpoints.m}px) {
    max-width: 100%;
    padding-top: 0rem;
    margin: 0;

    h2 {
      font-size: 45px;
    }

    h6 {
      max-width: 90%;
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    h2 {
      font-size: 36px;
    }
    h6 {
      max-width: 100%;
    }
  }
`

const ProgramLink = styled(Link)`
  color: black;
  text-decoration: none;
`

const LinkWrapper = styled(motion.div)`
  display: flex;
  align-items: baseline;
  font-family: "matter-regular";

  
  p {
    padding-right: 0.75rem;
    padding-top: 1rem;
    font-family: "Matter-regular";
    font-size: 19px;
    transition: var(--hover-transition);
  }
  
  svg {
    transition: 0.2s all cubic-bezier(0.34, 1.56, 0.64, 1);
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

  @media (max-width: ${breakpoints.m}px) {
    p {
      font-size: 17px;
    }
  }
`

const SvgWrapper = styled.div`
  position: absolute;
  top: -85%;
  left: 50px;
  z-index: 1;
  filter: opacity(0.5);
  :nth-child(2) {
    right: 50px;
    left: auto;
    transform: rotate(360deg);
  }
  @media (max-width: ${breakpoints.m}px) {
    scale: 0.85;
    left: -15%;
    top: -20%;
    :nth-child(2) {
      right: -5%;
      left: auto;
      top: -10%;
      transform: rotate(360deg);
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    left: -50%;
    top: -50%;
    scale: 0.75;

    :nth-child(2) {
      right: -50%;
      top: -10%;
      left: auto;
      transform: rotate(360deg);
    }
  }
`

const ImageWrapper = styled(motion.div)`
  position: relative;
  .program-image {
    border-radius: 20px;
    aspect-ratio: 587/370;
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  @media (max-width: ${breakpoints.m}px) {
    .program-image{
      border-radius: 10px;
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    .program-image {
      border-radius: 5px !important;
    }
  }
`

const ComingSoonFallback = styled.div`
  padding-top: 1rem;
  display: flex;
  align-items: baseline;
  font-family: "Matter-regular";
  
  p {
    line-height: 100%;
  }
  p,
  svg {
    filter: opacity(0.4);
    color: black;
  }

  svg {
    margin-right: 0.5rem;
    transform: translateY(0.1rem);
  }

  p {
    margin: 0;
    padding-bottom: 0;
    padding-right: 0.75rem;
    padding-top: 1rem;
    font-family: "Matter-regular";
    font-size: 19px;
    transition: var(--hover-transition);
  }

  @media (max-width: ${breakpoints.xl}px) {
    p {
      padding-top: 0;
      padding-bottom: 0;
      margin-bottom: 1rem;
    }
  }
  @media (max-width: ${breakpoints.m}px) {
    p {
      font-size: 17px;
    }
  }
`


const CertificateLink = styled(Link)`
  color: black;
  text-decoration: none;
  cursor: pointer;

  padding-top: 1rem;
  display: flex;
  align-items: baseline;
  font-family: "Matter-regular";
  
  svg {
    transition: 0.2s all cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  
  p {
    padding-right: 0.75rem;
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
      padding-top: 0;
      margin-bottom: 1rem;
    }
  }
  @media (max-width: ${breakpoints.m}px) {
    p {
      font-size: 17px;
    }
  }
`


const CertificatePrograms = styled.section`
  background-color: var(--color-lightestbeige);
  padding-top: 10rem;

  .cert-info {
    font-size: 22px;
    line-height: 34px;
    margin: 0 auto;
    padding-top: 1rem;
    padding-bottom: 10rem;
    width: 80%;
    color: #00000060;

    strong {
      letter-spacing: 0rem !important;
      color: #00000090;
    }
  }

  @media (max-width: 1600px) {
    .cert-info {
      width: 85%;
    }
  }

  @media (max-width: ${breakpoints.xl}px) {
    padding-top: 7rem 0;
    .cert-info {
      font-size: 18px;
      line-height: 150%;
      width: 90%;
      padding-bottom: 7rem;
      strong {
        font-size: 18px;
        line-height: 150%;
      }
    }
  }
  @media (max-width: ${breakpoints.l}px) {
    .cert-info {
      width: 95%;
      font-size: 16px;
      strong {
        font-size: 16px;
      }
    }
  }

  @media (max-width: ${breakpoints.m}px) {
    padding-top: 5rem;

    .cert-info {
      width: 90%;
      padding-bottom: 5rem;
    }
    svg {
      width: 30px;
    }
  }
`

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  h1 {
    padding-top: 2rem;
    padding-bottom: 5rem;
  }
  svg {
    fill: black;
    filter: brightness(0);
    /* filter: invert(1); */
  }

  @media (max-width: ${breakpoints.m}px) {
    h1 {
      padding-top: 0rem;
    }
  }
`

const Cards = styled(motion.div)`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-bottom: 5rem;

  @media (max-width: 1600px) {
    width: 85%;
  }
  @media (max-width: ${breakpoints.xl}px) {
    width: 90%;
  }
  @media (max-width: ${breakpoints.l}px) {
    /* width: 95%; */
  }

  @media (max-width: ${breakpoints.l}px) {
    flex-direction: column;
    padding-bottom: 0rem;
    width: 70%;
  }
  @media (max-width: ${breakpoints.s}px) {
    width: 90%;
  }
`

const Card = styled(motion.div)`
  overflow: hidden;
  width: 32%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  z-index: 3;
  border-radius: 20px;
  border: 1px solid black;
  background-color: white;

  @media (max-width: ${breakpoints.l}px) {
    width: 100%;
    margin-bottom: 2.5rem;
  }
  @media (max-width: ${breakpoints.m}px) {
    border-radius: 10px;
  }
`

const CardText = styled.div`
  padding: 2.5rem 2rem;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h4 {
    width: 90%;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  @media (max-width: ${breakpoints.xxl}px) {
    h4 {
      font-size: 26px;
      line-height: 130%;
    }
  }

  @media (max-width: ${breakpoints.xl}px) {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    h4 {
      font-size: 23px;
      margin-bottom: 1rem;
    }
  }
  @media (max-width: ${breakpoints.l}px) {
    padding: 3.5rem 1.5rem;
    h4 {
      font-size: 30px;
    }
  }
  @media (max-width: ${breakpoints.m}px) {
    padding: 1.5rem;
    h4 {
      font-size: 25px;
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    h4 {
      font-size: 24px;
    }
  }
`

const CardImage = styled.div`
  border-top: 1px solid black;
  overflow: hidden;
  position: relative;
  z-index: 2;
  height: 50%;

  .cert-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: ${breakpoints.m}px) {
    height: 250px;
  }
`
