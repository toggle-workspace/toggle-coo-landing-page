'use server'

import { handleServerFunctions } from '@payloadcms/next/layouts'
import { importMap } from './importMap.js'
import config from '@payload-config'
import type { ServerFunctionClient } from 'payload'

export const serverFunction: ServerFunctionClient = async (args) =>
  handleServerFunctions({ ...args, config, importMap })
