import Image from "next/image"
import Seo from "components/seo"
import ProgramLayout from "components/ProgramPageTemplates/programLayout"
import image from '../../../images/Programs/certificate-bodywork.png'
import { getContactData } from "lib/sanity/contactInfoQuery"

const AsianBodyworkTherapy = () => {

  const programData = {
    programName: "Asian Bodywork Therapy",
    programType: "Certificate Program",
    about:
      "This program qualifies graduates to write the Pan-Canadian regulatory examinations and to become a Registered Acupuncturist (R.Ac) and a Registered TCM Practitioner (R.TCMP). Students will also be able to prescribe herbal remedies. This program can be completed in 3 years studying full time (11 semesters).  In addition to teaching acupuncture and moxibustion, the program integrates an extensive Herbology coursework and covers the main specialties of Chinese medicine, such as Internal and External Medicine, Gynaecology and Paediatrics.",
    image: (
      <Image
        src={image}
        alt="Image of a student weighing traditional herbal medicine."
        quality={100}
        className="banner-image"
        width={942}
        height={905}
        priority={true}
      />
    ),
    programDescription: {
      optionOne: {
        title: "2 Year Program (September Start Date)",
        hours: "Program Hours: 2400",
        description:
          "This program can be completed in 2 years studying full-time",
      },
      optionTwo: {
        title: "3 Year Program (January Start Date)",
        hours: "Program Hours: 2400",
        description:
          "This program can be completed in 3 years studying full-time",
      },
      additionalInfo:
        "Both programs qualify graduates to write the Pan-Canadian regulatory examinations and to become a Registered Acupuncturist (R.Ac).",
    },
    courseData: [
      {
        label: "2 Year Program",
        year: [
          {
            label: "Year One",
            data: [
              {
                label: "Term 1 - Spring",
                courses: [
                  {
                    code: "103",
                    title: "TCM Theory & Diagnostics III",
                    type: "Lecture Term three",
                    credits: 4,
                  },
                  {
                    code: "203",
                    title: "Acupoint Theory and Location II",
                    type: "Lecture & Practical",
                    credits: 6,
                  },
                  {
                    code: "204",
                    title: "Techniques of Acupuncture and Moxibustion",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "303",
                    title: "Herbal Pharmacopeia I",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "504",
                    title: "Physiology",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "600",
                    title: "Clinical Assistance",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "703",
                    title: "Tai Ji II",
                    type: "Lecture",
                    credits: 1,
                  },
                ],
              },
              {
                label: "Term 2 - Winter",
                courses: [
                  {
                    code: "103",
                    title: "TCM Theory & Diagnostics III",
                    type: "Lecture Term three",
                    credits: 4,
                  },
                  {
                    code: "203",
                    title: "Acupoint Theory and Location II",
                    type: "Lecture & Practical",
                    credits: 6,
                  },
                  {
                    code: "204",
                    title: "Techniques of Acupuncture and Moxibustion",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "303",
                    title: "Herbal Pharmacopeia I",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "504",
                    title: "Physiology",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "600",
                    title: "Clinical Assistance",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "703",
                    title: "Tai Ji II",
                    type: "Lecture",
                    credits: 1,
                  },
                ],
              },
            ],
          },
          {
            label: "Year Two",
            data: [
              {
                label: "Term 1 - Spring",
                courses: [
                  {
                    code: "103",
                    title: "TCM Theory & Diagnostics III",
                    type: "Lecture Term three",
                    credits: 4,
                  },
                  {
                    code: "203",
                    title: "Acupoint Theory and Location II",
                    type: "Lecture & Practical",
                    credits: 6,
                  },
                  {
                    code: "204",
                    title: "Techniques of Acupuncture and Moxibustion",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "303",
                    title: "Herbal Pharmacopeia I",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "504",
                    title: "Physiology",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "600",
                    title: "Clinical Assistance",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "703",
                    title: "Tai Ji II",
                    type: "Lecture",
                    credits: 1,
                  },
                ],
              },
              {
                label: "Term 2 - Winter",
                courses: [
                  {
                    code: "103",
                    title: "TCM Theory & Diagnostics III",
                    type: "Lecture Term three",
                    credits: 4,
                  },
                  {
                    code: "203",
                    title: "Acupoint Theory and Location II",
                    type: "Lecture & Practical",
                    credits: 6,
                  },
                  {
                    code: "204",
                    title: "Techniques of Acupuncture and Moxibustion",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "303",
                    title: "Herbal Pharmacopeia I",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "504",
                    title: "Physiology",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "600",
                    title: "Clinical Assistance",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "703",
                    title: "Tai Ji II",
                    type: "Lecture",
                    credits: 1,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        label: "3 Year Program",
        year: [
          {
            label: "Year One",
            data: [
              {
                label: "Term 1 - Spring",
                courses: [
                  {
                    code: "103",
                    title: "TCM Theory & Diagnostics III",
                    type: "Lecture Term three",
                    credits: 4,
                  },
                  {
                    code: "203",
                    title: "Acupoint Theory and Location II",
                    type: "Lecture & Practical",
                    credits: 6,
                  },
                  {
                    code: "204",
                    title: "Techniques of Acupuncture and Moxibustion",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "303",
                    title: "Herbal Pharmacopeia I",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "504",
                    title: "Physiology",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "600",
                    title: "Clinical Assistance",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "703",
                    title: "Tai Ji II",
                    type: "Lecture",
                    credits: 1,
                  },
                ],
              },
              {
                label: "Term 2 - Winter",
                courses: [
                  {
                    code: "103",
                    title: "TCM Theory & Diagnostics III",
                    type: "Lecture Term three",
                    credits: 4,
                  },
                  {
                    code: "203",
                    title: "Acupoint Theory and Location II",
                    type: "Lecture & Practical",
                    credits: 6,
                  },
                  {
                    code: "204",
                    title: "Techniques of Acupuncture and Moxibustion",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "303",
                    title: "Herbal Pharmacopeia I",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "504",
                    title: "Physiology",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "600",
                    title: "Clinical Assistance",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "703",
                    title: "Tai Ji II",
                    type: "Lecture",
                    credits: 1,
                  },
                ],
              },
            ],
          },
          {
            label: "Year Two",
            data: [
              {
                label: "Term 1 - Spring",
                courses: [
                  {
                    code: "103",
                    title: "TCM Theory & Diagnostics III",
                    type: "Lecture Term three",
                    credits: 4,
                  },
                  {
                    code: "203",
                    title: "Acupoint Theory and Location II",
                    type: "Lecture & Practical",
                    credits: 6,
                  },
                  {
                    code: "204",
                    title: "Techniques of Acupuncture and Moxibustion",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "303",
                    title: "Herbal Pharmacopeia I",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "504",
                    title: "Physiology",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "600",
                    title: "Clinical Assistance",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "703",
                    title: "Tai Ji II",
                    type: "Lecture",
                    credits: 1,
                  },
                ],
              },
              {
                label: "Term 2 - Winter",
                courses: [
                  {
                    code: "103",
                    title: "TCM Theory & Diagnostics III",
                    type: "Lecture Term three",
                    credits: 4,
                  },
                  {
                    code: "203",
                    title: "Acupoint Theory and Location II",
                    type: "Lecture & Practical",
                    credits: 6,
                  },
                  {
                    code: "204",
                    title: "Techniques of Acupuncture and Moxibustion",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "303",
                    title: "Herbal Pharmacopeia I",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "504",
                    title: "Physiology",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "600",
                    title: "Clinical Assistance",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "703",
                    title: "Tai Ji II",
                    type: "Lecture",
                    credits: 1,
                  },
                ],
              },
            ],
          },
          {
            label: "Year Three",
            data: [
              {
                label: "Term 1 - Spring",
                courses: [
                  {
                    code: "103",
                    title: "TCM Theory & Diagnostics III",
                    type: "Lecture Term three",
                    credits: 4,
                  },
                  {
                    code: "203",
                    title: "Acupoint Theory and Location II",
                    type: "Lecture & Practical",
                    credits: 6,
                  },
                  {
                    code: "204",
                    title: "Techniques of Acupuncture and Moxibustion",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "303",
                    title: "Herbal Pharmacopeia I",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "504",
                    title: "Physiology",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "600",
                    title: "Clinical Assistance",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "703",
                    title: "Tai Ji II",
                    type: "Lecture",
                    credits: 1,
                  },
                ],
              },
              {
                label: "Term 2 - Winter",
                courses: [
                  {
                    code: "103",
                    title: "TCM Theory & Diagnostics III",
                    type: "Lecture Term three",
                    credits: 4,
                  },
                  {
                    code: "203",
                    title: "Acupoint Theory and Location II",
                    type: "Lecture & Practical",
                    credits: 6,
                  },
                  {
                    code: "204",
                    title: "Techniques of Acupuncture and Moxibustion",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "303",
                    title: "Herbal Pharmacopeia I",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "504",
                    title: "Physiology",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "600",
                    title: "Clinical Assistance",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "703",
                    title: "Tai Ji II",
                    type: "Lecture",
                    credits: 1,
                  },
                ],
              },
              {
                label: "Term 3 - Fall",
                courses: [
                  {
                    code: "103",
                    title: "TCM Theory & Diagnostics III",
                    type: "Lecture Term three",
                    credits: 4,
                  },
                  {
                    code: "203",
                    title: "Acupoint Theory and Location II",
                    type: "Lecture & Practical",
                    credits: 3,
                  },
                  {
                    code: "204",
                    title: "Techniques of Acupuncture and Moxibustion",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "303",
                    title: "Herbal Pharmacopeia I",
                    type: "Lecture",
                    credits: 2,
                  },
                  {
                    code: "504",
                    title: "Physiology",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "600",
                    title: "Clinical Assistance",
                    type: "Lecture",
                    credits: 4,
                  },
                  {
                    code: "703",
                    title: "Tai Ji II",
                    type: "Lecture",
                    credits: 1,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  }

  return (
    <>
      <Seo title="Asian Bodywork Therapy" />
      <ProgramLayout programData={programData} />
    </>
  )
}

export default AsianBodyworkTherapy

export async function getStaticProps() {
  const contactInfo = await getContactData()

  return {
    props: {
      contactInfo,
    },
    revalidate: 10,
  };
}