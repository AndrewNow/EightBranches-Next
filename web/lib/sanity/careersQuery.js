import { groq } from 'next-sanity'
import client from "./client";

export const getCareersData = async () => {
  const careersData = await client.fetch(
    groq`*[_type == "careers"][0] {
      careerData[] {
        careersTitle,
        category,
        description,
        "slug": slug.current
      }
    }`
  )
  return careersData
}


export const getCareersPage = async (params) => {
  const careerData = await client.fetch(
    groq`*[_type == "careers"][0].careerData[slug.current == $slug][0] {
      careersTitle, 
      category,
      description,
      "slug": slug.current,
      body,
    }`,
    { slug: params.careers }
  );
  return careerData;
};
