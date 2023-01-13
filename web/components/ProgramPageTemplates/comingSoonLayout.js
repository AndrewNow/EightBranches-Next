import React from "react"

const ComingSoonLayout = () => {
  return (
    <>
      <LandingSection>
        <LeftSection ref={HideImageRef}>
          <HideImage
            animate={HideImageInView ? "hidden" : "visible"}
            variants={hideImage}
            initial="visible"
            exit="hidden"
          />
          {programData.image}
        </LeftSection>
        <RightSection>
          <LandingTextWrapper
            variants={FadeIn}
            initial="hidden"
            animate="visible"
          >
            <StampLogo fillColor="black" />
            <motion.h1 variants={FadeIn}>{programData.programName}</motion.h1>
            <motion.h4 variants={FadeIn}>{programData.programType}</motion.h4>
          </LandingTextWrapper>
        </RightSection>
      </LandingSection>
    </>
  )
}

export default ComingSoonLayout
