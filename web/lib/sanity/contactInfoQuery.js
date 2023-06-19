import { groq } from 'next-sanity'
import client from "./client";

export const getContactData = async () => {
  const contactData = await client.fetch(
    groq`*[_type == "contactInfo"][0] {
      phone, 
      phone2, 
      email,
      address,
    }`
  )
  return contactData
}