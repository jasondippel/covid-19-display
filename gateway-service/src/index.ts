// Setup Environment Variables
import dotenv from 'dotenv'
import path from 'path'
dotenv.config({
  path: path.resolve(process.cwd(), './src/config/.env'),
})

// Import and start server
import { start } from './app'
start()
