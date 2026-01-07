import { createClient } from '@prismicio/client'

export function getPrismicClient() {
  const prismic = createClient(
    process.env.PRISMIC_ENDPOINT,
  )

  return prismic;
}
