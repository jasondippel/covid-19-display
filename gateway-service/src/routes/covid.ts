import { Router } from 'express'
import Controller from '../services/covid/controller'

const router = Router()

router.get('/summary', Controller.getSummary)
router.get('/summary/split', Controller.getProvincesSummary)
router.get('/summary/province/:province', Controller.getProvinceSummary)
router.get('/summary/region/:region', Controller.getRegionSummary)

export default router
