'use strict';
var config = require('./gulp.config');
var https = require('https');
var bodyParser = require('body-parser');

var express = require('express'),
    env = process.env.NODE_ENV = process.env.NODE_ENV || 'dev',
    app = express(),
    port = process.env.PORT || 451;

switch(env) {
    case 'production':
      
        app.use(bodyParser.json()); 
        app.use(express.static(config.root + config.compile.replace('.', '')));
        app.post('/orderSubmit', function(req1, res1) {
            
            console.log('*** Order Submited From OCC Platform ***');
            console.log("*** Order Detail: ", req1.body); 
            console.log("*** Authorization: ", req1.headers['authorization']);
            
            var request = require("request");

            var options = { method: 'POST',
              url: 'https://acmccloud.aaxisaws.com/REST/order/external',
              rejectUnauthorized: false,
              headers: 
               { 'cache-control': 'no-cache',
                 'content-type': 'application/json',
                 authorization:  req1.headers['authorization'] },
              body: req1.body,
              json: true };
            
            request(options, function (error, response, body) {
              if (error) 
              {
                console.log('*** Submit to ACMC Cloud get error: ', error.stack);
              }
              else
              {
                console.log('*** Submit to ACMC Cloud success: ', body);
              }
              res1.json(error.stack, response, body);
            });
        });
        
        
        break;
    default:
        console.log('*** DEV ***');
        app.use(express.static(config.root + config.build.replace('.', '')));
        app.use(express.static(config.root + config.src.replace('.', '') + 'app/'));
        app.use(express.static(config.root));
        app.use(express.static(config.root + config.components.dir));
       
        break;
}

app.listen(port);
console.log('Listening on port ' + port + '...');
