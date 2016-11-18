exports.deleteTask2 = function(req, res) {
	var newTask = {

			"idx" : req.query.idx,

			"task": req.query.task,

			"subject": req.query.subject,

			"dueDate": req.query.dueDate,
		};


if(req.query.task){

	var tasks = req.app.get('taskData').cogs;
	tasks.splice(req.query.idx, 1);
	req.app.get('taskData').cogs = tasks;
	
	req.app.get('taskData').finished.push(newTask);
	req.app.get('taskData').lifecount.push(newTask);

};


 	// res.render('tasks', data);
 res.redirect('/tasks2');
};