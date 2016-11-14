//edit route 
/*exports.editTask = function(req, res) {
	var newTask = {

			"idx" : req.query.idx,

			"task": req.query.task,

			"subject": req.query.subject,

			"dueDate": req.query.dueDate,
		};


if(req.query.task){
	var array = req.app.get('taskData').cogs;
	array.splice(req.query.idx, 1);
	req.app.get('taskData').cogs.push(newTask);
}; 


 	// res.render('tasks', data);

 res.redirect('/tasks');
}; */

exports.editTask = function(req, res) {
	var newTask = {

			"idx" : req.query.idx,

			"task": req.query.task,

			"subject": req.query.subject,

			"dueDate": req.query.dueDate,
		};


if(req.query.task){
	var tasks = req.app.get('taskData').cogs;
	tasks.splice(req.query.idx, 1, newTask);
	req.app.get('taskData').cogs = tasks;
};


 	// res.render('tasks', data);
 res.redirect('/tasks');
};