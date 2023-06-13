import {groq} from 'next-sanity'
import client from "./client";

export const getTeachingClinicData = async () => {
  const teachingClinicData = await client.fetch(
    groq`*[_type == "teachingClinic"][0] {
      mon, tues, wed, thurs, fri, sat, sun
    }`
  )
  return teachingClinicData
}