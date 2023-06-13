import {groq} from 'next-sanity'
import client from "./client";

export const getAdmissionsData = async () => {
  const admissionsData = await client.fetch(
    groq`*[_type == "admissions"][0] {
      admissionsData
    }`
  )
  return admissionsData
}