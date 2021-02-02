import { Router } from 'express'
import Controller from '../services/provinces/controller'

const router = Router()

router.get('/', Controller.listProvinces)
router.get('/latest', Controller.getLatest)
router.get('/:code/latest', Controller.getLatestByProvince)
router.get('/:code/regions', Controller.getRegionsByProvince)

export default router
