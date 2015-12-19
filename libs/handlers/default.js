/*jslint node: true */
"use strict";

module.exports = (function () {
    var Q = require('q');
    
    /**
     * Controller for default actions
     *
     * @module DefaultController
     */
    var DefaultController = {
        indexAction: indexAction
    };
    
    return DefaultController;
    
    /**
     * Page d'accueil
     *
     * @function indexAction
     * @params {object} req - Requette de l'utilisateur     
     * @params {object} res - Reponse à envoyer à l'utilisateur
     * @params {object} next - Permet de passer au middleware suivant
     */
    function indexAction(req, res, next) {
        res.render('index');
    }
})();