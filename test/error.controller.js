/* eslint-env node, mocha */
'use strict'

const assert = require('assert')
const errorController = require('../libs/controllers/error.controller.js')

describe('Errorontroller', () => {
  const req = {}
  const res = {
    data: {},
    status: function (code) {
      this.data.status_code = code

      return this
    },
    render: function (template, values) {
      this.data.json = values
      this.data.template_path = template
      this.data.status_code = values.status
      this.data.format = 'HTML'

      return this
    },
    json: function (data) {
      this.data.json = data
      this.data.status_code = data.status
      this.data.format = 'JSON'

      return this
    }
  }

  describe('defaultJSON', () => {
    it('shoud return valid json response', (done) => {
      for (var i = 200; i <= 511; i++) {
        let json = errorController.defaultJSON(i)
        assert(json.status !== typeof undefined, 'Json must have status attribute')
        assert(json.description !== typeof undefined, 'Json must have description attribute')
      }
      done()
    })

    it('shoud return correct statut code', (done) => {
      for (var i = 200; i <= 511; i++) {
        let json = errorController.defaultJSON(i)
        assert(json.status === i || json.status === 520, 'Status code returned isn\'t ' + i)
      }
      done()
    })
  })

  describe('defaultError', () => {
    it('shoud return closure', (done) => {
      let closure = errorController.defaultError(207)
      assert(typeof closure === 'function', 'Return value isn\'t a function')

      done()
    })

    it('shoud return correct statut code', (done) => {
      for (var i = 200; i <= 511; i++) {
        let closure = errorController.defaultError(i)
        closure(req, res)
        assert(res.data.status_code === i || res.data.status_code === 520, 'Status code returned isn\'t ' + i)
      }
      done()
    })

    it('shoud return send HTML', (done) => {
      errorController.config.format = 'html'
      for (var i = 200; i <= 511; i++) {
        let closure = errorController.defaultError(i)
        closure(req, res)
        assert(res.data.format === 'HTML', 'Format is not HTML')
      }

      done()
    })

    it('shoud return send JSON', (done) => {
      errorController.config.format = 'json'
      for (var i = 200; i <= 511; i++) {
        let closure = errorController.defaultError(i)
        closure(req, res)
        assert(res.data.format === 'JSON', 'Format is not JSON')
      }

      done()
    })
  })

  describe('personalizedError', () => {
    it('shoud return closure', (done) => {
      let closure = errorController.personalizedError(207, 'Test error')
      assert(typeof closure === 'function', 'Return value isn\'t a function')

      done()
    })

    it('shoud return correct statut code', (done) => {
      for (var i = 200; i <= 511; i++) {
        let closure = errorController.personalizedError(i, 'Test error')
        closure(req, res)
        assert(res.data.status_code === i || res.data.status_code === 520, 'Status code returned isn\'t ' + i)
      }
      done()
    })

    it('shoud return send HTML', (done) => {
      errorController.config.format = 'html'
      for (var i = 200; i <= 511; i++) {
        let closure = errorController.personalizedError(i, 'Test error')
        closure(req, res)
        assert(res.data.format === 'HTML', 'Format is not HTML')
      }

      done()
    })

    it('shoud return send JSON', (done) => {
      errorController.config.format = 'json'
      for (var i = 200; i <= 511; i++) {
        let closure = errorController.personalizedError(i, 'Test error')
        closure(req, res)
        assert(res.data.format === 'JSON', 'Format is not JSON')
      }

      done()
    })
  })
})
