import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Image from "next/image"
import breakpoints from "../breakpoints"
import StampLogo from "../../svg/stamplogo"

export const FacultyCard = ({data, handler}) => {
  
  const title = data.title;
  const role = data.degree;
  const bio = data.bio;
  const excerpt = data.excerpt;
  const imageSrc = data.imageUrl;
  const lqip = data.lqip;

  // const [open, setOpen] = useState(false)

  // lock scroll on background when Modal is open
  // const useLockBodyScroll = () => {
  //   useEffect(() => {
  //     if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  //       const originalStyle = window.getComputedStyle(document.body).overflow
  //       document.body.style.overflow = "hidden"
  //       return () => (document.body.style.overflow = originalStyle)
  //     }
  //   }, [])
  // }
  // const ScrollLock = () => {
  //   useLockBodyScroll()
  //   return <></>
  // }


  // useEffect(() => {
  //   if (open && typeof window !== 'undefined' && typeof document !== 'undefined') {
  //     const originalOverflow = window.getComputedStyle(document.documentElement).overflow;
  //     document.documentElement.style.overflow = "hidden";
  //     return () => {
  //       document.documentElement.style.overflow = originalOverflow;
  //     };
  //   }
  // }, [open]);

  //   useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const bodyElement = document.body;

  //     if (open) {
  //       bodyElement.style.overflow = "hidden";
  //     } else {
  //       bodyElement.style.overflow = "visible";
  //     }
  //   }
  // }, [open]);

  return (
    <FacultyMember key={lqip} onClick={handler}>
      <PortraitThumbnail>
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            width={790}
            height={580}
            className="thumbnail-image"
            placeholder="blur"
            blurDataURL={lqip}
            // transformoptions={{ cropFocus: "right" }}
            // imgStyle={{ objectFit: "cover", width: "100%" }}
          />
        ) : (
          <Fallback>
            <StampLogo />
          </Fallback>
        )}
      </PortraitThumbnail>
      <TextWrapper>
        {role && <p style={{ color: "#625f63" }}>{role}</p>}
        <h3>{title}</h3>
        <FacultyDescription>
          <p>{excerpt}</p>
        </FacultyDescription>
        <ReadMore>Read More</ReadMore>
      </TextWrapper>
    </FacultyMember>
  )
}

const FacultyMember = styled.article`
  border: 1px solid black;
  border-radius: 5px;
  position: relative;
  z-index: 5;
  overflow: hidden;
  /* justify-self: center; */
  display: flex;
  flex-direction: column;
  width: auto;
  /* height: 620px; */
  margin-bottom: 5rem;
  transition: all ease-out 0.55s;

  p {
    padding-top: 1rem;
    letter-spacing: 0.01rem;
  }
  h6 {
    padding-top: 0.75rem;
    padding-bottom: 1rem;
    transition: var(--hover-transition);
    :hover {
      color: var(--color-orange);
    }
  }
  :hover {
    background-color: var(--color-lightestgreen);
    cursor: pointer;
    button {
      color: black;
      text-decoration: underline;
    }
  }
  @media (max-width: ${breakpoints.m}px) {
    width: auto;
    margin-bottom: 2.5rem;
  }
`

const TextWrapper = styled.div`
  border-top: 1px solid black;
  padding: 1rem 1.5rem;
  padding-bottom: 1.5rem;
`

const PortraitThumbnail = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: grid;
  place-items: center;
  .thumbnail-image {
    aspect-ratio: 790/580;
    width: 100%;
    height: auto;
    object-fit: cover;  
  }
`

const Fallback = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* aspect-ratio: 548/313; */
  aspect-ratio: 790/580;
  width: 100%;
`

const FacultyDescription = styled.small`
  display: flex;
  justify-content: space-between;
  p {
    padding-top: 0.75rem;
    font-size: 18px;
    line-height: 28px;
    color: #3a3a3a;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }

  @media (max-width: ${breakpoints.s}px) {
    p {
      font-size: 15px;
      line-height: 24px;
    }
  }
`

const ReadMore = styled.button`
  align-self: flex-start;
  margin-top: 1.2rem;
  font-family: "Matter-light";
  font-size: 18px;
  border: none;
  color: black;
  background: none;
  cursor: pointer;
  padding-left: 0;

  @media (max-width: ${breakpoints.s}px) {
    text-decoration: underline;
    font-size: 16px;
  }
`
