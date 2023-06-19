import {groq} from 'next-sanity'
import client from "./client";

export const getAlumniData = async () => {
  const alumniData = await client.fetch(
    groq`*[_type == "alumni"][0] {
    alumniData[] {
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
  return alumniData
}