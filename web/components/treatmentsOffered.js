import {useState} from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import breakpoints from './breakpoints'
import acupuncture from '../src/images/TeachingClinic/treatments/acupuncture-affordable-traditional-chinese-medicine-clinic.png'
import bodywork from '../src/images/TeachingClinic/treatments/bodywork-affordable-traditional-chinese-medicine-clinic.png'
import herbology from '../src/images/TeachingClinic/treatments/herbology-affordable-traditional-chinese-medicine-clinic.png'


const TreatmentsOffered = () => {
  // ---------- Info & data for the "Treatments Offered" section ----------
  const TreatmentsData = {
    acupunctureData: {
      id: 0,
      title: "Acupuncture",
      text: "Acupuncture involves the insertion of very thin needles through the skin at strategic points on the body. Please note that during your acupuncture treatment you may receive 15 minutes of other allied therapies such as moxibustion, cupping, guasha, or tuina depending on your treatment plan.",
      imagesrc: acupuncture,
      imagealt: "Acupuncture image",
    },
    herbsData: {
      id: 1,
      title: "TCM/Herbs",
      text: "This treatment in focused on Chinese Herb prescriptions. Please note that during the treatment you may receive 15 minutes of allied therapies such as acupuncture, moxibustion, cupping, guasha, and tuina depending on your treatment plan.",
      imagesrc: herbology,
      imagealt: "TCM/Herbs image",
    },
    bodyworkData: {
      id: 2,
      title: "Eastern Bodywork",
      text: "We provide Eastern bodywork based on concepts in Traditional Chinese Medicine (TCM) for balancing Qi and blood in the meridians.",
      imagesrc: bodywork,
      imagealt: "Bodywork/Shiatsu image",
    },
  }

  const [treatmentsImage, setTreatmentsImage] = useState({
    imagesrc: acupuncture,
    imagealt: "Acupuncture image.",
    key: "0",
  })

  // due to time constraints I had to create state for each option as creating component for each was too complicated (since the state also updates the image on hover)
  const [acupunctureExpanded, setAcupunctureExpanded] = useState(false)
  const [herbsExpanded, setHerbsExpanded] = useState(false)
  const [bodyworkExpanded, setBodyworkExpanded] = useState(false)

  const handleAcupunctureClick = () => (
    setAcupunctureExpanded(!acupunctureExpanded),
    setHerbsExpanded(false),
    setBodyworkExpanded(false),
    setTreatmentsImage({
      imagesrc: TreatmentsData.acupunctureData.imagesrc,
      imagealt: TreatmentsData.acupunctureData.imagealt,
      key: TreatmentsData.acupunctureData.id,
    })
  )
  const handleHerbsClick = () => (
    setHerbsExpanded(!herbsExpanded),
    setAcupunctureExpanded(false),
    setBodyworkExpanded(false),
    setTreatmentsImage({
      imagesrc: TreatmentsData.herbsData.imagesrc,
      imagealt: TreatmentsData.herbsData.imagealt,
      key: TreatmentsData.herbsData.id,
    })
  )

  const handleBodyworkClick = () => (
    setBodyworkExpanded(!bodyworkExpanded),
    setHerbsExpanded(false),
    setAcupunctureExpanded(false),
    setTreatmentsImage({
      imagesrc: TreatmentsData.bodyworkData.imagesrc,
      imagealt: TreatmentsData.bodyworkData.imagealt,
      key: TreatmentsData.bodyworkData.id,
    })
  )

 const dropdown = {
    expanded: {
      height: "auto",
      opacity: 1,
      transition: {
        ease: "easeOut",
      },
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        ease: "easeOut",
      },
    },
  }

  return (
      <Treatments>
        <TreatmentsMain>
          <TreatmentsHeaderMobile>Treatments Offered</TreatmentsHeaderMobile>
          <TreatmentsSelection>
            <TreatmentsHeader>Treatments Offered</TreatmentsHeader>
            <div>
              {/* ------------ ACUPUNCTURE TREATMENT ------------  */}
              <TreatmentsText
                onHoverStart={() =>
                  setTreatmentsImage({
                    imagesrc: TreatmentsData.acupunctureData.imagesrc,
                    imagealt: TreatmentsData.acupunctureData.imagealt,
                    key: TreatmentsData.acupunctureData.id,
                  })
                }
                onClick={handleAcupunctureClick}
              >
                <h2>{TreatmentsData.acupunctureData.title}</h2>
                <Svg animate={{ rotate: acupunctureExpanded ? 45 : 0 }}>
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
            </TreatmentsText>
            <AnimatePresence>
              {acupunctureExpanded && (
                <Dropdown
                  variants={dropdown}
                  initial="closed"
                  animate={acupunctureExpanded ? "expanded" : "closed"}
                  exit="closed"
                >
                  <h6>{TreatmentsData.acupunctureData.text}</h6>
                </Dropdown>
              )}
            </AnimatePresence>
            {/* ------------ TCM/HERBS TREATMENT ------------  */}
            <TreatmentsText
              onHoverStart={() =>
                setTreatmentsImage({
                  imagesrc: TreatmentsData.herbsData.imagesrc,
                  imagealt: TreatmentsData.herbsData.imagealt,
                  key: TreatmentsData.herbsData.id,
                })
              }
              onClick={handleHerbsClick}
            >
              <h2>{TreatmentsData.herbsData.title}</h2>
              <Svg animate={{ rotate: herbsExpanded ? 45 : 0 }}>
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
            </TreatmentsText>
            <AnimatePresence>
              {herbsExpanded && (
                <Dropdown
                  variants={dropdown}
                  initial="closed"
                  animate={herbsExpanded ? "expanded" : "closed"}
                  exit="closed"
                >
                  <h6>{TreatmentsData.herbsData.text}</h6>
                </Dropdown>
              )}
            </AnimatePresence>
            {/* ------------ BODYWORK TREATMENT ------------  */}
            <TreatmentsText
              onHoverStart={() =>
                setTreatmentsImage({
                  imagesrc: TreatmentsData.bodyworkData.imagesrc,
                  imagealt: TreatmentsData.bodyworkData.imagealt,
                  key: TreatmentsData.bodyworkData.id,
                })
              }
              onClick={handleBodyworkClick}
            >
              <h2>{TreatmentsData.bodyworkData.title}</h2>
              <Svg animate={{ rotate: bodyworkExpanded ? 45 : 0 }}>
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
            </TreatmentsText>
            <AnimatePresence>
              {bodyworkExpanded && (
                <Dropdown
                  variants={dropdown}
                  initial="closed"
                  animate={bodyworkExpanded ? "expanded" : "closed"}
                  exit="closed"
                >
                  <h6>{TreatmentsData.bodyworkData.text}</h6>
                </Dropdown>
              )}
            </AnimatePresence>
          </div>
        </TreatmentsSelection>
        <TreatmentsImage>
          <Image
            src={treatmentsImage.imagesrc}
            alt={treatmentsImage.imagealt}
            className="treatments-image"
            width={500}
            height={750}
            quality={90}
          />
        </TreatmentsImage>
      </TreatmentsMain>
    </Treatments>
  )
}

