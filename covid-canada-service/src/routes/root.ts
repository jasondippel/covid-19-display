import { Router } from 'express'
import Controller from '../services/root/controller'

const router = Router();

router.get('/latest', Controller.getLatest)

export default router
