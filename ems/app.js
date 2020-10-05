/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   08 September 2020
; Modified by: Marie Nicole Barleta
; Description: Server file for the ems application
;===========================================
*/

//require statements.

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");
var helmet = require("helmet");


var mongoose = require('mongoose');
var Employee = require('./models/employee');


// database connection string to MongoDB Atlas
var mongoDB = "mongodb+srv://admin:1234@buwebdev-cluster-1.gexte.mongodb.net/ems";

mongoose.connect(mongoDB, {
  useMongoClient: true,
});

//Initialization express app
var app = express();
// Body parser
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// setup csrf protection
var csrfProtection = csrf({ cookie: true });


//MongoDB connection alert
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", function() {
  console.log("Application connected to mLab MongoDB instance");
});



// Morgan logger
app.use(logger('short'));

// Cookie parser
app.use(cookieParser());
// Helmet
app.use(helmet.xssFilter());
// CSRF protection
app.use(csrfProtection);

// CSRF token
app.use(function(req, res, next) {
  var token = req.csrfToken();
  res.cookie('XSRF-TOKEN', token);
  res.locals.csrfToken = token;
  next();
});

//css
app.use(express.static(__dirname + '/public'));

//statements
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 8080);


//routing
app.get('/', function(req, res) {
      res.render('index', {
        title: 'EMS | Home page',
        active: "home",
      });
  });


//new page
app.get('/new', function(req, res) {
  res.render('new', {
    title: 'EMS | New',
    active: 'new',
  });
});

//list
app.get('/list', function (req,res){
  Employee.find({}, function (error, employees) {
    if (error) {
      throw error;
    }
    res.render('list',{
      title: 'Employee List',
      active: 'view',
      employees: employees,
    });
  });
});


//post
app.post('/process', function(req, res) {
  console.log(req.body);

  if (!req.body.firstName && !req.body.lastName && !req.body.title){
    res.status(400).send('First Name, Last Name and Title');
    return;
  }

// get request's form data
  var first_name = req.body.firstName;
  var last_name = req.body.lastName;
  var title = req.body.title;

  // create employee model
 var employee = new Employee({
  firstName: first_name,
  lastName: last_name,
  title: title,
  });

  // save
 employee.save(function(error) {
    if (error) {
      throw error;
    }
      console.log(first_name + ' saved successfully!');

  });
  res.redirect('/list');
});


app.get("/view/:firstName/:lastName/:title", function (request, response) {

  var firstName = request.params.firstName;
  var lastName = request.params.lastName;
  var title = request.params.title;

  console.log(firstName);
  console.log(lastName);
  console.log(title);
  Employee.find({
    'firstName': firstName,
    'lastName': lastName,
    'title': title
  },
     function(error, employee) {

      if (error) throw error;

      console.log(employee);

      if (employee.length > 0) {

          response.render("view", {

              title: "Employee Record",
              active: "view",
              employee: employee

          })

      }

      else {

          response.redirect("/list")

      }

  });

});


// Creates a new Node.js server and listens on local port 8080.

http.createServer(app).listen(app.get('port'), function()
{ console.log('Application started on port'+ app.get('port')) });
