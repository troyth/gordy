

var gordy = require('./lib/gordy');

var list_html = require('./template');




module.exports = function(){
	document.write( list_html );

	var UI = new gordy.UI({
		url: "http://www.site-to-site.com/api/v1/listen"
	});

	
};