



function UI(opts){

	//if host not set, can't continue
	if(!opts || !opts.hasOwnValue('host')){
		return undefined;
	}

	var socket = require('socket.io')(this.host);

	socket.on('connect', function(){
	    socket.on('event', function(data){
	    	
	    });

	    socket.on('disconnect', function(){

	    });
  	});


}







module.exports = UI;