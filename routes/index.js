var data = require('../data.json');

var feed = require('../feed.json');

var progress = require('../taskData.json');

var topPerson = { score: 0 };

var array1 = progress.cogs.length;
var array2 = progress.finished.length;

var prog = 100*(array1/(array1+array2));

data.indexData.prog = prog;



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

console.log(array1);
// console.log(data);



exports.view = function(req, res) {
    res.render('index', data.indexData);
};
