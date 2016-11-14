$('.list-group-item').click(taskButtonActions);


$('.edit').click(editItem);

function editItem(){
    $('#editmodal').modal('show');
}

function taskButtonActions(event) {
    console.log($(event.target));
    if($(event.target).hasClass('done-btn'))
        $(event.target.offsetParent).appendTo('#donelist');
    if($(event.target).hasClass('edit-btn'))
        $(event.target.offsetParent).find('.edit-modal').fadeToggle();

}

// When the user clicks on the button, open the modal 
$('#add-btn').click(function() {
    $('#add-modal').fadeToggle();
});

$('#close-add-modal').click(function() {
    $('#add-modal').fadeToggle();
});
$('.close-edit-modal').click(function() {
    $('.edit-modal').fadeOut();
});

$(function() {
    $(".flatpickr").flatpickr({
        // disable opening calendar by clicking on input
        dateFormat: "m-d-Y"
    });
});

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
    $('#testing .list-group-item').sort(sortDescending).appendTo('#testing');
});