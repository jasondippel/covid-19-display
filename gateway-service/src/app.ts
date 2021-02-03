import express from 'express'
import { json, urlencoded } from 'body-parser'
import routes from './config/routes'

const PORT = parseInt(process.env.PORT || '', 10) || 3000
const HOST = '0.0.0.0' // Important to specify this rather than localhost (won't work in containers)

const app = express()
app.disable('x-powered-by')
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(routes)

const start = async () => {
  try {
    app.listen(PORT, HOST, () => {
      console.log(`gateway-service listening on http://${HOST}:${PORT}`)
    })
  } catch (error) {
    console.error('Failed to start server:', error)
  }
}

export { start }
