import React from 'react'
import MarkdownContent from "utils/markdownContent"
import { GrClose } from "react-icons/gr"
import styled from 'styled-components'
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import breakpoints from '../breakpoints'
import StampLogo from "../../svg/stamplogo"

const FacultyModal = ({ data, onClose, isModalOpen }) => {
  
  const title = data.title;
  const role = data.degree;
  const bio = data.bio;
  const imageSrc = data.imageUrl;
  const lqip = data.lqip;

    const fadeIn = {
    hidden: {
      y: 75,
      opacity: 0,
      transition: {
        duration: 0.25,
      },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.15,
        duration: 0.25,
      },
    },
  }
  const greybgfadein = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.25,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <AnimatePresence>
      {isModalOpen && (
        <GreyBg
          onClick={onClose}
          variants={greybgfadein}
          initial="hidden"
          animate={isModalOpen ? "visible" : "hidden"}
          exit="hidden"
        >
          <Wrapper>
            <MobileCloseButton>
              <p>Close</p>
              <GrClose
                size={25}
                style={{ color: "white" }}
                onClick={onClose}
              />
            </MobileCloseButton>
            <Modal
              variants={fadeIn}
              initial="hidden"
              animate={isModalOpen ? "visible" : "hidden"}
              exit="hidden"
            >
              <ModalImage>
                {imageSrc ? (
                  <Image
                    className="modal-image"
                    src={imageSrc} alt={title} width={790} height={580} placeholder='blur'
                    style={{objectFit: "cover"}}
                    blurDataURL={lqip} />
                ) : (
                  <ModalFallback>
                    <StampLogo />
                  </ModalFallback>
                )}
              </ModalImage>
              <ModalText>
                <p>{role}</p>
                <h3>{title}</h3>
                <MarkdownContent blocks={bio} />
                {/* {email && (
                  <GetInTouch href={`mailto:${email}`}>
                    Get in touch
                  </GetInTouch>
                )} */}
              </ModalText>
            </Modal>
          </Wrapper>
        </GreyBg>
      )}
    </AnimatePresence>
  )
}

export default FacultyModal

const GreyBg = styled(motion.div)`
  position: fixed;
  z-index: 99998;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #00000035;
  backdrop-filter: blur(10px);
`

const Wrapper = styled.div`
  padding-top: 10vh;
  /* overflow: scroll; */
  height: 95vh;
  position: relative;

  @media (max-width: ${breakpoints.l}px) {
    padding-bottom: 30vh;
    height: 100%;
    overflow: scroll;
  }
`

const Modal = styled(motion.div)`
  z-index: 99999;
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1.5rem;
  width: 85vw;
  height: 90%;
  max-width: 1600px;
  /* height: 70vh; */
  border-radius: 5px;
  border: 1px solid black;
  background-color: var(--color-sandbeige);
  cursor: default;
  /* pointer-events: none; */
  a {
    pointer-events: auto;
  }

  @media (max-width: ${breakpoints.l}px) {
    margin-bottom: 2.5rem;
    padding: 1rem;
    padding-bottom: 2.5rem;
    flex-direction: column;
    width: 93vw;
    max-width: 750px;
    height: auto;
    /* height: 75vh; */
    /* max-height: none; */
    /* overflow-y: scroll; */
  }
`

const ModalImage = styled.div`
  border-radius: 5px;
  align-self: center;
  position: relative;
  flex-basis: 50%;
  height: 100%;
  display: grid;
  place-items: center;

  .modal-image {
    width: 100%;
    /* height: 100%; */
    object-fit: cover;
    border: 1px solid black;
    border-radius: 5px;
  }
  @media (max-width: ${breakpoints.l}px) {
    flex-basis: unset;
    width: 100%;
    .modal-image {
      aspect-ratio: 790/580;
      width: 100%;
      height: auto;
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    .modal-image {
      width: 100%;
      aspect-ratio: 790/580;
      height: auto;
    }
  }
`
const ModalFallback = styled.div`
  min-height: 60vh;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 50%;
  border-radius: 5px;
  align-self: center;
  border: 1px solid black;

  @media (max-width: ${breakpoints.m}px) {
    min-height: auto;
    height: 350px;
  }
  @media (max-width: ${breakpoints.m}px) {
    min-width: 100%;
  }
  @media (max-width: ${breakpoints.s}px) {
    min-height: 100%;
    height: 200px;
    svg {
      transform: scale(0.6);
    }
  }
`
const ModalText = styled.div`
  overflow-y: scroll;
  flex-basis: 50%;
  padding-left: 2rem;
  padding-right: 5rem;
  pointer-events: auto;
  p {
    font-family: "Matter-light";
    padding-top: 1rem;
    font-size: 21px;
    line-height: 150%;
  }
  a {
    font-size: 21px;
    line-height: 130%;
    text-decoration: underline;
    color: var(--color-darkgreen);
    font-family: "Matter-light";
  }
  @media (max-width: ${breakpoints.xl}px) {
    a,
    p {
      font-size: 18px;
    }
  }
  @media (max-width: ${breakpoints.l}px) {
    flex-basis: 100%;
    margin-top: 1rem;
    padding-left: 0;
    padding-right: 0;
    overflow-y: unset;
    a,
    p {
      font-size: 16px;
    }
  }
`

const MobileCloseButton = styled.div`
  width: 100%;
  height: 10%;
  margin: 0 auto;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  filter: invert(1);
  cursor: pointer;
  svg {
    margin-bottom: 1rem;
    color: white !important;
  }
  p {
    margin-bottom: 1rem;
    padding-top: 0;
    padding-right: 0.25rem;
    :hover {
      text-decoration: underline;
    }
  }
`


// const GetInTouch = styled.a`
//   display: inline-block;
//   padding-top: 1rem;
//   font-size: 18px;
//   text-decoration: underline;
//   color: var(--color-orange) !important;
//   font-family: "Matter-light";
//   @media (max-width: ${breakpoints.m}px) {
//     display: flex;
//     justify-content: center;
//     padding-top: 2rem;
//     margin: 0 auto;
//   }
// `