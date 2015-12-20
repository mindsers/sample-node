/*jslint node: true */
"use strict";

var assert = require('assert'),
    request = require('supertest');

describe('GET /hello', function (){
    var server = require('../app');
    
    it('shoudl return 200 HTTP error', function(done){        
        request(server)
            .get('/hello')
            .expect(200, done);
    });
    
    it('shoudl return HTML content', function(done){        
        request(server)
            .get('/hello')
            .expect('Content-Type', /html/)
            .end(function(err, res){
                if (err) return done(err);
                done();
            });
    });
});

describe('POST /hello', function (){
    var server = require('../app');
    
    it('shoudl return 405 HTTP error', function(done){        
        request(server)
            .post('/hello')
            .expect(405, done);
    });
    
    it('shoudl return HTML content', function(done){        
        request(server)
            .post('/hello')
            .expect('Content-Type', /json/)
            .end(function(err, res){
                if (err) return done(err);
                done();
            });
    });
});