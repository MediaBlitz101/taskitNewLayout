var data = require('../feed.json');
var others = require('../others.json')

var everyone = {
	"known": data,
	"unknown": others
}


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

exports.view = function(req, res){
	res.render('feed', everyone);
};
