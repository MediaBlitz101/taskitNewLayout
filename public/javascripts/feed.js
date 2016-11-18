

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

    var posttext = '<li class="post"> \
        <div class="post-person"> \
            <a class="post-person-profilelink" href="javascript:void(0);"> \
                <img class="profile-avatar" src="http://lorempixel.com/500/500/people/"> \
                <strong class="profile-name">Mystery Person</strong> \
            </a> \
        </div> \
        <div class="post-text"> \
            <p> \
                Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. \
            </p> \
            <a class="btn btn-xs btn-default"><span class="glyphicon glyphicon-thumbs-up"></span> Like!</a> \
        </div> \
    </li>';


    $(window).scroll(function() {
        if ($(document).height() <= $(window).scrollTop() + $(window).height()) {
            $('.media-list').append(posttext);
        }
    })



  addfriend.onclick = function() {
    friendmodal.style.display = "block";
}

$('.close-friend-modal').click(function(){
  $('#friend-modal').fadeOut();
});


  
})


