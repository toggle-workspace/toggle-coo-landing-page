import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import { revalidateSitePaths } from './src/lib/revalidate'

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
      access: {
        read: () => true,
      },
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
        useAsTitle: 'service_name',
      },
      hooks: {
        afterChange: [() => revalidateSitePaths(['/', '/services', '/services/[slug]'])],
        afterDelete: [() => revalidateSitePaths(['/', '/services', '/services/[slug]'])],
      },
      fields: [
        { name: 'service_name', type: 'text', required: true },
        { name: 'description', label: 'Description' , type: 'textarea' },
        { name: 'title', label: 'Hero title', type: 'text' },
        { name: 'icon', label: 'Icon', type: 'upload', relationTo: 'media' },
        { name: 'order', type: 'number' },
        { name: 'slug', type: 'text', unique: true },
        {
          name: 'deliverables',
          label: 'What we deliver',
          type: 'group',
          fields: [
            { name: 'section_title', label: 'Section title', type: 'text' },
            {
              name: 'items',
              type: 'array',
              minRows: 0,
              maxRows: 8,
              fields: [
                { name: 'icon', type: 'upload', relationTo: 'media' },
                { name: 'title', type: 'text', required: true },
                { name: 'description', type: 'textarea' },
              ],
            },
          ],
        },
        {
          name: 'process',
          label: 'Why choose us',
          type: 'group',
          fields: [
            { name: 'section_title', label: 'Section title', type: 'text' },
            {
              name: 'items',
              type: 'array',
              minRows: 0,
              maxRows: 4,
              fields: [
                { name: 'order', type: 'number' },
                { name: 'title', type: 'text', required: true },
                { name: 'description', type: 'textarea' },
              ],
            },
          ],
        },
      ],
    },
    {
      slug: 'client',
      admin: {
        useAsTitle: 'company_name',
      },
      hooks: {
        afterChange: [() => revalidateSitePaths(['/', '/case-studies/[slug]'])],
        afterDelete: [() => revalidateSitePaths(['/', '/case-studies/[slug]'])],
      },
      fields: [
        { name: 'company_name', label: "Company name" , type: 'text', required: true },
        { name: 'logo', label: 'Company Logo', type: 'upload', relationTo: 'media' },
        { name: 'industry', type: 'relationship', relationTo: 'industries' },
        { name: 'description', type: 'textarea' },
        { name: 'location', type: 'text' },
        { name: 'website', type: 'text' },
        { name: 'order', type: 'number' },
      ],
    },
    {
      slug: 'industries',
      admin: {
        useAsTitle: 'name',
      },
      // ponytail: no revalidate hook, industry names rarely change; add one if edits need to show up instantly
      fields: [
        { name: 'name', type: 'text', required: true },
      ],
    },
    {
      slug: 'team',
      admin: {
        useAsTitle: 'name',
      },
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'role', type: 'text' },
        { name: 'company', type: 'text' },
        { name: 'image', type: 'upload', relationTo: 'media' },
      ],
    },
    {
      slug: 'story-sections',
      admin: {
        useAsTitle: 'name',
      },
      hooks: {
        afterChange: [() => revalidateSitePaths(['/', '/about'])],
        afterDelete: [() => revalidateSitePaths(['/', '/about'])],
      },
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'key', type: 'text', required: true, unique: true },
        { name: 'title', type: 'textarea', required: true },
        { name: 'description', type: 'textarea' },
        { name: 'image', type: 'upload', relationTo: 'media', required: true },
        { name: 'link_label', label: 'Link label', type: 'text' },
        { name: 'link_href', label: 'Link URL', type: 'text' },
        {
          name: 'stats',
          type: 'array',
          minRows: 0,
          maxRows: 4,
          fields: [
            { name: 'value', type: 'text', required: true },
            { name: 'label', type: 'text', required: true },
          ],
        },
      ],
    },
    {
      slug: 'testimonials',
      admin: {
        useAsTitle: 'name',
      },
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'quote', type: 'textarea', required: true },
        { name: 'name', type: 'text', required: true },
        { name: 'role', type: 'text' },
        { name: 'order', type: 'number' },
      ],
    },
    {
      slug: 'case-studies',
      admin: {
        useAsTitle: 'name',
      },
      hooks: {
        afterChange: [
          () => revalidateSitePaths(['/', '/case-studies', '/case-studies/[slug]', '/services/[slug]']),
        ],
        afterDelete: [
          () => revalidateSitePaths(['/', '/case-studies', '/case-studies/[slug]', '/services/[slug]']),
        ],
      },
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'short_description', label: 'Short description', type: 'textarea' },
        { name: 'challenges', label: 'Challenges', type: 'richText' },
        { name: 'approach', label: 'Our approach', type: 'richText' },
        {
          name: 'results',
          label: 'The results',
          type: 'array',
          minRows: 0,
          maxRows: 6,
          fields: [
            { name: 'value', type: 'text', required: true },
            { name: 'label', type: 'text', required: true },
          ],
        },
        { name: 'order', type: 'number' },
        { name: 'slug', type: 'text' },
        { name: 'client', type: 'relationship', relationTo: 'client', required: false },
        { name: 'services', type: 'relationship', relationTo: 'services', hasMany: true },
      ],
    },
  ],
  globals: [
    {
      slug: 'company-info',
      label: 'Company Information',
      hooks: {
        afterChange: [() => revalidateSitePaths(['/'], 'layout')],
      },
      fields: [
        { name: 'description', label: 'Short description', type: 'textarea' },
        { name: 'email', type: 'text' },
        { name: 'phone', type: 'text' },
        { name: 'location', type: 'text' },
        {
          name: 'social_links',
          label: 'Social media links',
          type: 'array',
          fields: [
            { name: 'icon', type: 'upload', relationTo: 'media' },
            { name: 'label', type: 'text', required: true },
            { name: 'link', type: 'text', required: true },
          ],
        },
      ],
    },
  ],
  editor: lexicalEditor(),
  plugins: [
    vercelBlobStorage({
      collections: { media: true },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
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
