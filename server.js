'use strict';
var config = require('./gulp.config');
var https = require('https');
var bodyParser = require('body-parser');
var mockOrder = {"order": {
  "egcPurchaseInfo": null,
  "lastModifiedTime": 1469158749000,
  "shippingGroupCount": 1,
  "paymentGroupCount": 1,
  "sourceCode": "7DEFUALT",
  "locale": "en",
  "state": "SUBMITTED",
  "bundlePurchaseInfo": null,
  "shippingGroups": [{
    "id": "sg400015",
    "specialInstructions": {},
    "handlingInstructions": [],
    "trackingNumber": null,
    "priceInfo": {
      "amount": 21.95,
      "currencyCode": "USD",
      "shippingTax": 0,
      "amountIsFinal": false,
      "discounted": false,
      "rawShipping": 21.95
    },
    "shippingGroupClassType": "hardgoodShippingGroup",
    "description": "sg400015",
    "commerceItemRelationships": [{
      "amount": 0,
      "id": "r200012",
      "commerceItemExternalId": null,
      "relationshipType": "SHIPPINGQUANTITY",
      "returnedQuantity": 0,
      "quantity": 1,
      "commerceItemId": "ci40000015"
    }],
    "submittedDate": null,
    "actualShipDate": null,
    "state": "INITIAL",
    "shipOnDate": null,
    "shippingMethod": "Expedited Shipping",
    "shippingAddress": {
      "middleName": null,
      "lastName": "Zhang",
      "ownerId": null,
      "state": "CA",
      "address1": "1900 Ave of the Stars",
      "address2": "Ste 555",
      "address3": null,
      "companyName": null,
      "suffix": null,
      "country": "US",
      "city": "Los Angeles",
      "faxNumber": null,
      "postalCode": "90067",
      "phoneNumber": "3102863100",
      "email": "ezhang@aaxiscommerce.com",
      "county": null,
      "prefix": null,
      "firstName": "Eric",
      "jobTitle": null
    },
    "stateDetail": null
  }],
  "giftWrapSKUs": null,
  "commerceItems": [{
    "id": "ci40000015",
    "productDisplayName": "AEROBIC SWIMSUIT",
    "returnedQuantity": 0,
    "priceInfo": {
      "amount": 59.99,
      "quantityDiscounted": 0,
      "discountable": true,
      "shippingSurcharge": 0,
      "priceListId": "salePrices",
      "onSale": true,
      "rawTotalPrice": 79.95,
      "currencyCode": "USD",
      "amountIsFinal": false,
      "listPrice": 79.95,
      "discounted": false,
      "currentPriceDetailsSorted": [{
        "amount": 59.99,
        "currencyCode": "USD",
        "tax": 0,
        "range": {
          "lowBound": 0,
          "highBound": 0,
          "size": 1
        },
        "amountIsFinal": false,
        "discounted": false,
        "orderDiscountShare": 0,
        "quantity": 1,
        "detailedUnitPrice": 59.99
      }],
      "salePrice": 59.99
    },
    "catalogId": null,
    "quantity": 1,
    "lineAttributes": [],
    "catalogRefId": "76501",
    "externalId": null,
    "catalogKey": null,
    "productId": "50708"
  }],
  "id": "C400015",
  "siteId": "siteUS",
  "priceInfo": {
    "amount": 59.99,
    "total": 81.94,
    "shipping": 21.95,
    "currencyCode": "USD",
    "tax": 0,
    "amountIsFinal": false,
    "discounted": false,
    "manualAdjustmentTotal": 0,
    "rawSubtotal": 59.99,
    "discountAmount": 0
  },
  "taxPriceInfo": {
    "currencyCode": "USD",
    "isTaxIncluded": false,
    "countryTax": 0,
    "stateTax": 0,
    "cityTax": 0,
    "districtTax": 0,
    "miscTaxInfo": {},
    "amount": 0,
    "valueAddedTax": 0,
    "countyTax": 0,
    "amountIsFinal": false,
    "miscTax": 0,
    "discounted": false
  },
  "paymentGroups": [{
    "id": "pg110001",
    "amount": 81.94,
    "authorizationStatus": [{
      "amount": 81.94,
      "errorMessage": null,
      "transactionId": "5791955DD879F2DEA653527A56FA203338945483",
      "statusProps": {
        "cvv2ResponseCode": "M",
        "responseCode": "1000",
        "currencyCode": "USD",
        "ccNumber": "F29C72AA3C73719438810E6508434628FA734565D641C2D5ECB12D52518D82AF",
        "paymentType": "visa",
        "chaseResponseCode": "00",
        "responseReason": "0",
        "responseDescription": "Approved",
        "avsCode": "B ",
        "authorizationCode": "tst755"
      },
      "transactionSuccess": true
    }],
    "currencyCode": "USD",
    "expirationMonth": "01",
    "expirationYear": "2020",
    "paymentGroupClassType": "creditCard",
    "creditCardNumber": "4113",
    "submittedDate": "2016-07-22T03:39:09.000Z",
    "state": "AUTHORIZED",
    "billingAddress": {
      "middleName": null,
      "lastName": "Zhang",
      "ownerId": null,
      "state": "CA",
      "address1": "1900 Ave of the Stars",
      "address2": "Ste 555",
      "address3": null,
      "companyName": null,
      "suffix": null,
      "country": "US",
      "city": "Los Angeles",
      "faxNumber": null,
      "postalCode": "90067",
      "phoneNumber": "3102863100",
      "email": "ezhang@aaxiscommerce.com",
      "county": null,
      "prefix": null,
      "firstName": "Eric",
      "jobTitle": null
    },
    "amountAuthorized": 81.94,
    "paymentMethod": "creditCard"
  }],
  "profileId": "1675083",
  "creationTime": 1469158746000,
  "priceGroupId": "defaultPriceGroup",
  "relationships": [{
    "amount": 81.94,
    "id": "r200013",
    "relationshipType": "ORDERAMOUNTREMAINING",
    "paymentGroupId": "pg110001"
  }],
  "salesChannel": "default",
  "taxExempt": false,
  "profile": {
    "middleName": null,
    "lastName": "Zhang",
    "email": "ezhang@aaxiscommerce.com",
    "firstName": "Eric",
    "shippingAddress": {
      "postalCode": "90067",
      "phoneNumber": "3102863100",
      "county": null,
      "state": "CA",
      "address1": "1900 Ave of the Stars",
      "address2": "Ste 555",
      "address3": null,
      "country": "US",
      "city": "Los Angeles"
    }
  },
  "totalCommerceItemCount": 1
}};

var express = require('express'),
    env = process.env.NODE_ENV = process.env.NODE_ENV || 'dev',
    app = express(),
    port = process.env.PORT || 451;

switch(env) {
    case 'production':
        console.log('*** PROD ***');
        
        //app.use(bodyParser.json()); 
        app.use(express.static(config.root + config.compile.replace('.', '')));
        app.post('/orderSubmit', function(req1, res1) {
            
            console.log('*** orderSubmit ***');
            console.log("---------req1: ", req1.body); 
            console.log("------------headers1 authorization: ", req1.headers['authorization']);
            
            var request = require("request");

            var options = { method: 'POST',
              url: 'https://acmccloud.aaxisaws.com/REST/order/external',
              rejectUnauthorized: false,
              headers: 
               { 'cache-control': 'no-cache',
                 'content-type': 'application/json',
                 authorization:  req1.headers['authorization'] },
              body: mockOrder,
              json: true };
            
            request(options, function (error, response, body) {
              if (error) throw new Error(error);
                
               res1.json(body);
              //console.log(body);
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
