exports.permaDelete = function(req, res) {
	var newTask = {

			"idx" : req.query.idx,

			"task": req.query.task,

			"subject": req.query.subject,

			"dueDate": req.query.dueDate,
		};


if(req.query.task){

	var tasks = req.app.get('taskData').finished;
	tasks.splice(req.query.idx, 1);
	req.app.get('taskData').finished = tasks;
	
	

};


 	// res.render('tasks', data);
 res.redirect('/tasks');
};