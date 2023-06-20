import Image from "next/image"
// import Seo from "../../../components/seo"
import ProgramLayout from "components/ProgramPageTemplates/programLayout"
import image from '../../../images/Programs/diploma-acupuncture.png'
import { getContactData } from "lib/sanity/contactInfoQuery"

const AcupunctureMoxibustion = ({ data }) => {
  // const siteTitle =
  //   data.site.siteMetadata?.title ||
  //   `Acupuncture & Moxibustion Diploma Program`

  const programData = {
    programName: "Acupuncture & Moxibustion",
    programType: "Diploma Program",
    about:
      "This program can be completed in 2 years (with Clinical course hours taking place throughout each year & during additional summer terms) or in 3 years (with all Clinical hours taking place during the third year). Our program is hybrid delivery, which includes both online and on-site study formats. In addition to acupuncture, the curriculum includes training in moxibustion, nutrition, herbology, eastern massage, cupping, gua sha, and the taoist arts.",
    image: (
      <Image
        src={image}
        alt="Image of a student practicing acupuncture on a patient's upper foot region."
        quality={100}
        className="banner-image"
        width={942}
        height={905}
        priority={true}
      />
    ),
    programDescription: {
      optionOne: {
        title: "2 Year Program",
        hours: "Program Hours: 2268 (includes 668 clinical hours)",
        description:
          "This program can be completed in 2 years of studying full-time, with multiple intakes per year.",
      },
      optionTwo: {
        title: "3 Year Program",
        hours: "Program Hours: 2268 (includes 668 clinical hours)",
        description:
          "This program can be completed in 3 years, with all clinical hours taking place in the senior year.",
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
                    title: "TCM History, Pinyin, Chinese Language, etc.",
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
                  {
                    code: "CLC-9000",
                    title: "Clinical Observation (68 hours)",
                    type: "Clinical",
                    credits: 4,
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
                  {
                    code: "CLC-9001",
                    title: "Clinical Internship A (50 hours)",
                    type: "Clinical",
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
                  {
                    code: "CLC-9002",
                    title: "Clinical Internship A (50 hours)",
                    type: "Clinical",
                    credits: 3,
                  },
                ],
              },
              {
                label: "Summer Term",
                courses: [
                  {
                    code: "CLC-9002",
                    title: "Clinical Internship B (200 hours)",
                    type: "Clinical",
                    credits: 12,
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
                  {
                    code: "CLC-9002",
                    title: "Clinical Internship (50 Hours)",
                    type: "Clinical",
                    credits: 3,
                  },
                  {
                    code: "CLC-9021",
                    title: "Residency (50 Hours)",
                    type: "Clinical",
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
                  {
                    code: "CLC-9021",
                    title: "Residency (100 Hours)",
                    type: "Clinical",
                    credits: 6,
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
                  {
                    code: "CLC-9021",
                    title: "Residency (100 Hours)",
                    type: "Clinical",
                    credits: 6,
                  },
                ],
              },
              {
                label: "Summer Term",
                courses: [
                  {
                    code: "PRO-7005",
                    title: "Exam Preparation, Career Planning",
                    type: "Preperatory",
                    credits: 4,
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
                    title: "TCM History, Pinyin, Chinese Language, etc.",
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
                    title: "Exam Preparation, Career Planning",
                    type: "Preperatory",
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
                label: "Clinical Experience",
                courses: [
                  {
                    code: "CLC-9000",
                    title: "Clinical Observation (68 Hours)",
                    type: "Clinical",
                    credits: 4,
                  },
                  {
                    code: "CLC-9001",
                    title: "Clinical Internship A (100 Hours)",
                    type: "Clinical",
                    credits: 6,
                  },
                  {
                    code: "CLC-9002",
                    title: "Clinical Internship A (250 Hours)",
                    type: "Clinical",
                    credits: 16,
                  },
                  {
                    code: "CLC-9021",
                    title: "Acupuncture Residency (250 Hours)",
                    type: "Clinical",
                    credits: 16,
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

export default AcupunctureMoxibustion

export async function getStaticProps() {
  const contactInfo = await getContactData()

  return {
    props: {
      contactInfo,
    },
    revalidate: 10,
  };
}