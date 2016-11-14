var data = require('../profiles.json');
var others = require('../others.json');

var people = data.concat(others);

exports.personInfo = function(req, res) {
	
	var name = req.params.username;
	var person;

	for (var i = 0; i < people.length; i++) {
		console.log(people[i].username);
		if (people[i].username == req.params.name) {
			// console.log(i, "\t", data[i]);
			person = people[i];
		}
	}

	res.render('profile', person);
}