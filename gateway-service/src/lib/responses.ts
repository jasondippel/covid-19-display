import { Response } from 'express'

const success = (res: Response, data: object) => {
  res.status(200).json(getSuccessPayload(data))
}

const error = (res: Response, reason: any, status = 500) => {
  res.status(status).json(getFailedPayload(reason))
}

const getSuccessPayload = (data: object) => {
  return data
}

const getFailedPayload = (reason: any) => {
  return reason
}

export { success, error }
