/*//////////////////
// Server settings//
/////////////////*/

//Require extension packs for nodejs apps development (expres, morgan, nodemailer,bcrypt-nodejs,gm, less ?)

var express = require('express');
var morgan = require('morgan');

var app = express();

//Access to resources
app.use(express.static(__dirname + '/resources'));

/*Test1: display test.ejs without any nodejs variables SUCCESS
Test2: display test.ejs with a nodejs variable: message numéro 0 from moods 
*/

app.get('/adm/', function(req, res){
  res.render('test.ejs');
});

/*
var msgtest = "0";
app.get('/', function(req, res){
    var display = getMood(msgtest);
    res.render('test.ejs', {"init":message, "msg":req.init.message});
});
*/

//Port - in execution for now: http://localhost:8080
app.listen(8080);

/*/////////////////////////////
//Get informations to display//
////////////////////////////*/

function getMood(numéro){
    
    var msg = require('./resources/moods.json');
    var init = JSON.parse('{"numéro":"0", "date":"18/01/2016", "message":"Let\'s code everything!", "destinataires":"Dev2", "code_couleur":"vert"}');
    
    for(var i=0; i<msg.moods.length; i++){
        if(msg.moods[i].numéro == numéro){
            init = msg.moods[i];
        }
    }
    
    return init;
        
};


