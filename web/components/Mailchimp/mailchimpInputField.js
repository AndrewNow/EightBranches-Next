'use client';
import React from "react"
import styled from "styled-components"
import breakpoints from "../breakpoints"
import { NewsletterArrow } from "../../svg/misc"
import { motion } from "framer-motion"

const MailchimpInputField = props => {
  //Checks if all the fields are filled and if an @ sign is used in the email field
  const validateInput = values => {
    if (values.some(f => f === "") || values[0].indexOf("@") === -1) {
      return true
    } else {
      return false
    }
  }
  if (props.type === "submit") {
    return (
      <SubmitLabel>
        <SubmitInput
          type="submit"
          value={" "}
          disabled={validateInput(props.formValues)}
        />
        {validateInput(props.formValues) ? (
          <div>
            <NewsletterArrow
              color={"#7B797370"}
              style={{ transition: "var(--hover-transition)" }}
            />
          </div>
        ) : (
          <motion.div
            initial={{ x: 0 }}
            animate={{
              x: [0, 5, 0],
              transition: {
                repeat: Infinity,
                repeatType: "mirror",
                repeatDelay: 2,
                duration: 1,
                ease: "easeInOut",
              },
            }}
          >
            <NewsletterArrow
              color={"#7B7973"}
              style={{ transition: "var(--hover-transition)" }}
            />
          </motion.div>
        )}
      </SubmitLabel>
    )
  } else if (props.type === "textarea") {
    return (
      <Label>
        {props.label}
        <textarea
          onChange={e => props.onChangeHandler(e.target.value)}
          placeholder={props.placeholder}
          value={props.value}
          required={props.isRequired}
          rows={7}
          name={props.name}
        />
      </Label>
    )
  } else {
    return (
      <Label>
        {props.label}
        <EmailInput
          onChange={e => props.onChangeHandler(e.target.value)}
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          required={props.isRequired}
          name={props.name}
        />
      </Label>
    )
  }
}

export default React.memo(MailchimpInputField)

const EmailInput = styled.input`
  width: 300px;
  border: none;
  background: none;
  background-color: none;
  font-family: "Matter-regular";
  font-size: 22px;
  box-sizing: border-box;
  color: #00000050;

  :focus {
    border-radius: 3px;
    outline: none !important;
    color: #00000090;
  }

  @media (max-width: ${breakpoints.xl}px) {
    font-size: 18px;
  }
`

const SubmitLabel = styled.label`
  div {
    position: relative;
    svg {
      position: absolute;
      transform: translate(1rem, -1.75rem);
      transition: var(--hover-transition);
      cursor: pointer;
    }
  }
`

const SubmitInput = styled.input`
  color: none;
  font-family: "Matter-light";
  /* padding-left: 1rem; */
  /* padding-bottom: 1rem; */
  border: none;
  width: 50px;
  height: 35px;
  background: none;
  background-color: none;
  /* cursor: pointer; */

  :not(:disabled) {
    cursor: pointer;

    :hover {
      ~ div svg {
        path {
          fill: var(--color-orange) !important;
        }
      }
    }
  }

  @media (max-width: ${breakpoints.m}px) {
    /* padding-bottom: 0rem; */
  }
`

const Label = styled.label``
