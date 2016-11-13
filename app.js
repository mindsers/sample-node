'use strict'

const express   = require('express')
const router    = require('./libs/routers/router.js')
const configure = require('./libs/config.js')
const app       = express()

// Configuration des routes
configure(app)

// Initialisation des routes
router(app)

app.listen(3000, () => {
  console.info('Server connected')
})

module.exports = app
