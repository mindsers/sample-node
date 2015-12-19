var express = require('express'),
    router  = require('./libs/routers/router.js'),
    app = express();

// Initialisation des routes
router(app);

var server = app.listen(3000, function () {
    console.info('Server connected');
});