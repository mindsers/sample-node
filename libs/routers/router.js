"use strict";

var defaultRouter = require('./default.router.js');

/**
 * Apply all routing rules.
 * 
 * @params {object} app - Express app instance
 * @return {object} Express app instance for queue chaining 
 */
module.exports = function (app) {
    app.use('/', defaultRouter);
    
    return app;
};