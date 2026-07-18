import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: 'users',
  },
  collections: [
    {
      slug: 'users',
      auth: true,
      fields: [],
    },
    {
      slug: 'media',
      upload: true,
      fields: [
        {
          name: 'alt',
          type: 'text',
        },
      ],
    },
    {
      slug: 'services',
      admin: {
        useAsTitle: 'name',
      },
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'short_description', label: 'Short description' , type: 'textarea' },
        { name: 'long_description', label: 'Long description', type: 'richText' },
        { name: 'icon', label: 'Icon', type: 'upload', relationTo: 'media' },
        { name: 'order', type: 'number' },
        { name: 'slug', type: 'text' },
        {
          name: 'deliverables',
          label: 'What we deliver',
          type: 'array',
          minRows: 0,
          maxRows: 6,
          fields: [
            { name: 'icon', type: 'upload', relationTo: 'media' },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'textarea' },
          ],
        },
      ],
    },
    {
      slug: 'client',
      admin: {
        useAsTitle: 'company_name',
      },
      fields: [
        { name: 'company_name', label: "Company name" , type: 'text', required: true },
        { name: 'logo', label: 'Company Logo', type: 'upload', relationTo: 'media' },
        { name: 'short_description', label: 'Short description' , type: 'textarea' },
        { name: 'order', type: 'number' },
        { name: 'slug', type: 'text' },
      ],
    },
    {
      slug: 'case-studies',
      admin: {
        useAsTitle: 'name',
      },
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'short_description', label: 'Short description', type: 'textarea' },
        { name: 'long_description', label: 'Long description', type: 'richText' },
        { name: 'order', type: 'number' },
        { name: 'slug', type: 'text' },
        { name: 'client', type: 'relationship', relationTo: 'client', required: false },
        { name: 'services', type: 'relationship', relationTo: 'services', hasMany: true },
      ],
    },
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'src/payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
    // ponytail: push skips migration files in dev; swap for migrate in prod
    push: process.env.NODE_ENV !== 'production',
  }),
})
