''

import React from "react"
import styled from "styled-components"
import breakpoints from "../breakpoints"
import { LeftLogoPattern } from "../../svg/misc"

const YouTubeReel = () => {
  return (
    <Wrapper>
      <Video>
        <iframe
          width="100%"
          height="100%"
          style={{
            display: "block",
          }}
          src="https://www.youtube.com/embed/GT2f6tnommk"
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
        ></iframe>
      </Video>
      <LeftPattern>
        <LeftLogoPattern specifiedColor={`#FAF8F2`}/>
      </LeftPattern>
      <RightPattern>
        <LeftLogoPattern specifiedColor={`#FAF8F2`}/>
      </RightPattern>
    </Wrapper>
  )
}

export default YouTubeReel

const Wrapper = styled.section`
  background: var(--color-sandbeige);
  position: relative;
  width: 100%;
  padding: 15vh 0;
  overflow: hidden;
`

const Video = styled.div`
  display: block;
  z-index: 1;
  aspect-ratio: 16/9;
  width: 50%;
  height: auto;
  margin: 0 auto;
  
  @media (max-width: ${breakpoints.xl}px) {
    width: 70%;
  }
  @media (max-width: ${breakpoints.m}px) {
    width: 90%;
    margin: 0 auto;
  }
`

const LeftPattern = styled.div`
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translateY(-50%);
  @media (max-width: ${breakpoints.l}px) {
    display: none;
  }
`

const RightPattern = styled.div`
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%) rotate(180deg);
  @media (max-width: ${breakpoints.l}px) {
    display: none;
  }
`
