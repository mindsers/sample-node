var express = require('express'),
    router  = express.Router();

var defaultController = require('../handlers/default.js'),
    errorHandler  = require('../handlers/error.js');

router.route('/hello')
            .get(defaultController.indexAction)
            .post(errorHandler.default(405));

/**
 * All default routes
 * 
 * @export Router/Default
 */
module.exports = router;