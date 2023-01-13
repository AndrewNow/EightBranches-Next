import groq from "groq";

export const blogQuery = groq`
  *[_type == "blog"] | order(date desc) {
    _id,
    title, 
    "slug": slug.current,
    readtime,
    description,
    date,
    "imageUrl": image.asset->url,
    "lqip": image.asset->metadata.lqip,
    body
  }
`;

export const blogPageQuery = groq`
  *[_type == "blog" && slug.current == $slug][0] {
    _id,
    title, 
    "slug": slug.current,
    readtime,
    description,
    date,
    "imageUrl": image.asset->url,
    "lqip": image.asset->metadata.lqip,
    body,
    "next": *[_type == "blog" && _createdAt > ^._createdAt][0]{
      _id,
      title,
      "slug": slug.current,
      readtime, 
      date,
      "imageUrl": image.asset->url,
      "lqip": image.asset->metadata.lqip,
    },
    "prev": *[_type == "blog" && _createdAt < ^._createdAt][0]{
      _id,
      title,
      "slug": slug.current,
      readtime, 
      date,
      "imageUrl": image.asset->url,
      "lqip": image.asset->metadata.lqip,
    }
  }
`;
