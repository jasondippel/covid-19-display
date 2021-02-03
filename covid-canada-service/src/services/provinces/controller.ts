import { Request, Response } from 'express'
import provinceService from './index'
import { success, error } from '../../lib/responses'

const listProvinces = async (req: Request, res: Response) => {
  console.log('provinces listProvinces')

  try {
    const data = await provinceService.getProvinceList()
    success(res, data)
  } catch (err) {
    error(res, err)
  }
}

const getLatest = async (req: Request, res: Response) => {
  console.log('provinces getLatest')

  try {
    const data = await provinceService.getLatest()
    success(res, data)
  } catch (err) {
    error(res, err)
  }
}

const getLatestByProvince = async (req: Request, res: Response) => {
  console.log('provinces getLatestByProvince')

  try {
    const code = req.params.code
    const data = await provinceService.getLatest(code)
    success(res, data)
  } catch (err) {
    error(res, err)
  }
}

const getRegionsByProvince = async (req: Request, res: Response) => {
  console.log('provinces getRegionsByProvince')

  try {
    const code = req.params.code
    const data = await provinceService.getRegions(code)
    success(res, data)
  } catch (err) {
    error(res, err)
  }
}

export default {
  listProvinces,
  getLatest,
  getLatestByProvince,
  getRegionsByProvince,
}
