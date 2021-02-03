import { Router } from 'express'
import CovidRoutes from '../routes/covid'
import GeoRoutes from '../routes/geo'
import HealthRoutes from '../routes/health'

const router = Router()

router.use('/geo', GeoRoutes)
router.use('/health', HealthRoutes)
router.use('/covid', CovidRoutes)

export default router
