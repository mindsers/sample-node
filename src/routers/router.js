'use strict'

const defaultRouter = require('./default.router.js')

/**
 * Apply all routing rules.
 *
 * @param {object} app - Express app instance
 * @return {object} Express app instance for queue chaining
 */
module.exports = (app) => {
  app.use('/', defaultRouter)

  return app
}
