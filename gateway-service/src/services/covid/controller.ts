import { Request, Response } from 'express'
import covidService from './index'
import { success, error } from '../../lib/responses'

const getSummary = async (req: Request, res: Response) => {
  try {
    const data = await covidService.getSummary()
    success(res, data)
  } catch (err) {
    error(res, err)
  }
}

const getProvincesSummary = async (req: Request, res: Response) => {
  try {
    const data = await covidService.getProvincesSummary()
    success(res, data)
  } catch (err) {
    error(res, err)
  }
}

const getProvinceSummary = async (req: Request, res: Response) => {
  try {
    const provinceCode = req.params.province
    const data = await covidService.getProvinceSummary(provinceCode)
    success(res, data)
  } catch (err) {
    error(res, err)
  }
}

const getRegionSummary = async (req: Request, res: Response) => {
  try {
    const regionCode = req.params.region
    const data = await covidService.getRegionSummary(regionCode)
    success(res, data)
  } catch (err) {
    error(res, err)
  }
}

export default {
  getSummary,
  getProvincesSummary,
  getProvinceSummary,
  getRegionSummary,
}
