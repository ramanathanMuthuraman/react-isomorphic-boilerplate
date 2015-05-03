//localhost configuration
var PORT = 3000;
var HOSTNAME = "http://localhost";

//Cloud 9 Configuration (https://c9.io/)
if(process.env.PORT && process.env.C9_HOSTNAME){
	PORT = process.env.PORT;
	HOSTNAME = process.env.C9_HOSTNAME;
}

module.exports = {
	"PORT" : PORT,
	"HOSTNAME" : HOSTNAME
}