import { Router } from 'express'
import Controller from '../services/health/controller'

const router = Router()

router.get('/liveness', Controller.checkLiveness)
router.get('/readiness', Controller.checkReadiness)

export default router
