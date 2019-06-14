
var express  = require('express');
var admin = require('firebase-admin');
var app      = express();
var firebase = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");                          // create our app w/ express
var Firebase = require('firebase');
var morgan = require('morgan');
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override');
var multer  =   require('multer');
var fs = require("fs");


app.use(function(req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Max-Age", "3600");
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    next();
});

var serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://ecokids-2aacb.firebaseio.com'
});

var db = firebase.database();
var refu = db.ref("restricted_access/users"); //referencia para categorias
var reft = db.ref("restricted_access/temas");
var refs = db.ref("restricted_access/salones");
var refv = db.ref("restricted_access/videos");
var refb = db.ref("restricted_access/blogs");

refu.once("value", function(snapshot) {
  console.log(snapshot.val());
});

reft.once("value", function(snapshot) {
  console.log(snapshot.val());
});

app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use('/public/uploads',express.static(__dirname + '/public/uploads'));
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

app.get('/', function (req, res) {
  res.sendfile('./index.html')
})

var estRef = refu.child("estudiante");
var profRef = refu.child("profesor");
// create user
app.post('/api/createProf', function(req, res) {
   // var userEmail = req.body.user_email;
   		var data = req.body;
		  profRef.push(data, function(err) {
			if (err) {
				res.send(err)
			} else {
				// var key = Object.keys(snapshot.val())[0];
				// console.log(key);
				res.json({message: "Success: Profesor Save.", result: true});
			}
		});
});


// create user
app.post('/api/createEst', function(req, res) {
   var email = req.body.email;
   var password = req.body.password;

   admin.auth().createUser({
     email: email,
     password: password
   })
     .then(function(userRecord) {
       // See the UserRecord reference doc for the contents of userRecord.
       console.log("Successfully created new user:", userRecord.uid);
       res.json({message: "Success: Tema Save.", result: true});
     })
     .catch(function(error) {
       console.log("Error creating new user:", error);
     });
});


app.post('/api/createTema', function(req, res) {
   // var userEmail = req.body.user_email;
   		var data = req.body;
		  reft.push(data, function(err) {
			if (err) {
				res.send(err)
			} else {
				// var key = Object.keys(snapshot.val())[0];
				// console.log(key);
				res.json({message: "Success: Tema Save.", result: true});
			}
		});
});

app.post('/api/createSalones', function(req, res) {
   // var userEmail = req.body.user_email;
   		var data = req.body;
		  refs.push(data, function(err) {
			if (err) {
				res.send(err)
			} else {
				// var key = Object.keys(snapshot.val())[0];
				// console.log(key);
				res.json({message: "Success: Tema Save.", result: true});
			}
		});
});

app.post('/api/createBlogs', function(req, res) {
   // var userEmail = req.body.user_email;
   		var data = req.body;
		  refb.push(data, function(err) {
			if (err) {
				res.send(err)
			} else {
				// var key = Object.keys(snapshot.val())[0];
				// console.log(key);
				res.json({message: "Success: blogsSave.", result: true});
			}
		});
});
app.post('/api/createVideos', function(req, res) {
   // var userEmail = req.body.user_email;
   		var data = req.body;
		  refv.push(data, function(err) {
			if (err) {
				res.send(err)
			} else {
				// var key = Object.keys(snapshot.val())[0];
				// console.log(key);
				res.json({message: "Success: videos Save.", result: true});
			}
		});
});



app.listen(3000);
console.log("port is 3000");
