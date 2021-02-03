import { Router } from 'express'
import Controller from '../services/regions/controller'

const router = Router()

router.get('/', Controller.listRegions)
router.get('/:hr_uid', Controller.getRegionInfo)
router.get('/:hr_uid/latest', Controller.getRegionLatest)

export default router
