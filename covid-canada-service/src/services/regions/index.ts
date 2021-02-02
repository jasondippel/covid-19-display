import fetch from 'node-fetch'
import { getYesterday } from '../../lib/date'

const COVID_CANADA_API = process.env.COVID_CANADA_API

const getRegionsList = async () => {
  // TODO: add type info
  return fetch(`${COVID_CANADA_API}/regions`)
    .then((res) => res.json())
    .then(({ data }) => {
      return data
    })
    .catch(() => {
      // TODO: handle errors
      throw new Error('Something bad happened...')
    })
}

const getRegionInfo = async (regionId: string) => {
  // TODO: add type info
  return fetch(`${COVID_CANADA_API}/regions/${regionId}`)
    .then((res) => res.json())
    .then(({ data }) => {
      return data
    })
    .catch(() => {
      // TODO: handle errors
      throw new Error('Something bad happened...')
    })
}

const getLatest = async (regionId: string) => {
  const yesterday = getYesterday()
  // TODO: add type info
  return fetch(
    `${COVID_CANADA_API}/reports/regions/${regionId}?after=${yesterday}`,
  )
    .then((res) => res.json())
    .then(({ data }) => data[data.length - 1])
    .catch(() => {
      // TODO: handle errors
      throw new Error('Something bad happened...')
    })
}

export default {
  getRegionsList,
  getRegionInfo,
  getLatest,
}
