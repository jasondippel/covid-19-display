import { Router } from 'express'
import RootRoutes from '../routes/root'
import ProvincesRoutes from '../routes/provinces'
// import RegionsRoutes from '../routes/regions'

const router = Router()

router.use('/', RootRoutes)
router.use('/provinces', ProvincesRoutes)
// router.use('/regions', RegionsRoutes)

export default router
