var data = require('../profiles.json');
var others = require('../others.json');

var people = data.concat(others);

exports.personInfo = function(req, res) {
	
	var name = req.params.username;
	var person;
	var isFriend = false;

	for (var i = 0; i < data.length; i++) {
		console.log(data[i].username);
		if (data[i].username == req.params.name) {
			// console.log(i, "\t", data[i]);
			person = data[i];
			isFriend = true;
		}
	}

	if (!isFriend) {
		for (var i = 0; i < others.length; i++) {
			console.log(others[i].username);
			if (others[i].username == req.params.name) {
				// console.log(i, "\t", others[i]);
				person = others[i];
			}
		}
	}

	person.isFriend = isFriend;
	res.render('profile', person);
}