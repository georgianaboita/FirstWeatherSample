'use strict'

const request = require('request')

module.exports = function getCurrentWeather(locationName, next) {
  const appId = '373a99079d61ba0ccb0f08df7db055e7'

  const requestUrl = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=${appId}&q=${locationName}'

  console.log('Making HTTP GET request to:', requestUrl)

  request(requestUrl, (err, res, body) => {
    if (err) {
      throw new Error(err)
    }

    if (body) {
      const parsedResult = JSON.parse(body)
      next(parsedResult)
    } else {
      next()
    }
  })
}