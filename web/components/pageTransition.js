import React, { forwardRef, useMemo } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components';

function PageTransition({ children, ...rest }, ref) {

  const PageTransitionVariants = {
    initial: {
      opacity: 0,
      transition: {
        duration: 0.25,
        transition: "easeOut",
      },
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.25,
        transition: "easeOut",
      },
    },
  };

	return (
		<PageTransitionDiv
			ref={ref}
			variants={PageTransitionVariants}
			initial="initial"
			animate="animate"
			exit="initial"
			{...rest}
		>
			{children}
		</PageTransitionDiv>
	)
}

export default forwardRef(PageTransition)


const PageTransitionDiv = styled(motion.div)`
	max-height: 100%;
	overflow-y: auto;
`