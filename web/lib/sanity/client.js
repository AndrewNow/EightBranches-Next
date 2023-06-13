import {createClient} from 'next-sanity'
// import {cache} from 'react'

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_ID, 
    dataset: "production",
    apiVersion: "2023-06-12", 
    useCdn: true, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
})

export default client
