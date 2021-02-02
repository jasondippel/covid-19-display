import fetch from 'node-fetch'
import { getYesterday } from '../../lib/date'

const COVID_CANADA_API = process.env.COVID_CANADA_API

const getLatest = async () => {
  const yesterday = getYesterday()

  // Could use /summary endpoint, but data is formatted a little differently
  // TODO: add type info
  return fetch(`${COVID_CANADA_API}/reports?after=${yesterday}`)
    .then((res) => res.json())
    .then(({ data: reports }) => {
      return reports[reports.length - 1]
    })
    .catch((error) => {
      // TODO: handle errors
      throw new Error('Something bad happened...')
    })
}

export default {
  getLatest,
}
