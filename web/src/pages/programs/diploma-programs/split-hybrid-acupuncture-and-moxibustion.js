import Image from "next/image"
import Seo from "components/seo"
import ProgramLayout from "components/ProgramPageTemplates/programLayout"
import image from '../../../images/Programs/programs-split-hybrid.png'
import { getContactData } from "lib/sanity/contactInfoQuery"

const AcupunctureMoxibustion = () => {

  const programData = {
    programName: "Split-Hybrid Acupuncture & Moxibustion",
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
        label: "3 Year Program",
        year: [
          {
            label: "Year One",
            data: [
              {
                label: "Term 1",
                hasEasternBodywork: false,
                courses: [
                  {
                    code: "TCM-1001",
                    title: "Foundation of TCM (A)",
                    type: "Online",
                    credits: 3,
                  },
                  {
                    code: "SHA-6001",
                    title: "Self-Healing Arts",
                    type: "Blended",
                    credits: 3,
                  },
                  {
                    code: "ACU-2002",
                    title: "Acupuncture Points Theory (A)",
                    type: "Online",
                    credits: 3,
                  },
                  {
                    code: "BIO-5001",
                    title: "Anatomy",
                    type: "Online",
                    credits: 3,
                  },
                  {
                    code: "PRO-7000",
                    title: "Practice Management & Professionalism",
                    type: "Online",
                    credits: 3,
                  },
                  {
                    code: "CLC-9000",
                    title: "Clinical Introduction",
                    type: "In-person",
                    credits: 3,
                  },
                ],
              },
              {
                label: "Term 2",
                courses: [
                  {
                    code: "ACU-2001",
                    title:
                      "Meridian Theory",
                    type: "Online",
                    credits: 3,
                  },
                  {
                    code: "ACU-2003",
                    title:
                      "Acupuncture Points Theory (B)",
                    type: "Blended",
                    credits: 3,
                  },
                  {
                    code: "ACU-2008",
                    title:
                      "Acupuncture Safety & Jurisprudence",
                    type: "Online",
                    credits: 3,
                  },
                  {
                    code: "BIO-5011",
                    title:
                      "Anatomy II",
                    type: "Online",
                    credits: 3,
                  },
                  {
                    code: "HRB-8001",
                    title:
                      "TCM Nutrition",
                    type: "Async",
                    credits: 3,
                  },
                  {
                    code: "CLC-9001",
                    title:
                      "Clinical Assistance (50 hours)",
                    type: "In-person",
                    credits: 3,
                  },
                ],
              },
              {
                label: "Term 3a",
                hasEasternBodywork: false,
                courses: [
                  {
                    code: "TCM-1002",
                    title: "Foundation of TCM (B)",
                    type: "Online",
                    credits: 3,
                  },
                  {
                    code: "TCM-1003",
                    title: "Diagnostics of TCM (A)",
                    type: "Online",
                    credits: 3,
                  },
                  {
                    code: "ACU-2004",
                    title: "Acupuncture Points Theory (C)",
                    type: "Blended",
                    credits: 3,
                  },
                  {
                    code: "BIO-5002",
                    title: "Physiology",
                    type: "Online",
                    credits: 3,
                  },
                  {
                    code: "ACU-2006",
                    title: "Acupuncture Techniques (A)",
                    type: "In-person",
                    credits: 3,
                  },
                  {
                    code: "CLC-9001",
                    title: "Clinical Assistance (50 hours)",
                    type: "In-person",
                    credits: 3,
                  },
                ],
              },
              {
                label: "Term 3b",
                hasEasternBodywork: false,
                courses: [
                  {
                    code: "ACU-2005",
                    title: "Acupuncture Allied Therapies",
                    type: "In-person",
                    credits: 3,
                  },
                  {
                    code: "ACU-2007",
                    title: "Acupuncture Techniques (B)",
                    type: "In-person",
                    credits: 3,
                  },
                  {
                    code: "CLC-9001",
                    title: "Clinical Assistance (100 hours)",
                    type: "In-person",
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
                    code: "TCM-1004",
                    title: "Diagnostics of TCM (B)",
                    type: "Online",
                    credits: 3,
                  },
                  {
                    code: "ACT-3004",
                    title: "Acupuncture Orthopedics & Traumatology",
                    type: "Online",
                    credits: 3,
                  },
                  {
                    code: "ACT-3005",
                    title: "Acupuncture Therapeutics",
                    type: "Online",
                    credits: 3,
                  },
                  {
                    code: "BIO-5003",
                    title: "Pathology",
                    type: "Online",
                    credits: 3,
                  },
                  {
                    code: "BIO-5005",
                    title: "Neuroanatomy",
                    type: "Online",
                    credits: 3,
                  },
                  {
                    code: "CLC-9002",
                    title: "Clinical Practice (100 hours)",
                    type: "In-person",
                    credits: 3,
                  },
                ],
              },
              {
                label: "Term 2",
                courses: [
                  {
                    code: "ACT-3001",
                    title: "Acupuncture Internal Medicine",
                    type: "Online",
                    credits: 3,
                  },
                  {
                    code: "ACT-3002",
                    title: "Acupuncture Pediatrics & Gynaecology",
                    type: "Online",
                    credits: 3,
                  },
                  {
                    code: "ACT-3003",
                    title: "Acupuncture External Medicine & Misc.",
                    type: "Online",
                    credits: 3,
                  },
                  {
                    code: "BIO-5004",
                    title: "Pharmacology",
                    type: "Online",
                    credits: 3,
                  },
                  {
                    code: "BIO-5015",
                    title: "Western Clinical & Emergency Medicine",
                    type: "Online",
                    credits: 3,
                  },
                  {
                    code: "CLC-9002",
                    title: "Clinical Practice (100 hours)",
                    type: "In-person",
                    credits: 3,
                  },
                ],
              },
              {
                label: "Term 3a",
                courses: [
                  {
                    code: "GEN-1301",
                    title: "TCM Peripheral Skills",
                    type: "Blended",
                    credits: 3,
                  },
                  {
                    code: "EMA-4031",
                    title: "Tui Na",
                    type: "Blended",
                    credits: 3,
                  },
                  {
                    code: "BIO-5006",
                    title: "Western Medical Diagnostics & Examinations",
                    type: "Blended",
                    credits: 3,
                  },
                  {
                    code: "HRB-8002",
                    title: "Introduction to TCM Herbology",
                    type: "Online",
                    credits: 3,
                  },
                  {
                    code: "CLC-9002",
                    title: "Clinical Practice (100 hours)",
                    type: "In-person",
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
                    code: "HRB-8003",
                    title: "Herbal Materia Medica I",
                    type: "Online",
                    credits: 3,
                  },
                  {
                    code: "HRB-8004",
                    title: "Herbal Materia Medica II",
                    type: "Online",
                    credits: 3,
                  },
                  {
                    code: "BIO-5013",
                    title: "Western Pathology Case Studies",
                    type: "Online",
                    credits: 3,
                  },
                  {
                    code: "CLC-9004",
                    title: "Herbal Clinical Practice (52 hours)",
                    type: "In-person",
                    credits: 3,
                  },
                ],
              },
              {
                label: "Term 2",
                courses: [
                  {
                    code: "HRB-8005",
                    title: "Herbal Formulae I",
                    type: "Online",
                    credits: 3,
                  },
                  {
                    code: "HRB-8006",
                    title: "Herbal Formulae II",
                    type: "Online",
                    credits: 3,
                  },
                  {
                    code: "HRB-8008",
                    title: "Dui Yao & Pao Zhi: Combination & Preparation",
                    type: "Online",
                    credits: 3,
                  },
                  {
                    code: "HBT-1202",
                    title: "TCM Pediatrics & Gynaecology (Er Ke & Fu Ke)",
                    type: "Online",
                    credits: 3,
                  },
                  {
                    code: "HBT-1204",
                    title: "TCM Orthopaedics & Traumatology",
                    type: "Online",
                    credits: 3,
                  },
                  {
                    code: "CLC-9004",
                    title: "Herbal Clinical Practice (100 hours)",
                    type: "In-person",
                    credits: 3,
                  },
                ],
              },
              {
                label: "Term 3a",
                courses: [
                  {
                    code: "HRB-8007",
                    title: "Herbal Formulae III & Dispensary Management",
                    type: "Online",
                    credits: 3,
                  },
                  {
                    code: "HRB-8009",
                    title: "Patent Herbal Medicine",
                    type: "Online",
                    credits: 3,
                  },
                  {
                    code: "HBT-1201",
                    title: "TCM Internal Medicine (Nei Ke)",
                    type: "Online",
                    credits: 3,
                  },
                  {
                    code: "HBT-1203",
                    title: "TCM External Medicine (Wai Ke)",
                    type: "Online",
                    credits: 3,
                  },
                  {
                    code: "HBT-1212",
                    title: "Advanced TCM Gynaecology",
                    type: "Online",
                    credits: 3,
                  },
                  {
                    code: "CLC-9004",
                    title: "Herbal Clinical Practice (100 hours)",
                    type: "In-person",
                    credits: 3,
                  },
                ],
              },
              {
                label: "Term 3b",
                courses: [
                  {
                    code: "PRO-7005",
                    title: "Exam Preparation (16 hours)",
                    type: "Blended",
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
      <Seo
        title="Split-Hybrid Acupuncture & Moxibustion Diploma Program"
        description="Our 2 year and 3 year acupuncture diploma program trains students to
become registered acupuncturists."
      />
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