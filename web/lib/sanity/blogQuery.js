import { groq } from 'next-sanity'
import client from './client';

export const getBlogData = async () => {
  const blogData = await client.fetch(
    groq`
  *[_type == "blog"] | order(date desc) {
    _id,
    title, 
    "slug": slug.current,
    readtime,
    date,
    "imageUrl": image.asset->url,
    "lqip": image.asset->metadata.lqip,
  }
`)
  return blogData
}

export const getBlogPage = async (params) => {
  const blogData = await client.fetch(
    groq`
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
        "next": *[_type == "blog" && date > ^.date] | order(date asc)[0] {
          _id,
          title,
          "slug": slug.current,
          readtime,
          date,
          "imageUrl": image.asset->url,
          "lqip": image.asset->metadata.lqip,
        },
        "prev": *[_type == "blog" && date < ^.date] | order(date desc)[0] {
          _id,
          title,
          "slug": slug.current,
          readtime,
          date,
          "imageUrl": image.asset->url,
          "lqip": image.asset->metadata.lqip,
        }
      }
    `, {slug: params.blog,}
    )
  return blogData
} 