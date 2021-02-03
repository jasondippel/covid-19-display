import fetch from 'node-fetch'

const COVID_API = process.env.COVID_API

const getSummary = async () => {
  // TODO: add type info
  return fetch(`${COVID_API}/latest`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      // TODO: handle errors
      throw new Error('Something bad happened...')
    })
}

const getProvincesSummary = async () => {
  // TODO: add type info
  return fetch(`${COVID_API}/provinces/latest`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      // TODO: handle errors
      throw new Error('Something bad happened...')
    })
}

const getProvinceSummary = async (provinceCode: string) => {
  // TODO: add type info
  return fetch(`${COVID_API}/provinces/${provinceCode}/latest`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      // TODO: handle errors
      throw new Error('Something bad happened...')
    })
}

const getRegionSummary = async (regionCode: string) => {
  // TODO: add type info
  return fetch(`${COVID_API}/regions/${regionCode}/latest`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      // TODO: handle errors
      throw new Error('Something bad happened...')
    })
}

export default {
  getSummary,
  getProvincesSummary,
  getProvinceSummary,
  getRegionSummary,
}
