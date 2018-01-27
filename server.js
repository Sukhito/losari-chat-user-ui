var express         =   require('express');
var cors            =   require('cors');
var app             =   express();
var ip				=   require('ip');
var mysql           =   require('mysql');


var mongoose        =   require('mongoose');
var bodyParser      =   require('body-parser');
var methodOverride  =   require('method-override');

var port = process.env.PORT || 8083;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));



app.listen(port);
console.log("Su-uS is Up and Running, Server at " + port + " with ip address "  + ip.address());