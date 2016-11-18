var data = require('../data.json');

var feed = require('../feed.json');

var progress = require('../taskData.json');

var topPerson = { score: 0 };

/**var toDo = progress.cogs.length;
var fin = progress.finished.length;

var prog = 100*(fin/(toDo+fin));

data.indexData.prog = prog;**/




// Write the callback function
function handleFile(err, data) {
    if (err) throw err
    obj = JSON.parse(data)
        // You can now play with your datas
}

feed.posts.forEach(function(post) {
    if (post.score > topPerson.score)
        topPerson = post;
});

data.indexData.topPerson = topPerson;


// console.log(data);




exports.view = function(req, res) {
    var toDo = req.app.get('taskData').cogs.length;
    var fin = req.app.get('taskData').finished.length;
    var prog = 100*(fin/(toDo+fin));
    var active = "active";


	data.indexData.prog = Math.round(prog);
	res.render('index', data.indexData);

};
