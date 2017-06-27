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
   * @param {object} req - Requette de l'utilisateur
   * @param {object} res - Reponse à envoyer à l'utilisateur
   * @param {object} next - Permet de passer au middleware suivant
   */
  indexAction(req, res) {
    res.render('index')
  }
}

module.exports = new DefaultController()
