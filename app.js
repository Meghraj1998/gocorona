const Express=require('express');
var router=require('./router/register');
var path=require('path');
var bodyParser = require('body-parser')
var mongoose=require('./config/mongoose');

const app=Express();
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(Express.static(path.join(__dirname, 'asset')));
 
app.use('/', router);

app.listen(2000, function(err){

    console.log("server starts on"+2000);

});