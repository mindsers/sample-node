'use strict'

const express = require('express')
const router  = express.Router() // eslint-disable-line new-cap

const defaultController = require('../controllers/default.controller.js')
const errorController   = require('../controllers/error.controller.js')

errorController.config.format = 'json'

router.route('/hello')
            .get(defaultController.indexAction)
            .post(errorController.defaultError(405))

/**
 * All default routes
 *
 * @export Router/Default
 */
module.exports = router