export default TreatmentsOffered

const Treatments = styled.div`
  background-color: var(--color-darkgreen);
  color: white;
  margin: 0 auto;
  text-align: center;
  width: 100%;
`

const TreatmentsHeader = styled.h1`
  padding-bottom: 5rem;
  text-align: left;
  width: 100%;
  margin: 0 auto;
  @media (max-width: ${breakpoints.l}px) {
    text-align: center;
  }
  @media (max-width: ${breakpoints.m}px) {
    display: none;
  }
`

const TreatmentsHeaderMobile = styled.h1`
  display: none;

  @media (max-width: ${breakpoints.m}px) {
    padding-top: 2.5rem;
    width: 60%;
    margin: 0 auto;
    display: inline;
    order: 1;
  }
`

const TreatmentsMain = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 80%;
  min-height: 100vh;
  margin: 0 auto;

  @media (max-width: 1560px) {
    width: 85%;
  }

  @media (max-width: ${breakpoints.xxl}px) {
    width: 90%;
  }

  @media (max-width: ${breakpoints.xl}px) {
    width: 95%;
  }
  @media (max-width: ${breakpoints.l}px) {
    width: 100%;
    flex-direction: column-reverse;
    padding-bottom: 5rem;
  }
`

const TreatmentsSelection = styled(motion.div)`
  height: 100%;
  flex-basis: 50%;
  margin: 5rem auto;
  padding-top: 15rem;
  padding-bottom: 25rem;
  cursor: pointer;

  @media (max-width: ${breakpoints.xl}px) {
    padding-right: 2rem;
  }

  @media (max-width: ${breakpoints.l}px) {
    padding-top: 2.5rem;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 5rem;
    margin: 0 auto;
    width: 90%;
  }
`

const TreatmentsText = styled(motion.div)`
  order: 2;
  border-bottom: 1px solid white;
  background-color: var(--color-darkgreen);
  text-align: left;
  display: flex;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;
  align-items: center;

  h2 {
    padding: 1.5rem;
  }

  :first-child {
    border-top: 1px solid white;
  }

  @media (max-width: ${breakpoints.l}px) {
    padding-left: 0;
    h2 {
      padding: 1.5rem 0rem;
    }
  }

  @media (max-width: ${breakpoints.s}px) {
    h2 {
      padding: 1rem 0;
      font-size: 25px;
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

const Dropdown = styled(motion.div)`
  border-bottom: 1px solid white;
  background-color: var(--color-darkgreen);
  h6 {
    padding: 3rem;
    text-align: left;
  }
  @media (max-width: ${breakpoints.m}px) {
    h6 {
      padding: 1.5rem;
    }
  }
`

const TreatmentsImage = styled.div`
  flex-basis: 35%;
  height: auto;
  align-self: flex-start;
  position: sticky;
  top: 6rem;
  margin: 6rem auto;
  
  .treatments-image {
    border-radius: 30px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: ${breakpoints.l}px) {
    position: relative;
    margin: 0 auto;
    top: unset;
    margin-top: 3rem;
    .treatments-image{ 
      max-height: 500px;
    }
  }

  @media (max-width: ${breakpoints.m}px) {
    width: 70%;
    order: 2;
  }

  @media (max-width: ${breakpoints.s}px) {
    margin-top: 0;
    width: 100%;
    .treatments-image{ 
        max-height: 400px;
        border-radius: 0px;
      }
  }
`

const TreatmentsImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;

  
`