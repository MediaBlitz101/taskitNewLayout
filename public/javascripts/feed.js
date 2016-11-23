if (typeof jQuery === 'undefined') {
    throw new Error('This file requires jQuery');
}

$(document).ready(function() {

    $('.post')
        .mouseover(function(e) {
            e.preventDefault();
            $(this).css('border-left-color', 'aliceblue');
        })
        .mouseout(function(e) {
            $(this).css('border-left-color', '');
    });

    $('.like').click(function(e) {
        $(this).toggleClass("active");
        var score = +$(this).siblings('.score').html();
        if ($(this).hasClass("active")) {
            score += 1;
        } else {
            score -= 1;
        }
        $(this).siblings('.score').html(score.toString());
    });

    $('.friendreq').click(function() {
        $(this).fadeOut();
        alert("Friend request sent!");
    });

    var posttext = '<li class="media"> \
            <a class="media-left waves-light" href="javascript:void(0);"> \
                <img class="rounded-circle profile-avatar" src="http://lorempixel.com/500/500/people/"> \
            </a> \
        <div class="media-body"> \
        <a href="javascript:void(0);"><strong class="media-heading">Mystery Person</strong></a> \
            <p> \
                Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. \
            </p> \
            <a class="btn btn-default btn-sm like"> Like!</a> \
            <span class="score">37</span> liked! \
        </div> \
    </li>';


    $(window).scroll(function() {
        if ($(document).height() <= $(window).scrollTop() + $(window).height() + 1) {
            $('#main-feed').append(posttext);
        }
    })



  addfriend.onclick = function() {
    friendmodal.style.display = "block";
}

$('.close-friend-modal').click(function(){
  $('#friend-modal').fadeOut();
});


  
})


