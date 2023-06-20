'use client'
import breakpoints from "../breakpoints"
import styled from "styled-components"
import { motion } from "framer-motion"

export const LandingSection = styled.span`
  height: 100vh;
  display: flex;
  position: relative;
  align-items: center;
  color: black;
  background-color: var(--color-sandbeige);
  svg {
    color: black;
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

export const LeftSection = styled.div`
  position: relative;
  width: 50%;
  height: 100%;

  .banner-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
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

export const RightSection = styled.div`
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

export const LandingTextWrapper = styled(motion.div)`
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
  h4 {
    color: black;
    width: 60%;
    margin-bottom: 3rem;
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
    h4 {
      margin-bottom: 5rem;
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

export const HideImage = styled(motion.div)`
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

export const AboutTheProgram = styled.section`
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin: 0 auto;
  padding: 5rem 0;

  h6 {
    padding: 1rem 0;
  }

  @media (max-width: ${breakpoints.xl}px) {
    justify-content: space-between;
    padding-bottom: 4rem;
    width: 90%;
  }
  @media (max-width: ${breakpoints.l}px) {
    flex-direction: column;
  }
  @media (max-width: ${breakpoints.s}px) {
    padding: 2.5rem 0;
    padding-bottom: 4rem;
  }
`

export const AboutProgramBG = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: var(--color-lightestbeige);
`

export const AboutLeft = styled.div`
  flex-basis: 40%;
  padding: 0rem;
  h3 {
    font-size: 28px;
    line-height: 150%;
  }
  @media (max-width: ${breakpoints.xl}px) {
    flex-basis: 55%;
    h3 {
      margin-bottom: 2.5rem;
    }
  }
  @media (max-width: ${breakpoints.l}px) {
    flex-basis: 100%;
    h6 {
      color: var(--color-darkgreen);
    }
  }

  @media (max-width: ${breakpoints.s}px) {
    h3 {
      font-size: 18px;
      font-family: "Matter-regular";
    }
  }
`
export const AboutRight = styled.div`
  flex-basis: 35%;
  margin-left: 10rem;
  p {
    font-size: 18px;
  }
  @media (max-width: ${breakpoints.xl}px) {
    margin-left: 0rem;
  }
  @media (max-width: ${breakpoints.l}px) {
    h6 {
      color: var(--color-darkgreen);
    }
  }
`

export const DividingLine = styled.div`
  width: 100%;
  border-top: 1px solid #cbcbcb;
  margin-top: 2.5rem;
  padding-bottom: 2.5rem;
`

export const Banner = styled.div`
  background-color: var(--color-darkgreen);
  padding: 3rem 0;

  @media (max-width: ${breakpoints.xl}px) {
    padding: 1rem 0;
  }
`

export const BannerInner = styled.div`
  width: 90%;
  text-align: center;
  margin: 0 auto;
  border-top: 2px solid var(--color-beige);
  border-bottom: 2px solid var(--color-beige);
  color: var(--color-beige);

  h1 {
    padding: 7rem;
  }
  @media (max-width: ${breakpoints.xl}px) {
    h1 {
      padding: 5rem 0rem;
    }
  }
`

export const TableSection = styled.section`
  background-color: var(--color-lightestbeige);
  padding-bottom: 10rem;

  @media (max-width: ${breakpoints.xl}px) {
    padding-bottom: 5rem;
  }
`
