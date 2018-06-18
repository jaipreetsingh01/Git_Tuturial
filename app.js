console.log("Starting App....");

var fs = require('fs');
var os = require('os');

var notes = require('./nodes.js')
var result = notes.add(2,3);
console.log(result);


//var user = os.userInfo();
//fs.appendFileSync('info.txt',  'Your Username is ' + user.username );
//console.log(user);
