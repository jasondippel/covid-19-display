import fetch from 'node-fetch'

const CANADA_API = process.env.COVID_API

const getProvinces = async () => {
  console.log(`GET ${CANADA_API}/provinces`)

  // TODO: add type info
  return fetch(`${CANADA_API}/provinces`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      // TODO: handle errors
      throw new Error('Something bad happened...')
    })
}

const getProvince = async (provinceCode: string) => {
  console.log(`GET ${CANADA_API}/provinces`)

  return fetch(`${CANADA_API}/provinces`)
    .then((res) => res.json())
    .then((data) =>
      data.find(
        (d: { code: string }) =>
          d.code.toUpperCase() === provinceCode.toUpperCase(),
      ),
    )
    .catch((error) => {
      // TODO: handle errors
      throw new Error('Something bad happened...')
    })
}

const getProvinceRegions = async (provinceCode: string) => {
  console.log(`GET ${CANADA_API}/provinces/${provinceCode}/regions`)

  return fetch(`${CANADA_API}/provinces/${provinceCode}/regions`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      // TODO: handle errors
      throw new Error('Something bad happened...')
    })
}

const getRegions = async () => {
  console.log(`GET ${CANADA_API}/provinces`)

  return fetch(`${CANADA_API}/provinces`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      // TODO: handle errors
      throw new Error('Something bad happened...')
    })
}

export default {
  getProvinces,
  getProvince,
  getProvinceRegions,
  getRegions,
}
