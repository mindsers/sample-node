/* eslint-env node, mocha */
'use strict'

const request = require('supertest')
const server = require('../src/app')

describe('GET /hello', () => {
  it('shoudl return 200 HTTP error', (done) => {
    request(server)
        .get('/hello')
        .expect(200, done)
  })

  it('shoudl return HTML content', (done) => {
    request(server)
        .get('/hello')
        .expect('Content-Type', /html/)
        .end((err) => {
          if (err) return done(err)
          return done()
        })
  })
})

describe('POST /hello', () => {
  it('shoudl return 405 HTTP error', (done) => {
    request(server)
        .post('/hello')
        .expect(405, done)
  })

  it('shoudl return JSON content', (done) => {
    request(server)
        .post('/hello')
        .expect('Content-Type', /json/)
        .end((err) => {
          if (err) return done(err)
          return done()
        })
  })
})
