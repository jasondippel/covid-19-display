import fetch from 'node-fetch'

const COVID_API = process.env.COVID_API

const getSummary = async () => {
  console.log(`GET ${COVID_API}/latest`)

  // TODO: add type info
  return fetch(`${COVID_API}/latest`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      console.log('error', error)
      // TODO: handle errors
      throw new Error('Something bad happened...')
    })
}

const getProvincesSummary = async () => {
  console.log(`GET ${COVID_API}/getProvincesSummary`)

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
  console.log(`GET ${COVID_API}/getProvinceSummary`)

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
  console.log(`GET ${COVID_API}/getRegionSummary`)

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
