'use client'
import React from "react"
import styled from "styled-components"
import StampLogo from "../../svg/stamplogo"
import breakpoints from "../../components/breakpoints"
import { ApplyNow } from "../generalcomponents"
import { motion } from "framer-motion"
import { ProgramTableDataMap } from "./programTableDataMap"
import { useInView } from "react-intersection-observer"
import * as styles from "./styles.js"

const ProgramLayout = ({ programData }) => {
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

  // ---------- INTERSECTION OBSERVER LOGIC ----------
  const [HideImageRef, HideImageInView] = useInView({
    root: null,
    threshold: 0.7,
    triggerOnce: true,
  })

  const ProgramDescription = programData.programDescription

  return (
    <>
      <styles.LandingSection>
        <styles.LeftSection ref={HideImageRef}>
          <styles.HideImage
            animate={HideImageInView ? "hidden" : "visible"}
            variants={hideImage}
            initial="visible"
            exit="hidden"
          />
          {programData.image}
        </styles.LeftSection>
        <styles.RightSection>
          <styles.LandingTextWrapper
            variants={FadeIn}
            initial="hidden"
            animate="visible"
          >
            <StampLogo fillColor="black" />
            <motion.h1 variants={FadeIn}>{programData.programName}</motion.h1>
            <motion.h4 variants={FadeIn}>{programData.programType}</motion.h4>
          </styles.LandingTextWrapper>
        </styles.RightSection>
      </styles.LandingSection>
      <styles.AboutProgramBG>
        <styles.AboutTheProgram>
          <styles.AboutLeft>
            <h6>About the Program</h6>
            <h3>{programData.about}</h3>
          </styles.AboutLeft>
          <styles.AboutRight>
            <div>
              <h6>{ProgramDescription.optionOne.title}</h6>
              <p>
                {ProgramDescription.optionOne.hours}
                <br />
                {ProgramDescription.optionOne.description}
              </p>
              <styles.DividingLine />
            </div>
            {ProgramDescription.optionTwo && (
              <div>
                <h6>{ProgramDescription.optionTwo.title}</h6>
                <p>
                  {ProgramDescription.optionTwo.hours}
                  <br />
                  {ProgramDescription.optionTwo.description}
                </p>
                <styles.DividingLine />
              </div>
            )}
            {ProgramDescription.additionalInfo && (
              <div>
                <p>{ProgramDescription.additionalInfo}</p>
              </div>
            )}
          </styles.AboutRight>
        </styles.AboutTheProgram>
      </styles.AboutProgramBG>
      {programData.courseData.map(programOption => {
        return (
          <span key={programOption.label}>
            <styles.Banner>
              <styles.BannerInner>
                <h1>{programOption.label}</h1>
              </styles.BannerInner>
            </styles.Banner>
            <styles.TableSection>
              {/* this is where the data gets fed into for the dropdowns */}
              {/* ------------------------------------------------------ */}
              <ProgramTableDataMap programOption={programOption} />
              {/* ------------------------------------------------------ */}
              {/* this is where the data gets fed into for the dropdowns */}
            </styles.TableSection>
          </span>
        )
      })}
      <ApplyNow />
    </>
  )
}

export default ProgramLayout

// const LandingSection = styled.span`
//   height: 100vh;
//   display: flex;
//   position: relative;
//   align-items: center;
//   color: black;
//   background-color: var(--color-sandbeige);
//   svg {
//     color: black;
//   }

//   @media (max-width: ${breakpoints.l}px) {
//     background-color: var(--color-lightestbeige);
//     flex-direction: column-reverse;
//     height: 125vh;
//   }
//   @media (max-width: ${breakpoints.m}px) {
//     height: auto;
//   }
// `

// const LeftSection = styled.div`
//   position: relative;
//   width: 50%;
//   height: 100%;

//   @media (max-width: ${breakpoints.l}px) {
//     width: 100%;
//     height: 40%;
//   }
//   @media (max-width: ${breakpoints.m}px) {
//     height: 40vh;
//   }
//   @media (max-width: ${breakpoints.s}px) {
//     height: 250px;
//   }
// `

// const RightSection = styled.div`
//   height: 100%;
//   width: 50vw;
//   position: relative;
//   z-index: 10;
//   background-color: var(--color-sandbeige);

//   @media (max-width: ${breakpoints.l}px) {
//     background-color: var(--color-lightestbeige);
//     width: 100vw;
//     margin-top: 10vh;
//     height: 60%;
//     svg {
//       width: 45px;
//     }
//   }

//   @media (max-width: ${breakpoints.m}px) {
//     height: auto;
//     svg {
//       width: 40px;
//     }
//   }
//   @media (max-width: ${breakpoints.s}px) {
//     margin-top: 5vh;
//     padding-top: 10vh;
//   }
// `

