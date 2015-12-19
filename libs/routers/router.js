var defaultRouter = require('./default.js');

/**
 * Apply all routing rules.
 * 
 * @params {object} app - Express app instance
 */
module.exports = function (app) {
    app.use('/', defaultRouter);
};