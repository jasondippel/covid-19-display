/**
 * Get yesterdays date formated as yyyy-mm-dd
 */
const getYesterday = () => {
  const yesterdayUTC = new Date()
  yesterdayUTC.setDate(yesterdayUTC.getDate() - 1)
  const offset = yesterdayUTC.getTimezoneOffset()

  const yesterday = new Date(yesterdayUTC.getTime() - offset * 60 * 1000)
  return yesterday.toISOString().split('T')[0]
}

export { getYesterday }
