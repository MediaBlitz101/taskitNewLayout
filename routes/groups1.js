var data = require('../groups1.json');

exports.view = function(req, res){
	res.render('groups1', data);
};