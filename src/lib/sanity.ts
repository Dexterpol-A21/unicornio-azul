import { createClient } from '@sanity/client'

export const PROJECT_ID = 'eqos829f'
export const DATASET = 'production'

export const sanityClient = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: '2026-11-17',
  useCdn: false,
})
