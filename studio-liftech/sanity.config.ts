import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig([
  {
    name: 'production',
    title: 'Liftech (production)',
    projectId: 'tvqj8hy2',
    dataset: 'production',
    basePath: '/production',
    plugins: [structureTool(), visionTool()],
    schema: {types: schemaTypes},
  },
  {
    name: 'development',
    title: 'Liftech (development)',
    projectId: 'tvqj8hy2',
    dataset: 'development',
    basePath: '/development',
    plugins: [structureTool(), visionTool()],
    schema: {types: schemaTypes},
  },
])

