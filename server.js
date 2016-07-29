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
            
            console.log('*** orderSubmited ***');
            console.log("---------Order Detail: ", req1.body); 
            console.log("------------Authorization: ", req1.headers['authorization']);
            
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
                console.log('*** Submit to ACMC Cloud get error: ', error);
              }
              else
              {
                console.log('*** Submit to ACMC Cloud success: ', body);
              }
              res1.json(error, response, body);
            });
        
            
            /** var options = { 
                  hostname: 'acmccloud.aaxisaws.com', 
                  port: 443, 
                  path: '/REST/order/external', 
                  method: 'POST', 
                  rejectUnauthorized:false 
                }; 
                
            //app.use(express.bodyParser());     
            var req = https.request(options, function(res) { 
                console.log("statusCode: ", res.statusCode); 
                console.log("headers: ", res.headers); 
                
                //res1.json("{success1:true}");
                 
                req.on('data', function(chunk) { 
                    data += chunk;
                });
              
                req.on('end', function() {
                    req.body = data;
                    console.log("data: ", data);
                    res1.json("{success:true}");
                });
            }); 
            req.end(); 
             
            req.on('error', function(e) { 
              console.error(e); 
            }); **/
        });
        
        
        break;
    default:
        console.log('*** DEV ***');
        app.use(express.static(config.root + config.build.replace('.', '')));
        app.use(express.static(config.root + config.src.replace('.', '') + 'app/'));
        app.use(express.static(config.root));
        app.use(express.static(config.root + config.components.dir));
        app.get('/orderSubmit', function(req, res) {
            console.log('*** orderSubmit ***');
        });
       
        break;
}

app.listen(port);
console.log('Listening on port ' + port + '...');
