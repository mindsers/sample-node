/*jslint node: true */
"use strict";

var express = require('express'),
    router  = express.Router();

var defaultController = require('../controllers/default.controller.js'),
    errorController  = require('../controllers/error.controller.js');

errorController.config.format = 'json';

router.route('/hello')
            .get(defaultController.indexAction)
            .post(errorController.defaultError(405));

/**
 * All default routes
 * 
 * @export Router/Default
 */
module.exports = router;