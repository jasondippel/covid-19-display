import { Router } from 'express'
import RootRoutes from '../routes/root'
import ProvincesRoutes from '../routes/provinces'
import RegionsRoutes from '../routes/regions'
import HealthRoutes from '../routes/health'

const router = Router()

router.use('/', RootRoutes)
router.use('/provinces', ProvincesRoutes)
router.use('/regions', RegionsRoutes)
router.use('/health', HealthRoutes)

export default router
