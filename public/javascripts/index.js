// gets the all group modal 
var friendmodal = document.getElementById('friend-modal');

//button that you will click 
var addfriend = document.getElementById('add-friend');

var closemodal = document.getElementById('closemodal');

addfriend.onclick = function() {
    friendmodal.style.display = "block";
}

closemodal.onclick = function() {
    friendmodal.style.display = "none";
}

function sortDescending(a, b) {
    var date1 = $(a).find(".year").text();
    date1 = date1.split('-');
    date1 = new Date(date1[2], date1[0], date1[1] - 1);
    var date2 = $(b).find(".year").text();
    date2 = date2.split('-');
    date2 = new Date(date2[2], date2[0], date2[1] - 1);

    return date1 > date2 ? 1 : -1;
};
$(document).ready(function() {
    $('#all_elements .element').sort(sortDescending).appendTo('#all_elements');
});



//to see index of task array (seems to be gettiung )someArray.splice(x,1);
$(document).ready(function() {
    var index = $('.task-name').index(this);
    $('.task-name').click(function() {
        $('#out').append('<p>' + $('.task-name').index(this) + '</p>');
        $('.task-name').splice(index,1);
    });
});

/**function priorityColor(a) {
    var date1 = $(a).find(".year").text();
    date1 = date1.split('-');
    date1 = new Date(date1[2], date1[0], date1[1] - 1);
    var date2 = new Data();
    

    if(data2 - date1 > 3){

    }
};**/
