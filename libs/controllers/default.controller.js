'use strict'

/**
 * Controller for default actions
 *
 * @module DefaultController
 */
class DefaultController {
  /**
   * Page d'accueil
   *
   * @function indexAction
   * @params {object} req - Requette de l'utilisateur
   * @params {object} res - Reponse à envoyer à l'utilisateur
   * @params {object} next - Permet de passer au middleware suivant
   */
  indexAction(req, res) {
    res.render('index')
  }
}

module.exports = new DefaultController()
