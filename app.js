var express    = require('express'); 
var app        = express();                 
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require('dotenv').config()
var request = require('request');
var port = process.env.PORT || 8080;
var router = express.Router();
var validator = require('validator');
var cors = require('cors');
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
  }
app.use(cors(corsOptions));


router.get('/', function(req, res) {
    res.json({ message: 'This is Mailchimp API to Add User to Mailchimp API' });   
});

router.post('/', function(req, res) {
    if(validator.isEmail(req.body.email)){
    var options = {
        'method': 'POST',
        'url': process.env.url,
        'headers': {
            'Authorization': process.env.secretauth,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"email_address":req.body.email,"status":req.body.status})

        };
        request(options, function (error, response) {
            if (response.statusCode == 200){
                res.json("User Added to Mailchimp API")
            }
            else{
                const respo = JSON.parse(response.body)
                res.status(400).json(respo.title);
            }
        });
    }
    else{
        res.json("Invalid Email",400);
    }
});
app.use('/', router);
app.listen(port);
console.log('Running on ' + port);