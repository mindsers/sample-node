/*jslint node: true */
"use strict";

var express   = require('express'),
    router    = require('./libs/routers/router.js'),
    configure = require('./libs/config.js'),
    app       = express();

// Configuration des routes
configure(app);

// Initialisation des routes
router(app);

app.listen(3000, function () {
    console.info('Server connected');
});

module.exports = app;