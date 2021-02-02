import { Request, Response } from 'express'
import regionService from './index'
import { success, error } from '../../lib/responses'

const listRegions = async (req: Request, res: Response) => {
  try {
    const data = await regionService.getRegionsList()
    success(res, data)
  } catch (err) {
    error(res, err)
  }
}

const getRegionInfo = async (req: Request, res: Response) => {
  try {
    const regionId = req.params.hr_uid
    const data = await regionService.getRegionInfo(regionId)
    success(res, data)
  } catch (err) {
    error(res, err)
  }
}

const getRegionLatest = async (req: Request, res: Response) => {
  try {
    const regionId = req.params.hr_uid
    const data = await regionService.getLatest(regionId)
    success(res, data)
  } catch (err) {
    error(res, err)
  }
}

export default {
  listRegions,
  getRegionInfo,
  getRegionLatest,
}
