var data = require('../feed.json');
var others = require('../others.json')

var everyone = {
	"known": data,
	"unknown": others
}

exports.view = function(req, res){
	res.render('feed', everyone);
};