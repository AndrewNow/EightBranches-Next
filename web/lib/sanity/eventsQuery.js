import { groq } from 'next-sanity'
import client from "./client";

export const getEventsData = async () => {
  const eventData = await client.fetch(
    groq`*[_type == "upcomingevents"] | order(category desc) {
      _id,
      title, 
      slug,
      date,
      host,
    }`
  )
  return eventData
}

export const getEventPage = async (params) => {
  const eventData = await client.fetch(
    groq`
    *[_type == "upcomingevents" && slug.current == $slug][0] {
      _id,
      title, 
      "slug": slug.current,
      link,
      host,
      date,
      "imageUrl": image.asset->url,
      "lqip": image.asset->metadata.lqip,
      body,
      "next": *[_type == "upcomingevents" && _createdAt > ^._createdAt][0]{
        _id,
        title,
        date,
        "slug": slug.current,
        "imageUrl": image.asset->url,
        "lqip": image.asset->metadata.lqip,
      },
      "prev": *[_type == "upcomingevents" && _createdAt < ^._createdAt][0]{
        _id,
        title,
        date,
        "slug": slug.current,
        "imageUrl": image.asset->url,
        "lqip": image.asset->metadata.lqip,
      }
    }
    `, {slug: params.events,}
    )
  return eventData
} 
