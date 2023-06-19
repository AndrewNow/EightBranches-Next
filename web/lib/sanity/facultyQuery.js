import {groq} from 'next-sanity'
import client from "./client";

export const getFacultyLeadershipData = async () => {
  const facultyLeadershipData = await client.fetch(
    groq`*[_type == "facultyLeadership"][0] {
    facultyLeadershipData[] {
      title,
      degree,
      bio,
      "imageUrl": portrait.asset->url,
      "lqip": portrait.asset->metadata.lqip,
      "excerpt": array::join(string::split((pt::text(bio)), "")[0..255], "") + "..."
    }
  }
  `
  )
  return facultyLeadershipData
}

export const getFacultyInstructorData = async () => {
  const facultyInstructorData = await client.fetch(
    groq`*[_type == "facultyInstructor"][0] {
    facultyInstructorData[] {
      title,
      degree,
      bio,
      "imageUrl": portrait.asset->url,
      "lqip": portrait.asset->metadata.lqip,
      "excerpt": array::join(string::split((pt::text(bio)), "")[0..255], "") + "..."
    }
  }
  `
  )
  return facultyInstructorData
}