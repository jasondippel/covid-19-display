import { Request, Response } from 'express'
import geoService from './index'
import { success, error } from '../../lib/responses'

const getProvinces = async (req: Request, res: Response) => {
  console.log('geo getProvinces')

  try {
    const data = await geoService.getProvinces()
    success(res, data)
  } catch (err) {
    error(res, err)
  }
}

const getProvince = async (req: Request, res: Response) => {
  console.log('geo getProvince')

  try {
    const provinceCode = req.params.code
    const data = await geoService.getProvince(provinceCode)
    success(res, data)
  } catch (err) {
    error(res, err)
  }
}

const getProvinceRegions = async (req: Request, res: Response) => {
  console.log('geo getProvinceRegions')

  try {
    const provinceCode = req.params.code
    const data = await geoService.getProvinceRegions(provinceCode)
    success(res, data)
  } catch (err) {
    error(res, err)
  }
}

const getRegions = async (req: Request, res: Response) => {
  console.log('geo getRegions')

  try {
    const data = await geoService.getRegions()
    success(res, data)
  } catch (err) {
    error(res, err)
  }
}

export default {
  getProvinces,
  getProvince,
  getProvinceRegions,
  getRegions,
}
