'use strict';

const express = require('express');

/**
 * Make configuration on the app
 *
 * @params {object} app - Express app instance
 * @return {object} Express app instance for queue chaining
 */
module.exports = (app) => {
    app.set('view engine', 'pug');
    app.use('/static', express.static(`${__dirname}/../public`));

    return app;
};
