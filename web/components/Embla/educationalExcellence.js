import React, { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import allExams from "../../src/images/AboutUs/Graphs/allexams.png"
import clinicalExams from "../../src/images/AboutUs/Graphs/clinicalexams.png"
import writtenExams from "../../src/images/AboutUs/Graphs/writtenexams.png"
import tcmpExams from "../../src/images/AboutUs/Graphs/tcmpexams.png"
import useEmblaCarousel from "embla-carousel-react"
import styled from 'styled-components'
import breakpoints from 'components/breakpoints'
import {motion} from 'framer-motion'

const EducationalExcellence = () => {
    // ---------- Initialize Embla Carousel ----------
  const [emblaRef, embla] = useEmblaCarousel({
    align: "center",
  })

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])

  const onSelect = useCallback(() => {
    if (!embla) return
    setPrevBtnEnabled(embla.canScrollPrev())
    setNextBtnEnabled(embla.canScrollNext())
  }, [embla])

  // ---------- Run configurations ----------
  useEffect(() => {
    if (!embla) return
    onSelect()
    embla.on("select", onSelect)
  }, [embla, onSelect])

  // ---------- Carousel buttons ----------

  const NextButton = ({ enabled, onClick }) => {
    return (
      <NextEmblaButton
        onClick={onClick}
        disabled={!enabled}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle r="24.5" transform="matrix(-1 0 0 1 25 25)" stroke="black" />
          <path d="M20 14L31 25L20 36" stroke="black" />
        </svg>
      </NextEmblaButton>
    )
  }

  const PrevButton = ({ enabled, onClick }) => {
    return (
      <PrevEmblaButton
        onClick={onClick}
        disabled={!enabled}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="25"
            cy="25"
            r="24.5"
            stroke="black"
            vectorEffect="non-scaling-size"
          />
          <path d="M30 14L19 25L30 36" stroke="black" />
        </svg>
      </PrevEmblaButton>
    )
  }


  return (
    <GraphSection>
        <GraphTop>
          <h1>
            Educational <br /> Excellence
          </h1>
          <h6>
            At Eight Branches, we pride ourselves on providing a comprehensive
            education that is tailored to help our passionate students pass the
            necessary exams and help them build a successful professional
            practice.
            <br />
            <br />
            Our students consistently outperform the Ontario average in terms of
            pass rates on the Pan-Canadian examinations, the only objective
            measure which is used to compare schools.
          </h6>
        </GraphTop>
        <Embla>
          <EmblaViewport ref={emblaRef}>
            <EmblaContainer>
              <EmblaSlide>
                <Image
                  src={allExams}
                  alt="Graph depicting how Eight Branches consistently scores higher in written exam success rates compared to other Ontario colleges."
                  placeholder="none"
                  quality={100}
                  width={980}
                  height={597}
                  className="slide-image"
                />
              </EmblaSlide>s
              <EmblaSlide>
                <Image
                  src={clinicalExams}
                  alt="Graph depicting how Eight Branches consistently scores higher in clinical exam success rates compared to other Ontario colleges."
                  placeholder="none"
                  quality={100}
                  width={980}
                  height={597}
                  className="slide-image"
                />
              </EmblaSlide>
              <EmblaSlide>
                <Image
                  src={writtenExams}
                  alt="Graph depicting how Eight Branches consistently scores higher in written exam success rates compared to other Ontario colleges."
                  placeholder="none"
                  quality={100}
                  width={980}
                  height={597}
                  className="slide-image"
                />
              </EmblaSlide>
              <EmblaSlide>
                <Image
                  src={tcmpExams}
                  alt="Graph depicting how Eight Branches consistently scores higher in traditional chinese medicine practitioner exam success rates compared to other Ontario colleges."
                  placeholder="none"
                  quality={100}
                  width={980}
                  height={597}
                  className="slide-image"
                />
              </EmblaSlide>
            </EmblaContainer>
          </EmblaViewport>
          <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
          <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
        </Embla>
      </GraphSection>
  )
}

export default EducationalExcellence


const GraphSection = styled.section`
  background-color: var(--color-lightestbeige);
  padding-top: 4rem;
  padding-bottom: 4rem;
`

const GraphTop = styled.section`
  width: 90%;
  margin: 0 auto;
  border-top: 1px solid #c4c4c4;
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
  padding-bottom: 5rem;

  h1 {
    padding-right: 3rem;
  }

  h6 {
    width: 55%;
    align-self: flex-end;
  }

  @media (max-width: ${breakpoints.m}px) {
    flex-direction: column;
    padding-bottom: 2rem;
    h1 {
      padding-right: 0rem;
    }
    h6 {
      padding-top: 2rem;
      align-self: flex-start;
      width: 100%;
    }
  }
`

const Embla = styled.div`
  width: 80%;
  margin: 0 auto;
  position: relative;
  padding: 5rem 0;

  @media (max-width: ${breakpoints.xl}px) {
    width: 70%;
  }
  @media (max-width: ${breakpoints.m}px) {
    width: 95%;
  }
`

const EmblaViewport = styled.div`
  width: 100%;
  overflow: hidden;
`

const EmblaContainer = styled.div`
  display: flex;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -webkit-tap-highlight-color: transparent;
`

const EmblaSlide = styled.div`
  min-width: 100%;
  min-height: 100%;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  .slide-image {
    width: min(100%, 980px);
    height: 100%;
  }
`

const NextEmblaButton = styled(motion.button)`
  right: -5%;
  border: none;
  background: none;
  cursor: pointer;
  touch-action: manipulation;
  transition: opacity 0.5s ease;
  opacity: 1;

  position: absolute;
  z-index: 1;
  top: 37.5%;

  :disabled {
    opacity: 0.2;
    cursor: default;
  }
  @media (max-width: ${breakpoints.xl}px) {
    right: -15%;
  }

  @media (max-width: ${breakpoints.m}px) {
    width: 45px;
    height: 45px;
    top: 90%;
    right: 25%;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    top: 85%;
  }
`

const PrevEmblaButton = styled(motion.button)`
  left: -5%;
  border: none;
  background: none;
  cursor: pointer;
  touch-action: manipulation;
  transition: opacity 0.5s ease;
  opacity: 1;

  position: absolute;
  z-index: 1;
  top: 37.5%;

  :disabled {
    opacity: 0.2;
    cursor: default;
  }

  @media (max-width: ${breakpoints.xl}px) {
    left: -15%;
  }
  @media (max-width: ${breakpoints.m}px) {
    width: 45px;
    height: 45px;
    top: 90%;
    left: 25%;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    top: 85%;
  }
`