'use strict'

const express = require('express')
const path    = require('path')

/**
 * Make configuration on the app
 *
 * @param {object} app - Express app instance
 * @return {object} Express app instance for queue chaining
 */
module.exports = (app) => {
  app.set('view engine', 'pug')
  app.set('views', path.join(__dirname, '/views'))

  app.use('/static', express.static(`${__dirname}/public`))

  return app
}
