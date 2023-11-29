import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import schemas from './schemas/schema'

export default defineConfig({
  title: "Eight Branches",
  projectId: "bgvur4bo",
  dataset: "production",
  plugins: [deskTool(), visionTool()],
    tools: (prev) => {
    // 👇 Uses environment variables set by Vite in development mode
    if (import.meta.env.DEV) {
      return prev
    }
    return prev.filter((tool) => tool.name !== 'vision')
  },

  schema: {
    types: schemas,
  },
});