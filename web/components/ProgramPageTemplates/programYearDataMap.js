import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import breakpoints from "../breakpoints"
import styled from "styled-components"

// this needs to be its own component because we need the dropdown state to operate independently for each dropdown
// if this were in ProgramTableDataMap.js, one clicked dropdown would expand all of them because the state of each dropdown is not locally scoped.

const ProgramYearDataMap = ({ term, index }) => {
  // {term} is shorthand for {programOption.year} in ProgramTableDataMap.js

  const expandAnimation = {
    visible: {
      height: "auto",
      transition: {
        ease: "easeIn",
      },
    },
    hidden: {
      height: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  }

  const children = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  }
  const [expand, setExpand] = useState(false)

  // Add up total number of credits per course within each dropdown
  const courseCreditsSum = term.courses.reduce(
    (sum, course) => sum + course.credits,
    0
  )



  return (
    <>
      <Header
        onClick={() => setExpand(!expand)}
        animate={{
          backgroundColor: expand
            ? "var(--color-lightestgreen)"
            : "var(--color-beige)",
        }}
        whileHover={{ filter: "brightness(.95)" }}
        key={index}
      >
        <h5>{term.label}</h5>
        <Svg animate={{ rotate: expand ? 45 : 0 }}>
          <svg
            width="35"
            height="35"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 16H32" stroke="white" />
            <path d="M16 0L16 32" stroke="white" />
          </svg>
        </Svg>
      </Header>

      <AnimatePresence mode="wait">
        {expand && (
          <Term
            key={index}
            variants={expandAnimation}
            initial="hidden"
            animate={expand ? "visible" : "hidden"}
            exit="hidden"
          >
            <TermHeader variants={children}>
              <h6>Code</h6>
              <h6>Course title</h6>
              <h6>Type</h6>
              <h6>Credits</h6>
            </TermHeader>
            {term.courses.map((course, i) => {
              return (
                <TermInfo key={i} variants={children}>
                  <p>{course.code}</p>
                  <p>{course.title}</p>
                  <p>{course.type}</p>
                  <p>
                    {course.credits}
                    {course.credits > 1 ? " credits" : " credit"}
                  </p>
                </TermInfo>
              )
            })}
            {/* Only show this additional info if a given course has Eastern Bodywork courses */}
            {term.hasEasternBodywork === true && (
              <AdditionalInfo variants={expandAnimation}>
                {" "}
                * Eastern Bodywork I and Eastern Bodywork II is completed by
                taking two of the following courses which have rotating
                availability:
                <ul>
                  <li>EMA-4011 Eastern Bodywork: Zen Shiatsu I</li>
                  <li>EMA-4012 Eastern Bodywork: Zen Shiatsu II</li>
                  <li>EMA-4021 Eastern Bodywork: Acupressure I</li>
                  <li>EMA-4022 Eastern Bodywork: Acupressure II</li>
                  <li>EMA-4032 Eastern Bodywork: Tui Na II</li>
                </ul>
              </AdditionalInfo>
            )}
            {term.hasCoursesOnlyAvailableInUSA === true && (
              <AdditionalInfo variants={expandAnimation}>
                {" "}
                ** Program only available in the US.
              </AdditionalInfo>
            )}
            <motion.h6 variants={expandAnimation}>
              Total Credits: {courseCreditsSum}
            </motion.h6>
          </Term>
        )}
      </AnimatePresence>
    </>
  )
}

export default ProgramYearDataMap

const Header = styled(motion.div)`
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2.5rem;

  :hover {
    cursor: pointer;
    background-color: var(--color-lightestgreen);
  }

  svg {
    filter: invert(1);
  }

  @media (max-width: ${breakpoints.xl}px) {
    padding: 1rem 1.5rem;
  }
  @media (max-width: ${breakpoints.m}px) {
    padding: 1rem;
  }
`
const Svg = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;

  svg {
    width: 35px;
    height: 35px;
    align-self: center;
    justify-self: center;
    margin: 0 auto;
    // make svg black
    filter: invert(1);
  }

  @media (max-width: ${breakpoints.m}px) {
    width: 35px;
    height: 35px;
    svg {
      width: 35px;
      height: 35px;
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    width: 25px;
    height: 25px;
    svg {
      width: 25px;
      height: 25px;
    }
  }
`

const Term = styled(motion.div)`
  background-color: white;
  border-bottom: 1px solid black;
  overflow-y: hidden;
  h6 {
    padding: 2.5rem;
  }
  @media (max-width: ${breakpoints.m}px) {
    padding: 0.25rem;

    h6 {
      padding: 1.5rem 2rem;
      :last-child {
        /* text-align: center; */
        /* border: 1px solid red; */
      }
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    h6 {
      padding: 1.5rem;
    }
  }
`

const AdditionalInfo = styled(motion.small)`
  display: block;
  padding: 2.5rem;
  padding-bottom: 0;
  padding-top: 3rem;
  color: #999999;
  font-size: 16px;
  font-family: "Matter-regular";
  ul {
    margin: 0;
    padding-top: 1rem;
    padding-left: 2rem;
  }
  li {
    font-size: 16px;
    line-height: 120%;
  }

  @media (max-width: ${breakpoints.xl}px) {
    font-size: 14px;
    li {
      font-size: 14px;
    }
  }
  @media (max-width: ${breakpoints.l}px) {
    padding: 1.5rem;
    padding-bottom: 0;
  }
  @media (max-width: ${breakpoints.s}px) {
    font-size: 12px;
    ul {
      padding-left: 1.5rem;
    }
    li {
      line-height: 120%;
    }
  }
`

const TermInfo = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr 2fr 1fr;
  justify-items: space-between;
  margin: 0 auto;
  padding: 0rem 2.5rem;
  align-items: start;

  @media (max-width: ${breakpoints.l}px) {
    padding: 0rem 1.5rem;
  }

  @media (max-width: ${breakpoints.m}px) {
    padding: 0rem;
    grid-template-columns: 1fr 2fr 2fr 1fr;
    border-bottom: 1px dotted var(--color-salmon);

    p {
      padding: 0.5rem 0.25rem;
      font-size: 11px;
      line-height: 16px;
      padding-bottom: 1rem;
      align-self: start;

      :nth-child(3) {
        /* width: 90%; */
        /* border: 1px solid red; */
        margin: 0 auto;
        text-align: center;
      }
    }
  }
`

const TermHeader = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 3fr 2fr 1fr;
  justify-items: space-between;
  background-color: white;
  margin: 0 auto;
  padding: 0rem 2.5rem;
  text-transform: uppercase;

  h6 {
    padding: 2.5rem 0;
    padding-bottom: 1rem;
    color: var(--color-darkgreen);
  }

  @media (max-width: ${breakpoints.l}px) {
    padding: 0rem 1.5rem;
  }

  @media (max-width: ${breakpoints.m}px) {
    padding: 0rem;
    grid-template-columns: 1fr 2fr 2fr 1fr;

    h6 {
      padding: 0.5rem 0.25rem;
      font-size: 12px;
      line-height: 14px;
      padding-bottom: 1rem;
      letter-spacing: 0.02rem;
      align-self: center;
      :nth-child(3) {
        /* width: 90%; */
        margin: 0 auto;
        text-align: center;
      }
    }
  }
`
