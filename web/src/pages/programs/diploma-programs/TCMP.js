import Image from "next/image"
// import Seo from "../../../components/seo"
import ProgramLayout from "components/ProgramPageTemplates/programLayout"
import image from '../../../images/Programs/diploma-TCMP.png'
import { getContactData } from "lib/sanity/contactInfoQuery"

const TCMP = ({ data }) => {
  // const siteTitle =
  //   data.site.siteMetadata?.title ||
  //   `TCMP (Traditional Chinese Medicine Practitioner)`

  const programData = {
    programName: "Traditional Chinese Medicine Practitioner",
    programType: "Diploma Program",
    about:
      "This program qualifies graduates of the Acupuncture & Moxibustion Program to become a Registered TCM Practitioner (R.TCMP). For students who have previously completed the Acupuncture & Moxibustion Program, we offer a post-graduate diploma of the TCMP program which can be completed in just 1 year of studying full time (including a summer term). Otherwise, the regular TCMP diploma can be achieved in 3 years of full-time studies. In addition to teaching acupuncture and moxibustion, the program integrates extensive herbology coursework and covers the main specialties of Chinese medicine, such as internal and external medicine, gynecology, and pediatrics. Interested students can also take both the Acu and PG-TCMP program simultaneously in a 3 Year TCMP Program.",
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
        title: "1 Year Program",
        hours: "Program Hours: 968 (includes 250 clinical hours)",
        description:
          "Students must be graduates of an Acupuncture & Moxibustion Program to qualify for the 1-year program. Course content for this program can be completed remotely.",
      },
      optionTwo: {
        title: "3 Year Program",
        hours: "Program Hours: 3142 (includes 918 clinical hours)",
        description:
          "This program can be completed in 3 years full time study with summer semesters. The first two years of this program are the same as the Acupuncture & Moxibustion Program.",
      },
      additionalInfo:
        "Both programs qualify graduates to write the Pan-Canadian regulatory examinations and to become a Registered TCM Practitioner (R.TCMP).",
    },
    courseData: [
      {
        label: "1 Year Program (Post-Graduate)",
        year: [
          {
            label: "Year One",
            data: [
              {
                label: "Term 1",
                courses: [
                  {
                    code: "HRB-8002",
                    title: "Introduction to TCM Herbology and Formula",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "HRB-8003",
                    title: "Herbal Materia Medica I",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "HRB-8004",
                    title: "Herbal Materia Medica II",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "BIO-5015",
                    title:
                      "Advanced Study Western Clinical & Emergency Medicine",
                    type: "Lecture",
                    credits: 3,
                  },
                ],
              },
              {
                label: "Term 2",
                courses: [
                  {
                    code: "HRB-8005",
                    title: "Herbal Formula I",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "HRB-8006",
                    title: "Herbal Formula II",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "HRB-8008",
                    title:
                      "Dui Yao & Pao Zhi: Herbal Combination & Preparation",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "HBT-1201",
                    title: "TCM Internal Medicine",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "BIO-5013",
                    title: "Advanced Western Pathology Case Studies",
                    type: "Lecture",
                    credits: 3,
                  },
                ],
              },
              {
                label: "Term 3",
                courses: [
                  {
                    code: "HBT-1202",
                    title: "TCM Gynecology & Pediatric Diseases",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "HRB-8007",
                    title: "Herbal Formula III and Dispensary Management",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "HBT-1203",
                    title: "TCM External Medicine and Misc.",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "HHBT-1204",
                    title: "TCM Orthopedics, Sports Medicine, Traumatology",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "HRB-8009",
                    title: "Patent Herbal Medicine",
                    type: "Lecture",
                    credits: 3,
                  },
                ],
              },
              {
                label: "Summer Term",
                courses: [
                  {
                    code: "PRO-7005",
                    title: "Career Planning, Exam Preparation",
                    type: "Preparatory",
                    credits: 3,
                  },
                  {
                    code: "CLC-9031",
                    title: "TCMP Clinic Internship (250 hours)",
                    type: "Residency",
                    credits: 16,
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
                label: "Term 1",
                hasEasternBodywork: true,
                courses: [
                  {
                    code: "EMA-40XX",
                    title: "Eastern Bodywork I*",
                    type: "Practical",
                    credits: 3,
                  },
                  {
                    code: "SHA-6001",
                    title: "Self Healing Arts",
                    type: "Practical",
                    credits: 3,
                  },
                  {
                    code: "TCM-1005",
                    title: "TCM History, Pinyin, Chinese language, etc.",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "PRO-7001",
                    title:
                      "Interpersonal Skills, Practice Management, Professionalism",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "TCM-1001",
                    title: "Foundation of Traditional Chinese Medicine (A)",
                    type: "Lecture",
                    credits: 3,
                  },
                ],
              },
              {
                label: "Term 2",
                courses: [
                  {
                    code: "ACU-2008",
                    title:
                      "Acupuncturist Safety, Jurisprudence, Regulation, Intro to Clinic",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "ACU-2002",
                    title: "Acupuncture Points Theory (A)",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "ACU-2001",
                    title: "Meridian Theory",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "BIO-5001",
                    title: "Anatomy I",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "ACU-2005",
                    title: "Acupuncture Allied Therapies",
                    type: "Practical",
                    credits: 3,
                  },
                ],
              },
              {
                label: "Term 3",
                hasEasternBodywork: true,
                courses: [
                  {
                    code: "BIO-5002",
                    title: "Physiology",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "TCM-1002",
                    title: "Foundation of Traditional Chinese Medicine (B)",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "ACU-2006",
                    title: "Acupuncture Techniques (A)",
                    type: "Practical",
                    credits: 3,
                  },
                  {
                    code: "BIO-5011",
                    title: "Anatomy II",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "EMA-40XX",
                    title: "Eastern Bodywork II*",
                    type: "Practical",
                    credits: 3,
                  },
                  {
                    code: "TCM-1003",
                    title: "Diagnostics of Traditional Chinese Medicine (A)",
                    type: "Lecture",
                    credits: 3,
                  },
                ],
              },
              {
                label: "Clinical Experience",
                courses: [
                  {
                    code: "CLC-9000",
                    title: "Clinical Observation",
                    type: "Clinical",
                    credits: 4,
                  },
                  {
                    code: "CLC-9001",
                    title: "Clinical Internship A (100 hours)",
                    type: "Clinical",
                    credits: 6,
                  },
                  {
                    code: "CLC-9002",
                    title: "Clinical Internship B (250 hours)",
                    type: "Clinical",
                    credits: 16,
                  },
                  {
                    code: "CLC-9021",
                    title: "Acupuncture Residency (250 Hours)",
                    type: "Clinical",
                    credits: 16,
                  },
                  {
                    code: "CLC-9031",
                    title: "TCMP Clinic Internship (250 hours)",
                    type: "Clinical",
                    credits: 16,
                  },
                ],
              },
            ],
          },
          {
            label: "Year Two",
            data: [
              {
                label: "Term 1",
                courses: [
                  {
                    code: "ACU-2003",
                    title: "Acupuncture Points Theory (B)",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "ACT-3005",
                    title: "Acupuncture Therapeutics",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "EMA-4003",
                    title: "Tui Na",
                    type: "Practical",
                    credits: 3,
                  },
                  {
                    code: "TCM-1004",
                    title: "Diagnostics of Traditional Chinese Medicine (B)",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "BIO-5003",
                    title: "Pathology",
                    type: "Lecture",
                    credits: 3,
                  },
                ],
              },
              {
                label: "Term 2",
                courses: [
                  {
                    code: "ACU-2004",
                    title: "Acupuncture Points Theory (C)",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "ACU-2007",
                    title: "Acupuncture Techniques (B)",
                    type: "Practical",
                    credits: 3,
                  },
                  {
                    code: "BIO-5004",
                    title: "Pharmacology",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "HRB-8002",
                    title: "Introduction to TCM Herbology and Formula",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "ACT-3001",
                    title: "Acupuncture Internal Medicine",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "ACT-3003",
                    title: "Acupuncture External Medicine and Misc.",
                    type: "Lecture",
                    credits: 3,
                  },
                ],
              },
              {
                label: "Term 3",
                courses: [
                  {
                    code: "ACT-3002",
                    title: "Acupuncture Gynecology & Pediatric Diseases",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "ACT-3004",
                    title:
                      "Acupuncture Orthopedics, Sports Medicine, Traumatology",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "BIO-5005",
                    title: "Neuroanatomy & Emergency Medicine",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "BIO-5006",
                    title: "Western Medical Diagnostics & Examination",
                    type: "Lecture/Practical",
                    credits: 3,
                  },
                  {
                    code: "HRB-8001",
                    title: "TCM Nutrition",
                    type: "Lecture",
                    credits: 3,
                  },
                ],
              },
              {
                label: "Summer Term",
                courses: [
                  {
                    code: "PRO-7005",
                    title: "Career Planning, Exam Preparation",
                    type: "Preparatory",
                    credits: 3,
                  },
                ],
              },
            ],
          },
          {
            label: "Year Three",
            data: [
              {
                label: "Term 1",
                courses: [
                  {
                    code: "HRB-8002",
                    title: "Introduction to TCM Herbology and Formula",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "HRB-8003",
                    title: "Herbal Materia Medica I",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "HRB-8004",
                    title:
                      "Introduction to TCM Herbology and FormulHerbal Materia Medica II",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "BIO-5015",
                    title:
                      "Advanced Study Western Clinical & Emergency Medicine",
                    type: "Lecture",
                    credits: 3,
                  },
                ],
              },
              {
                label: "Term 2",
                courses: [
                  {
                    code: "HRB-8005",
                    title: "Herbal Formula I",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "HRB-8006",
                    title: "Herbal Formula II",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "HRB-8008",
                    title:
                      "Dui Yao & Pao Zhi: Herbal Combination & Preparation",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "HBT-1201",
                    title: "TCM Internal Medicine",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "BIO-5013",
                    title: "Advanced Western Pathology Case Studies",
                    type: "Lecture",
                    credits: 3,
                  },
                ],
              },
              {
                label: "Term 3",
                courses: [
                  {
                    code: "HBT-1202",
                    title: "TCM Gynecology & Pediatric Diseases",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "HRB-8007",
                    title: "Herbal Formula III and Dispensary Management",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "HBT-1203",
                    title: "TCM External Medicine and Misc.",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "HBT-1204",
                    title: "TCM Orthopedics, Sports Medicine, Traumatology",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "HRB-8009",
                    title: "Patent Herbal Medicine",
                    type: "Lecture",
                    credits: 3,
                  },
                ],
              },
              {
                label: "Summer Term",
                courses: [
                  {
                    code: "PRO-7002",
                    title: "Career Planning, Exam Preparation",
                    type: "Preparatory",
                    credits: 3,
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
      {/* <Seo
        title="TCMP (Traditional Chinese Medicine Practitioner)"
        description="Our 1 year TCMP Program is for Acupuncturists looking to add herbs to
their practice."
      /> */}
      <ProgramLayout programData={programData} />
    </>
  )
}

export default TCMP

export async function getStaticProps() {
  const contactInfo = await getContactData()

  return {
    props: {
      contactInfo,
    },
    revalidate: 10,
  };
}