// const LandingTextWrapper = styled(motion.div)`
//   height: 100%;
//   text-align: center;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;

//   h1,
//   h6,
//   svg {
//     color: var(--color-black);
//   }
//   h4 {
//     color: black;
//     width: 60%;
//     margin-bottom: 3rem;
//   }

//   h1 {
//     margin-top: 2rem;
//     margin-bottom: 2rem;
//     width: 60%;
//   }

//   @media (max-width: 1600px) {
//     h1 {
//       font-size: 60px;
//       line-height: 130%;
//     }
//   }
//   @media (max-width: ${breakpoints.xxl}px) {
//     h1 {
//       font-size: 50px;
//       line-height: 58px;
//     }
//   }
//   @media (max-width: ${breakpoints.xl}px) {
//     h1 {
//       width: 55%;
//     }
//   }
//   @media (max-width: ${breakpoints.l}px) {
//     h1 {
//       font-size: 45px;
//       line-height: 50px;
//       margin-top: 0rem;
//     }
//   }
//   @media (max-width: ${breakpoints.m}px) {
//     h1 {
//       font-size: 45px;
//       line-height: 50px;
//       margin-bottom: 1rem;
//       width: 70%;
//     }
//     h4 {
//       margin-bottom: 5rem;
//     }
//   }
//   @media (max-width: ${breakpoints.s}px) {
//     h1 {
//       font-size: 36px;
//       line-height: 46px;
//       width: 90%;
//     }
//   }
// `

// const HideImage = styled(motion.div)`
//   position: absolute;
//   z-index: 2;
//   width: 100%;
//   height: 100%;
//   top: 0;
//   left: 0;
//   background-color: var(--color-sandbeige);

//   @media (max-width: ${breakpoints.l}px) {
//     background-color: var(--color-lightestbeige);
//   }
// `

// const AboutTheProgram = styled.section`
//   display: flex;
//   justify-content: center;
//   align-items: baseline;
//   margin: 0 auto;
//   padding: 5rem 0;

//   h6 {
//     padding: 1rem 0;
//   }

//   @media (max-width: ${breakpoints.xl}px) {
//     justify-content: space-between;
//     padding-bottom: 4rem;
//     width: 90%;
//   }
//   @media (max-width: ${breakpoints.l}px) {
//     flex-direction: column;
//   }
//   @media (max-width: ${breakpoints.s}px) {
//     padding: 2.5rem 0;
//     padding-bottom: 4rem;
//   }
// `

// const AboutProgramBG = styled.div`
//   width: 100%;
//   margin: 0 auto;
//   background-color: var(--color-lightestbeige);
// `

// const AboutLeft = styled.div`
//   flex-basis: 40%;
//   padding: 0rem;
//   h3 {
//     font-size: 28px;
//     line-height: 150%;
//   }
//   @media (max-width: ${breakpoints.xl}px) {
//     flex-basis: 55%;
//     h3 {
//       margin-bottom: 2.5rem;
//     }
//   }
//   @media (max-width: ${breakpoints.l}px) {
//     flex-basis: 100%;
//     h6 {
//       color: var(--color-darkgreen);
//     }
//   }

//   @media (max-width: ${breakpoints.s}px) {
//     h3 {
//       font-size: 18px;
//       font-family: "Matter-regular";
//     }
//   }
// `
// const AboutRight = styled.div`
//   flex-basis: 35%;
//   margin-left: 10rem;
//   p {
//     font-size: 18px;
//   }
//   @media (max-width: ${breakpoints.xl}px) {
//     margin-left: 0rem;
//   }
//   @media (max-width: ${breakpoints.l}px) {
//     h6 {
//       color: var(--color-darkgreen);
//     }
//   }
// `

// const DividingLine = styled.div`
//   width: 100%;
//   border-top: 1px solid #cbcbcb;
//   margin-top: 2.5rem;
//   padding-bottom: 2.5rem;
// `

// const Banner = styled.div`
//   background-color: var(--color-darkgreen);
//   padding: 3rem 0;

//   @media (max-width: ${breakpoints.xl}px) {
//     padding: 1rem 0;
//   }
// `

// const BannerInner = styled.div`
//   width: 90%;
//   text-align: center;
//   margin: 0 auto;
//   border-top: 2px solid var(--color-beige);
//   border-bottom: 2px solid var(--color-beige);
//   color: var(--color-beige);

//   h1 {
//     padding: 7rem;
//   }
//   @media (max-width: ${breakpoints.xl}px) {
//     h1 {
//       padding: 5rem 0rem;
//     }
//   }
// `

// const TableSection = styled.section`
//   background-color: var(--color-lightestbeige);
//   padding-bottom: 10rem;

//   @media (max-width: ${breakpoints.xl}px) {
//     padding-bottom: 5rem;
//   }
// `
