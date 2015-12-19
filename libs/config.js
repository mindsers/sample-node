/**
 * Make configuration on the app
 * 
 * @params {object} app - Express app instance
 * @return {object} Express app instance for queue chaining 
 */
module.exports = function (app) {
    app.set('view engine', 'jade');
    
    return app
}