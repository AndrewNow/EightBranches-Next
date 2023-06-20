import React, { useState } from "react"
import styled from "styled-components"
import { motion, AnimatePresence } from "framer-motion"
import AboutUsClose from "../../svg/aboutUsClose"
import breakpoints from "../breakpoints"
import { useInView } from "react-intersection-observer"

const EightBranches = () => {
  const FadeIn = {
    visible: {
      transition: {
        staggerChildren: 0.1,
        ease: "easeInOut",
      },
    },
  }
  // since there are 2 iterations of <Grid>, to get a proper animation
  // we have to delay the second grid by the total length of the first grid's children animations
  // FadeIn2 -> ( staggerChildren * 4 , because there are 4 blocks per <Grid> )
  const FadeIn2 = {
    visible: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
        ease: "easeInOut",
      },
    },
  }

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.35,
      },
    },
    hidden: {
      opacity: 0,
      x: -15,
    },
  }

  const dropdown = {
    visible: {
      opacity: 1,
      height: "auto ",
      transition: {
        delay: 0.2,
        duration: 0.6,
        ease: "easeInOut",
        staggerChildren: 0.4,
        delayChildren: 0.6,
      },
    },
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  }

  const fadeout = {
    visible: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      },
    },
    hidden: {
      opacity: 0,
    },
  }

  const [expand, setExpand] = useState({
    acupuncture: null,
    moxibustion: null,
    cupping: null,
    herbology: null,
    guasha: null,
    nutrition: null,
    taoist: null,
    bodywork: null,
  })

  const [BlocksRef, BlocksInView] = useInView({
    root: null,
    threshold: 0.5,
    triggerOnce: true,
  })

  // **** NOTE:

  // this component is a little convoluted - I wrote this under time constraints and
  // did not have time to come up with an ideal way to manage state w/ .map() considering
  // the design requirement of having two separate areas in which the dropdown could expand
  // this should ideally be refactored in the future, but for now it works.

  // there are two wrapper sections, and underneath each is a list of the associated dropdown blurbs

  return (
    <>
      <Wrapper ref={BlocksRef}>
        <Grid
          initial="hidden"
          animate={BlocksInView ? "visible" : "hidden"}
          variants={FadeIn}
        >
          <Block
            variants={child}
            onClick={() =>
              setExpand({
                acupuncture: !false,
                moxibustion: false,
                cupping: false,
                herbology: false,
                guasha: false,
                nutrition: false,
                taoist: false,
                bodywork: false,
              })
            }
          >
            <BlockInner
              style={{
                background: expand.acupuncture
                  ? "var(--color-lightorange)"
                  : "white",
                color: expand.acupuncture
                  ? "var(--color-beige)"
                  : "var(--color-lightestorange)",
              }}
            >
              <h3>Acupuncture</h3>
            </BlockInner>
          </Block>
          <Block
            variants={child}
            onClick={() =>
              setExpand({
                acupuncture: false,
                moxibustion: !false,
                cupping: false,
                herbology: false,
                guasha: false,
                nutrition: false,
                taoist: false,
                bodywork: false,
              })
            }
          >
            <BlockInner
              style={{
                background: expand.moxibustion
                  ? "var(--color-lightorange)"
                  : "white",
                color: expand.moxibustion
                  ? "var(--color-beige)"
                  : "var(--color-lightestorange)",
              }}
            >
              <h3>Moxibustion</h3>
            </BlockInner>
          </Block>
          <Block
            variants={child}
            onClick={() =>
              setExpand({
                acupuncture: false,
                moxibustion: false,
                cupping: !false,
                herbology: false,
                guasha: false,
                nutrition: false,
                taoist: false,
                bodywork: false,
              })
            }
          >
            <BlockInner
              style={{
                background: expand.cupping
                  ? "var(--color-lightorange)"
                  : "white",
                color: expand.cupping
                  ? "var(--color-beige)"
                  : "var(--color-lightestorange)",
              }}
            >
              <h3>Cupping</h3>
            </BlockInner>
          </Block>
          <Block
            variants={child}
            onClick={() =>
              setExpand({
                acupuncture: false,
                moxibustion: false,
                cupping: false,
                herbology: !false,
                guasha: false,
                nutrition: false,
                taoist: false,
                bodywork: false,
              })
            }
          >
            <BlockInner
              style={{
                background: expand.herbology
                  ? "var(--color-lightorange)"
                  : "white",
                color: expand.herbology
                  ? "var(--color-beige)"
                  : "var(--color-lightestorange)",
              }}
            >
              <h3>Herbology</h3>
            </BlockInner>
          </Block>
        </Grid>
        <AnimatePresence>
          {expand.acupuncture && (
            <InfoDropDown
              variants={dropdown}
              animate={expand.acupuncture ? "visible" : "hidden"}
              initial="hidden"
              exit="hidden"
            >
              <InfoDropDownButton
                aria-label="Expand Acupuncture information dropdown"
                onClick={() =>
                  setExpand({
                    acupuncture: false,
                  })
                }
              >
                <AboutUsClose />
              </InfoDropDownButton>
              <motion.h4 variants={fadeout}>
                The theory and practice of acupuncture is based on Traditional
                Chinese Medicine, a comprehensive natural health care system
                that has been used in Asia for thousands of years.
                Acupuncturists stimulate “acupuncture points” found at specific
                locations on the surface of the body by inserting very thin
                needles through the skin, or with heat and/or finger pressure.
              </motion.h4>
            </InfoDropDown>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {expand.moxibustion && (
            <InfoDropDown
              variants={dropdown}
              animate={expand.moxibustion ? "visible" : "hidden"}
              initial="hidden"
              exit="hidden"
            >
              <InfoDropDownButton
                aria-label="Expand Moxibustion information dropdown"
                onClick={() =>
                  setExpand({
                    moxibustion: false,
                  })
                }
              >
                <AboutUsClose />
              </InfoDropDownButton>
              <motion.h4 variants={fadeout}>
                This form of heat therapy has been used for centuries throughout
                China. Since the early development of this medical system moxa
                has been used as a stand-alone therapy as well as in combination
                with acupuncture, herbal medicine, and bodywork. The herb used
                in this therapy is dried Mugwort (Artemisia Vulgaris) which is
                burnt directly or indirectly on the skin at the site of
                acupuncture points and along meridian channels. Moxa therapy
                produces a pleasant warming sensation that penetrates deep
                beneath the skin while stimulating circulation of qi and blood
                throughout the body.
              </motion.h4>
            </InfoDropDown>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {expand.cupping && (
            <InfoDropDown
              variants={dropdown}
              animate={expand.cupping ? "visible" : "hidden"}
              initial="hidden"
              exit="hidden"
            >
              <InfoDropDownButton
                aria-label="Expand Cupping information dropdown"
                onClick={() =>
                  setExpand({
                    cupping: false,
                  })
                }
              >
                <AboutUsClose />
              </InfoDropDownButton>
              <motion.h4 variants={fadeout}>
                This is one of the oldest manual therapies in Chinese medicine,
                with recorded use dating back to the early fourth century. Thick
                glass or plastic cups are most commonly used today. However,
                practitioners originally used animal horns, bamboo, and iron or
                pottery cups to perform cupping on patients. Glass cups require
                a small flame to remove the oxygen inside and to create the
                suction needed to anchor the cup to the skin. The soothing
                warmth of the cups aids the circulation of qi and blood in the
                body and has a relaxing effect on the patient.
              </motion.h4>
            </InfoDropDown>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {expand.herbology && (
            <InfoDropDown
              variants={dropdown}
              animate={expand.herbology ? "visible" : "hidden"}
              initial="hidden"
              exit="hidden"
            >
              <InfoDropDownButton
                aria-label="Expand Herbology information dropdown"
                onClick={() =>
                  setExpand({
                    herbology: false,
                  })
                }
              >
                <AboutUsClose />
              </InfoDropDownButton>
              <motion.h4 variants={fadeout}>
                Eastern Herbology has its roots in nutrition, in particular in
                China where herbs, seeds, minerals, barks, and other remedies
                are a part of the daily traditional diet. That being said, the
                term herbology or herbal medicine itself doesn’t quite encompass
                the array of natural substances used in this medicine. The broad
                range of medicinal substances used in traditional Chinese
                medicine includes minerals, seeds, dried fruits, mushrooms,
                grasses, flowers, and animal products amongst others.
              </motion.h4>
            </InfoDropDown>
          )}
        </AnimatePresence>
      </Wrapper>
      {/* beginning of wrapper 2 */}
      {/* beginning of wrapper 2 */}
      {/* beginning of wrapper 2 */}
      {/* beginning of wrapper 2 */}
      {/* beginning of wrapper 2 */}
      {/* beginning of wrapper 2 */}
      {/* beginning of wrapper 2 */}
      {/* beginning of wrapper 2 */}
      <Wrapper style={{ paddingBottom: "5rem" }}>
        <Grid
          initial="hidden"
          animate={BlocksInView ? "visible" : "hidden"}
          variants={FadeIn2}
        >
          <Block
            variants={child}
            onClick={() =>
              setExpand({
                acupuncture: false,
                moxibustion: false,
                cupping: false,
                herbology: false,
                guasha: !false,
                nutrition: false,
                taoist: false,
                bodywork: false,
              })
            }
          >
            <BlockInner
              style={{
                background: expand.guasha
                  ? "var(--color-lightorange)"
                  : "white",
                color: expand.guasha
                  ? "var(--color-beige)"
                  : "var(--color-lightestorange)",
              }}
            >
              <h3>Gua Sha</h3>
            </BlockInner>
          </Block>
          <Block
            variants={child}
            onClick={() =>
              setExpand({
                acupuncture: false,
                moxibustion: false,
                cupping: false,
                herbology: false,
                guasha: false,
                nutrition: !false,
                taoist: false,
                bodywork: false,
              })
            }
          >
            <BlockInner
              style={{
                background: expand.nutrition
                  ? "var(--color-lightorange)"
                  : "white",
                color: expand.nutrition
                  ? "var(--color-beige)"
                  : "var(--color-lightestorange)",
              }}
            >
              <h3>Nutrition</h3>
            </BlockInner>
          </Block>
          <Block
            variants={child}
            onClick={() =>
              setExpand({
                acupuncture: false,
                moxibustion: false,
                cupping: false,
                herbology: false,
                guasha: false,
                nutrition: false,
                taoist: !false,
                bodywork: false,
              })
            }
          >
            <BlockInner
              style={{
                background: expand.taoist
                  ? "var(--color-lightorange)"
                  : "white",
                color: expand.taoist
                  ? "var(--color-beige)"
                  : "var(--color-lightestorange)",
              }}
            >
              <h3>
                Taoist Arts <br /> (Yang Shen)
              </h3>
            </BlockInner>
          </Block>

          <Block
            variants={child}
            onClick={() =>
              setExpand({
                acupuncture: false,
                moxibustion: false,
                cupping: false,
                herbology: false,
                guasha: false,
                nutrition: false,
                taoist: false,
                bodywork: !false,
              })
            }
          >
            <BlockInner
              style={{
                background: expand.bodywork
                  ? "var(--color-lightorange)"
                  : "white",
                color: expand.bodywork
                  ? "var(--color-beige)"
                  : "var(--color-lightestorange)",
              }}
            >
              <h3>Asian Bodywork</h3>
            </BlockInner>
          </Block>
        </Grid>
        {/* start of dropdown area 2 */}
        {/* start of dropdown area 2 */}
        {/* start of dropdown area 2 */}
        {/* start of dropdown area 2 */}
        {/* start of dropdown area 2 */}
        {/* start of dropdown area 2 */}
        {/* start of dropdown area 2 */}
        <AnimatePresence>
          {expand.guasha && (
            <InfoDropDown
              variants={dropdown}
              animate={expand.guasha ? "visible" : "hidden"}
              initial="hidden"
              exit="hidden"
            >
              <InfoDropDownButton
                aria-label="Expand Gua Sha information dropdown"
                onClick={() =>
                  setExpand({
                    guasha: false,
                  })
                }
              >
                <AboutUsClose />
              </InfoDropDownButton>
              <motion.h4 variants={fadeout}>
                Gua sha is an ancient Chinese healing technique that involves
                using a round-edged instrument to stroke the surface of the skin
                to clear stagnation from the body via movement. This motion has
                the effect of raising small red or purple petechiae, or sha, to
                the surface of the skin. This sha is an indication of pathogenic
                blood or qi stagnation, which is a possible cause of pain,
                stiffness, cough, and congestion, amongst other health issues.
                The sha that results from treatment may feel slightly sensitive
                to the touch, though both redness and sensitivity fade within a
                few days of the treatment.
              </motion.h4>
            </InfoDropDown>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {expand.nutrition && (
            <InfoDropDown
              variants={dropdown}
              animate={expand.nutrition ? "visible" : "hidden"}
              initial="hidden"
              exit="hidden"
            >
              <InfoDropDownButton
                aria-label="Expand Nutrition information dropdown"
                onClick={() =>
                  setExpand({
                    nutrition: false,
                  })
                }
              >
                <AboutUsClose />
              </InfoDropDownButton>
              <motion.h4 variants={fadeout}>
                Nutrition is at the very foundation of traditional Chinese
                medicine as it is used to create harmony between one’s internal
                and external environment. Food from local flora and fauna was
                the earliest form of medicine. The plants, fruits vegetables,
                minerals, and wildlife of each region were studied and used for
                their medicinal properties and ability to prevent illness
                brought on by weather conditions, physical labor, and infection.
              </motion.h4>
            </InfoDropDown>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {expand.taoist && (
            <InfoDropDown
              variants={dropdown}
              animate={expand.taoist ? "visible" : "hidden"}
              initial="hidden"
              exit="hidden"
            >
              <InfoDropDownButton
                aria-label="Expand Taoist Arts information dropdown"
                onClick={() =>
                  setExpand({
                    taoist: false,
                  })
                }
              >
                <AboutUsClose />
              </InfoDropDownButton>
              <motion.h4 variants={fadeout}>
                Yang Shen refers to traditional Chinese practices meant to
                promote health or nourish life through harmonized breathing,
                moving, and stretching exercises. They often include
                self-massage, self-defense, meditative, and energy projecting
                techniques. Early historical recordings such as the Daoyin Tu
                (exercise chart), illustrate exercise postures in China dating
                back to the 2nd Century BCE. Eight Branches focuses on Qi Gong,
                which includes systems of coordinated body posture and movement,
                breathing, and meditation used for health and spirituality.
              </motion.h4>
            </InfoDropDown>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {expand.bodywork && (
            <InfoDropDown
              variants={dropdown}
              animate={expand.bodywork ? "visible" : "hidden"}
              initial="hidden"
              exit="hidden"
            >
              <InfoDropDownButton
                aria-label="Expand Bodywork information dropdown"
                onClick={() =>
                  setExpand({
                    bodywork: false,
                  })
                }
              >
                <AboutUsClose />
              </InfoDropDownButton>
              <motion.h4 variants={fadeout}>
                The principle of Asian bodywork is based on correcting the flow
                of energy through the body and balancing yin and yang energies.
                Through this approach, the body improves its ability to heal and
                prevent diseases and addresses not only physical but also
                psycho-emotional health. Using fingers, hands, elbows, and
                knees, practitioners can stimulate acupuncture points, correct
                the flow of meridian pathways and activate the circulation of qi
                and blood in muscles, joints, and tissues.
              </motion.h4>
            </InfoDropDown>
          )}
        </AnimatePresence>
      </Wrapper>
    </>
  )
}

export default EightBranches

const Wrapper = styled(motion.div)`
  position: relative;
  margin: 0 auto;
  width: 90%;
`

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  position: relative;
  margin: 0 auto;

  @media (max-width: ${breakpoints.m}px) {
    grid-template-columns: 1fr 1fr;
  }
`

const Block = styled(motion.div)`
  height: auto;
  position: relative;
  margin: 2rem;

  @media (max-width: ${breakpoints.xl}px) {
    margin: 1rem;
  }
  @media (max-width: ${breakpoints.s}px) {
    margin: 0.5rem;
  }
`

const BlockInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border: 1px solid var(--color-lightorange);
  border-radius: 20px;
  overflow: hidden;
  height: 200px;
  transition: var(--hover-transition);
  cursor: pointer;
  h3 {
    text-align: center;
  }
  :hover {
    background-color: var(--color-lightorange)!important;
    color: var(--color-beige)!important;
  }
  @media (max-width: ${breakpoints.xl}px) {
    height: 150px;
  }
  @media (max-width: ${breakpoints.l}px) {
    height: 100px;
    border-radius: 10px;

    h3 {
      font-size: 3vw;
    }
  }
  @media (max-width: ${breakpoints.m}px) {
    h3 {
      font-size: 3.5vw;
    }
  }
  @media (max-width: ${breakpoints.m}px) {
    h3 {
      font-size: 20px;
      line-height: 140%;
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    h3 {
      font-size: 22px;
    }
  }
  @media (max-width: ${breakpoints.xs}px) {
    h3 {
      font-size: 18px;
    }
  }
`

const InfoDropDown = styled(motion.div)`
  background: white;
  border: 1px solid var(--color-lightorange);
  border-radius: 20px;
  overflow: hidden;
  margin: 0 2rem;
  left: 0;
  display: flex;
  position: relative;
  flex-basis: 0;

  h4 {
    width: 90%;
    line-height: 175%;
    padding: 5rem;
  }

  svg {
    cursor: pointer;
    position: absolute;
    top: 2rem;
    right: 2rem;
  }

  @media (max-width: ${breakpoints.xl}px) {
    margin: 1.5rem 1rem;
    h4 {
      padding: 2rem;
    }
  }
  @media (max-width: ${breakpoints.m}px) {
    svg {
      width: 35px;
      height: 35px;
    }
  }
  @media (max-width: ${breakpoints.s}px) {
    margin: 0.5rem;
    border-radius: 10px;
    svg {
      top: 1rem;
      right: 1rem;
    }
    h4 {
      width: 90%;
      padding: 0;
      padding-top: 1rem;
      margin: 2.5rem auto;
      font-size: 18px;
    }
  }
`

const InfoDropDownButton = styled.button`
  border: none;
  background: none;
  border: 0;
  padding: 0px;
  font-size: 100%;
  font-family: inherit;
`