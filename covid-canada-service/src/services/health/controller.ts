import { Request, Response } from 'express'
import { success } from '../../lib/responses'

const checkLiveness = (req: Request, res: Response) => {
  console.log('health checkLiveness')

  success(res, {
    message: 'alive',
  })
}

const checkReadiness = (req: Request, res: Response) => {
  console.log('health checkReadiness')
  success(res, {
    message: 'ready',
  })
}

export default {
  checkLiveness,
  checkReadiness,
}
