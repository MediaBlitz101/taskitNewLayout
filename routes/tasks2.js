var data = require('../taskdata.json');

exports.view = function(req, res){
	res.render('tasks2', data);
};

/**var whatever = () {
	return jglfkjlsdkjhlfdkj
};
exports.view = function(req, res){
	console.log(data);
	res.render('tasks', whatever);
};**/