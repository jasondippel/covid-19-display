import fetch from 'node-fetch'

const COVID_CANADA_API = process.env.COVID_CANADA_API

const getProvinceList = async () => {
  // TODO: add type info
  return fetch(`${COVID_CANADA_API}/provinces`)
    .then((res) => res.json())
    .then((data) => {
      return data
    })
    .catch(() => {
      // TODO: handle errors
      throw new Error('Something bad happened...')
    })
}

const getLatest = async (code?: string) => {
  // TODO: add type info
  return fetch(`${COVID_CANADA_API}/summary/split`)
    .then((res) => res.json())
    .then(({ data }: { data: any[] }) => {
      if (code) {
        // TODO: handle not found case
        return data.find((r) => r.province.toUpperCase() === code.toUpperCase())
      }
      return data
    })
    .catch(() => {
      // TODO: handle errors
      throw new Error('Something bad happened...')
    })
}

const getRegions = async (code: string) => {
  // TODO: add type info
  return fetch(`${COVID_CANADA_API}/province/${code}/regions`)
    .then((res) => res.json())
    .then((data) => data)
    .catch(() => {
      // TODO: handle errors
      throw new Error('Something bad happened...')
    })
}

export default {
  getProvinceList,
  getLatest,
  getRegions,
}
