'use client'
import React, { useState } from "react"
import styled from "styled-components"
import { AnimatePresence, motion } from "framer-motion"
import breakpoints from "../breakpoints"

export const Faq = ({ index, question, answer }) => {
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
  return (
    <>
      <Header
        key={index + "item"}
        onClick={() => setExpand(!expand)}
        animate={{
          backgroundColor: expand
            ? "var(--color-lightestgreen)"
            : "var(--color-lightestbeige)",
        }}
        whileHover={{ filter: "brightness(.95)" }}
      >
        <h5>{question}</h5>
        <Svg animate={{ rotate: expand ? 45 : 0 }}>
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 16H32" stroke="white" />
            <path d="M16 0L16 32" stroke="white" />
          </svg>
        </Svg>
      </Header>
      <AnimatePresence exitBeforeEnter>
        {expand && (
          <Answer
            key={index}
            variants={expandAnimation}
            initial="hidden"
            animate={expand ? "visible" : "hidden"}
            exit="hidden"
          >
            <motion.p variants={children}>{answer}</motion.p>
          </Answer>
        )}
      </AnimatePresence>
    </>
  )
}

const Header = styled(motion.div)`
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2.5rem;

  h5 {
    max-width: 90%;
  }

  :hover {
    cursor: pointer;
    background-color: var(--color-lightestgreen);
  }

  @media (max-width: ${breakpoints.xl}px) {
    padding: 1rem 1.5rem;
  }
  @media (max-width: ${breakpoints.m}px) {
    padding: 1rem;

    h5 {
      max-width: 85%;
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    h5 {
      font-size: 17px;
      line-height: 120%;
    }
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

const Answer = styled(motion.div)`
  border-bottom: 1px solid black;
  overflow-y: hidden;
  background-color: white;
  p {
    font-family: "Matter-light";
    width: 80%;
    margin: 0 auto;
    padding: 2.5rem;
  }
  h6 {
    padding: 2.5rem;
  }
  @media (max-width: ${breakpoints.m}px) {
    padding: 0.25rem;
    p {
      width: 95%;
      padding: 1rem;
    }
    h6 {
      padding: 1.5rem 2rem;
      :last-child {
        text-align: center;
      }
    }
  }
`
