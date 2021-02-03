import { Request, Response } from 'express'
import rootService from './index'
import { success, error } from '../../lib/responses'

const getLatest = async (req: Request, res: Response) => {
  console.log('root getLatest')
  try {
    const data = await rootService.getLatest()
    success(res, data)
  } catch (err) {
    error(res, err)
  }
}

export default {
  getLatest,
}
