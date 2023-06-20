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