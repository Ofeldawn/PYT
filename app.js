/*//////////////////
// Server settings//
/////////////////*/

//Require extension packs for nodejs apps development (expres, morgan, nodemailer, bcrypt-nodejs, gm, less ?)

var express = require('express');
var morgan = require('morgan');
var serveStatic = require('serve-static')

var app = express();

/*Access to resources by serving static content
Test0: display moods.json 
*/
app.use(serveStatic(__dirname + 'resources'));

/*Test1: display test.ejs without any nodejs variables SUCCESS
Test2: display test.ejs with a nodejs variable: message numéro 0 from moods SUCCESS
*/

app.get('/test1/', function(req, res){
  res.render('test.ejs');
});


var msgtest = "0";
app.get('/test2', function(req, res){
    var display = getMood(msgtest);
    res.render('test.ejs', {"init":display});
});


//Listening on port 8080 - in execution for now: http://localhost:8080
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


