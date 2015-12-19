var express   = require('express'),
    router    = require('./libs/routers/router.js'),
    configure = require('./libs/config.js'),
    app       = express();

// Configuration des routes
configure(app);

// Initialisation des routes
router(app);

var server = app.listen(3000, function () {
    console.info('Server connected');
});