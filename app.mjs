import { serve } from '@hono/node-server'
import app from './dist/server.js'

serve({ fetch: app.fetch, port: Number(process.env.PORT) || 3000 })
