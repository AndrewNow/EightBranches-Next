'use client'
import React from "react"
import { Faq } from "./FAQ"

const FAQMap = () => {
  const FAQData = [
    {
      question:
        "What traditions of Acupuncture and Eastern Medicine are taught at the school?",
      answer:
        "Over the years, our college has developed a time-honored reputation for delivering an enriching education which incorporates hands-on learning and extensive practice - breadth and depth of knowledge are equally important to us. Eight Branches is renowned in Ontario for its advanced training in Bodywork, Cupping, Nutrition, Gua Sha, Moxibustion, Herbology, Acupuncture and Self Healing Arts. By highlighting each of these eight branches, our curriculum provides our students with a truly holistic and comprehensive education, staying true to the historical roots of TCM.",
    },
    {
      question: "Am I eligible for student loans?",
      answer:
        "Students enrolled in a full time Diploma Program may be eligible, if qualified, for loans, grants, or awards granted under the Ontario Student Assistance Program (OSAP). To find out if you are eligible, please contact our financial aid officer - info@eightbranches.ca"
    },
    {
      question: "How much is tuition?",
      answer:
        "For tuition details, please email admissions@eightbranches.ca with the name of the program you are interested in for a breakdown of class fees and supplies.",
    },
    {
      question: "Why Choose Eight Branches?",
      answer:
        "Eight Branches does not only focus on theory-based practitioner training, but also incorporates business management and marketing into the curriculum to ensure our students are set up for success. Our Student Clinic with clinical residency also gives practitioners the ability to apply the training they’ve received and convey it in a professional manner in a mixture of clinical settings.",
    },
  ]

  return FAQData.map((item, index) => (
    <Faq question={item.question} answer={item.answer} index={index} key={index} />
  ))
}

export default FAQMap
