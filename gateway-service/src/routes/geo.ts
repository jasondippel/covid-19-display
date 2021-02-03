import { Router } from 'express'
import Controller from '../services/geo/controller'

const router = Router()

router.get('/provinces', Controller.getProvinces)
router.get('/provinces/:code', Controller.getProvince)
router.get('/provinces/:code/regions', Controller.getProvinceRegions)
router.get('/regions', Controller.getRegions)

export default router
