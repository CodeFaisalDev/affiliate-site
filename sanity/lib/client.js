import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  projectId : "5bzffs25",
  dataset : "production",
  apiVersion : "2024-06-06",
  useCdn: false,
  perspective: 'raw',
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

// // src/lib/sanity.js

// import sanityClient from '@sanity/client'
// import imageUrlBuilder from '@sanity/image-url'

// const client = sanityClient({
//   projectId : "5bzffs25",
//   dataset : "production",
//   apiVersion : "2024-06-06",
//   useCdn: false, // `false` if you want to ensure fresh data
// })

// const builder = imageUrlBuilder(client)

// export function urlFor(source) {
//   return builder.image(source)
// }

// export { client }
