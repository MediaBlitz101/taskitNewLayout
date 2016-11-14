
// gets the all group modal 
var groupmodal = document.getElementById('groupmodal');

//button that you will click 
var addbtn = document.getElementById('addbtn');

var closemodal = document.getElementById('closemodal');

addbtn.onclick = function() {
	groupmodal.style.display = "block";
}

closemodal.onclick = function(){
	groupmodal.style.display = "none";
}






