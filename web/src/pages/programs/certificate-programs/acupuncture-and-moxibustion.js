import Image from "next/image"
import Seo from "components/seo"
import ProgramLayout from "components/ProgramPageTemplates/programLayout"
import image from '../../../images/Programs/certificate-acupuncture.jpg'
import { getContactData } from "lib/sanity/contactInfoQuery"

const AcupunctureMoxibustion = () => {

  const programData = {
    programName: "Acupuncture & Moxibustion",
    programType: "Certificate Program",
    about:
      "This certificate program is designed for Regulated Health Practitioners interested in practicing Acupuncture as an adjunct therapy to their primary method of treatment. The program will teach practitioners to use acupuncture for the treatment of pain and musculoskeletal disorders. The hours earned in the program can be applied to Diploma programs if graduates are interested in studying further and becoming a Registered Acupuncturist or a Registered TCM Practitioner.",
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
        hours: "Program Hours: 384",
        description:
          "This program can be completed in 1 year studying part time or in shorter time studying asynchronously.",
      },
      additionalInfo:
        "This certificate program is a Confirmed Acupuncture Education Program for the purpose of requesting authorization from CMTO to practise using acupuncture within the scope of Massage Therapy in Ontario. It also satisfies requirements laid out by other organizations to become an acupuncture provider. Please contact us for more details.",
    },
    courseData: [
      {
        label: "1 Year Program",
        year: [
          {
            label: "Year One",
            data: [
              {
                label: "TCM Foundational Courses",
                courses: [
                  {
                    code: "TCM-1001",
                    title: "Foundation of Traditional Chinese Medicine (A)",
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
                    code: "ACU-2001",
                    title: "Meridian Theory",
                    type: "Lecture",
                    credits: 3,
                  },
                ],
              },
              {
                label: "Acupuncture Courses",
                courses: [
                  {
                    code: "ACU-2002",
                    title: "Acupuncture Points Theory (A)",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "ACU-2003",
                    title: "Acupuncture Points Theory (B)",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "ACU-2004",
                    title: "Acupuncture Points Theory (C)",
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
                    code: "ACU-2007",
                    title: "Acupuncture Techniques (B)",
                    type: "Practical",
                    credits: 3,
                  },
                ],
              },
              {
                label: "Optional Electives",
                courses: [
                  {
                    code: "ACU-2005",
                    title: "Acupuncture Allied Therapies",
                    type: "Practical",
                    credits: 3,
                  },
                  {
                    code: "ACT-3003",
                    title: "Acupuncture External Medicine and Misc.",
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
                    code: "TCM-1003 ",
                    title: "Diagnostics of Traditional Chinese Medicine (A)",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "TCM-1004",
                    title: "Diagnostics of Traditional Chinese Medicine (B)",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "SHA-6001",
                    title: "Self Healing Arts",
                    type: "Lecture",
                    credits: 3,
                  },
                  {
                    code: "ACU-2008",
                    title:
                      "Acupuncturist Safety, Jurisprudence, Regulation, Intro to Clinic",
                    type: "Lecture",
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
        title="Acupuncture & Moxibustion"
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