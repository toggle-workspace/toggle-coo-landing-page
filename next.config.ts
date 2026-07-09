import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: "deifkwefumgah.cloudfront.net" }],
  },
}

export default withPayload(nextConfig)
