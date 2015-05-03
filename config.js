//localhost configuration
var PORT = 3000;
var HOSTNAME = "http://localhost";

//Cloud 9 Configuration (https://c9.io/)
if(process.env.PORT && process.env.C9_HOSTNAME){
	PORT = process.env.PORT;
	HOSTNAME = process.env.C9_HOSTNAME;
}
//codio Configuration (https://codio.com/)
if(require('os') && require('os').hostname()){
    HOSTNAME = require('os').hostname()+ '.codio.io'
}

module.exports = {
	"PORT" : PORT,
	"HOSTNAME" : HOSTNAME
}