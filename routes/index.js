var data = require('../data.json');
var feed = require('../feed.json');


var tryToBeat = { score: Number.MAX_SAFE_INTEGER };

// Write the callback function
function handleFile(err, data) {
    if (err) throw err
    obj = JSON.parse(data)
        // You can now play with your datas
}

feed.posts.forEach(function(post) {
    if (post.score > data.indexData.myScore && tryToBeat.score > post.score)
        tryToBeat = post;
});
data.indexData.tryToBeat = tryToBeat;

exports.view = function(req, res) {
    var toDo = req.app.get('taskData').cogs.length;
    var fin = req.app.get('taskData').lifecount.length;
    var prog = 100*(fin/(toDo+fin));
    var active = "active";


	data.indexData.prog = Math.round(prog);
	res.render('index', data.indexData);

};
