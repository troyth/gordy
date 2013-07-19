
var io = require('../socket.io');


function UI(opts){

	//if host not set, can't continue
	if(!opts || !opts.hasOwnValue('host')){
		return undefined;
	}

	var socket = new io(this.url);

	socket.on('connect', function(){
		console.log('connected!');

	    socket.on('event', function(data){
	    	console.log('event: ');
	    	console.dir(data);
	    });

	    socket.on('disconnect', function(){
	    	console.log('disconnected!');
	    });
  	});


}







module.exports = UI;