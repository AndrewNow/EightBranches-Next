import Image from "next/image"
import Seo from "components/seo"
import ProgramLayout from "components/ProgramPageTemplates/programLayout"
import image from '../../../images/Programs/programs-split-hybrid.png'
import { getContactData } from "lib/sanity/contactInfoQuery"

const OnsiteAcupuncture = () => {

  const programData = {
    programName: "Onsite Acupuncture & Moxibustion",
    programType: "Diploma Program",
    about:
      "This program can be completed in 2 or 3 years. Our program includes both lecture and practical course formats. In addition to acupuncture, the curriculum includes training in moxibustion, nutrition, herbology, eastern massage, cupping, gua sha, and the taoist arts.",
    image: (
      <Image
        src={image}
        alt="Image of two practitioners performing on a patient."
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
        hours: "CAN Program Hours: 2004 (includes 500 clinical hours)",
        secondaryHours: "USA Program Hours: 2412 (includes 668 clinical hours)",
        description:
          "This program can be completed in 2 years of studying full-time, with multiple intakes per year.",
      },
      optionTwo: {
        title: "3 Year Program",
        hours: "CAN Program Hours: 2004 (includes 500 clinical hours)",
        secondaryHours: "USA Program Hours: 2412 (includes 668 clinical hours)",
        description:
          "This program can be completed in 3 years, with all clinical hours taking place in the senior year.",
      },
      additionalInfo:
        "Both programs qualify graduates to write the Pan-Canadian regulatory examinations and to become a Registered Acupuncturist (R.Ac).",
    },
    courseData: [
      {
        label: "3 Year Program",
        year: [
          {
            label: "Year One",
            data: [
              {
                label: "Term 1",
                hasEasternBodywork: false,
                hasCoursesOnlyAvailableInUSA: true,
                courses: [
                  {
                    code: "TCM-1001",
                    title: "Foundation of TCM (A)",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "SHA-6001",
                    title: "Self-Healing Arts **",
                    type: "Practical",
                    credits: 3,
                  },
                  {
                    code: "ACU-2002",
                    title: "Acupuncture Points Theory (A)",
                    type: "Practical",
                    credits: 3,
                  },
                  {
                    code: "BIO-5001",
                    title: "Anatomy",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "PRO-7001",
                    title: "Practice Management & Professionalism",
                    type: "Lecture",
                    credits: 3,
                  },
                ],
              },
              {
                label: "Term 2",
                hasEasternBodywork: false,
                hasCoursesOnlyAvailableInUSA: false,
                courses: [
                  {
                    code: "ACU-2001",
                    title:
                      "Meridian Theory",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "ACU-2003",
                    title:
                      "Acupuncture Points Theory (B)",
                    type: "Practical",
                    credits: 3,
                  },
                  {
                    code: "ACU-2008",
                    title:
                      "Acupuncture Safety & Jurisprudence",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "BIO-5011",
                    title:
                      "Anatomy II",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "HRB-8001",
                    title:
                      "TCM Nutrition",
                    type: "Lecture",
                    credits: 3,
                  },
                ],
              },
              {
                label: "Term 3",
                hasEasternBodywork: false,
                hasCoursesOnlyAvailableInUSA: false,
                courses: [
                  {
                    code: "TCM-1002",
                    title: "Foundation of TCM (B)",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "TCM-1003",
                    title: "Diagnostics of TCM (A)",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "ACU-2004",
                    title: "Acupuncture Points Theory (C)",
                    type: "Practical",
                    credits: 3,
                  },
                  {
                    code: "BIO-5002",
                    title: "Physiology",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "HRB-8002",
                    title: "Introduction to TCM Herbology",
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
                hasEasternBodywork: false,
                hasCoursesOnlyAvailableInUSA: false,
                courses: [
                  {
                    code: "TCM-1004",
                    title: "Diagnostics of TCM (B)",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "ACT-3004",
                    title: "Acupuncture Orthopedics & Traumatology",
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
                    code: "BIO-5003",
                    title: "Pathology",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "BIO-5005",
                    title: "Neuroanatomy",
                    type: "Lecture",
                    credits: 3,
                  },
                ],
              },
              {
                label: "Term 2",
                hasEasternBodywork: false,
                hasCoursesOnlyAvailableInUSA: false,
                courses: [
                  {
                    code: "ACT-3001",
                    title: "Acupuncture Internal Medicine",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "ACT-3002",
                    title: "Acupuncture Pediatrics & Gynaecology",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "ACT-3003",
                    title: "Acupuncture External Medicine & Misc.",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "BIO-5004",
                    title: "Pharmacology",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "BIO-5015",
                    title: "Western Clinical & Emergency Medicine",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "EMA-4031",
                    title: "Tui Na",
                    type: "Practical",
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
                label: "Term 1A",
                hasEasternBodywork: true,
                hasCoursesOnlyAvailableInUSA: true,
                courses: [
                  {
                    code: "ACU-2006",
                    title: "Acupuncture Techniques (A)",
                    type: "Practical",
                    credits: 3,
                  },
                  {
                    code: "ACU-2007",
                    title: "Acupuncture Techniques (B)",
                    type: "Practical",
                    credits: 3,
                  },
                  {
                    code: "ACU-2009",
                    title: "Japanese Acupuncture & Moxibustion **",
                    type: "Practical",
                    credits: 3,
                  },
                  {
                    code: "EMA-4000",
                    title: "Eastern Bodywork * **",
                    type: "Practical",
                    credits: 3,
                  },
                  {
                    code: "BIO-5006",
                    title: "Western Medical Diagnostics & Examinations",
                    type: "Practical",
                    credits: 3,
                  },
                  {
                    code: "CLC-9000",
                    title: "Clinical Introduction (48 hours)",
                    type: "Clinical",
                    credits: 3,
                  },
                  {
                    code: "CLC-9001",
                    title: "Clinical Assistance (200 hours)",
                    type: "Clinical",
                    credits: 4,
                  },
                ],
              },
              {
                label: "Term 1B",
                hasEasternBodywork: false,
                hasCoursesOnlyAvailableInUSA: false,
                courses: [
                  {
                    code: "ACU-2005",
                    title: "Acupuncture Allied Therapies",
                    type: "Practical",
                    credits: 3,
                  },
                  {
                    code: "CLC-9002",
                    title: "Clinical Practice (280 hours)",
                    type: "Clinical",
                    credits: 6,
                  },
                ],
              },
              {
                label: "Term 2",
                hasEasternBodywork: false,
                hasCoursesOnlyAvailableInUSA: true,
                courses: [
                  {
                    code: "ACU-2010",
                    title: "Korean Acupuncture **",
                    type: "Practical",
                    credits: 3,
                  },
                  {
                    code: "BIO-5012",
                    title: "Microbiology **",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "BIO-5013",
                    title: "Western Pathology Case Studies **",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "PRO-7005",
                    title: "Exam Preparation (16 hours)",
                    type: "Practical",
                    credits: 3,
                  },
                  {
                    code: "CLC-9003",
                    title: "Clinical Residency (188 hours) **",
                    type: "Clinical",
                    credits: 4,
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
      <Seo
        title="Onsite Acupuncture & Moxibustion Diploma Program"
        description="Our 2 year and 3 year onsite acupuncture & moxibustion curriculum includes training in moxibustion, nutrition, herbology, eastern massage, cupping, gua sha, and the taoist arts."
      />
      <ProgramLayout programData={programData} />
    </>
  )
}

export default OnsiteAcupuncture

export async function getStaticProps() {
  const contactInfo = await getContactData()

  return {
    props: {
      contactInfo,
    },
    revalidate: 10,
  };
}