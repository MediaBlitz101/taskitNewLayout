var data = require('../data.json');

var feed = require('../feed.json');

var topPerson = {score: 0};

// Write the callback function
function handleFile(err, data) {
    if (err) throw err
    obj = JSON.parse(data)
    // You can now play with your datas
}

feed.posts.forEach(function(post){
	if(post.score > topPerson.score)
		topPerson = post;
});

data.indexData.topPerson = topPerson;

// console.log(data);



exports.view = function(req, res){
	res.render('index2', data.indexData);
};