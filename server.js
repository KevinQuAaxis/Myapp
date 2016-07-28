'use strict';
var config = require('./gulp.config');
var https = require('https');

var express = require('express'),
    env = process.env.NODE_ENV = process.env.NODE_ENV || 'dev',
    app = express(),
    port = process.env.PORT || 451;

switch(env) {
    case 'production':
        console.log('*** PROD ***');
        
        app.use(express.static(config.root + config.compile.replace('.', '')));
        app.post('/orderSubmit', function(req1, res1) {
            
            console.log('*** orderSubmit ***');
            console.log("statusCode1: ", res1.statusCode); 
            console.log("headers1: ", res1.headers);
            
            var options = { 
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
                
                res1.json("{success:true}");
                 
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
            }); 
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
