var data = require("../credentials.json");


exports.loginSub = function(req, res) {
    var loginSubmit = {

        "email": req.query.email,

        "password": req.query.password,

        "error": true

    };

    console.log("works");

    // Your code goes here
    if ((loginSubmit.email == 'admin@ucsd.edu') && (loginSubmit.password == 'admin'))
    //redirect to home page
        res.redirect('/');
    else
        res.redirect('/loginError');
    	/**data.credentials.push(loginSubmit);

        res.render(function(req,res){
        	req.send(data.credentials);
   		}, '/login');**/


    // res.render('tasks', data);

};
