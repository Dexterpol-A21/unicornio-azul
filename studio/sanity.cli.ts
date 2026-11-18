import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'eqos829f',
    dataset: 'production',
  },
  studioHost: 'unicornio-azul',
  deployment: {
    autoUpdates: true,
  },
})
