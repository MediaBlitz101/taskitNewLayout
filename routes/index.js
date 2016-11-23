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

    var tasks = req.app.get('taskData').cogs;
    
    var toDo = tasks.length;
    var fin = req.app.get('taskData').lifecount.length;
    var prog = 100*(fin/(toDo+fin));
    var active = "active";

    var dueToday = [];
    var utc = new Date().toJSON().slice(0,10);
    var today = utc.substr(5, 10).concat("-").concat(utc.substr(0, 4));
    tasks.forEach ( function (task) {
        if (task.dueDate == today) {
            dueToday.push(task);
        }
    });

    data.indexData.dueToday = dueToday;
	data.indexData.prog = Math.round(prog);

    data.indexData.showAlternate = true;
	res.render('index', data.indexData);
};
