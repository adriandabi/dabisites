!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');


(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));



$(document).ready(function(){
  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
    var href = $.attr(this, 'href');
    if (href !== undefined && href != '#') {
      $root.animate({
        scrollTop: $(href).offset().top
      }, 500, function () {
        window.location.hash = href;
      });
    }
    return false;
  });

  $(function () {
    $('#item1').tooltip();
  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  $(function () {
    $('[data-toggle="modal tooltip"]').tooltip();
  });


  $('#button').on('click', function(){
    console.log('clicked')
    var comment=$('.message-box').val();
      if(comment===""){
        $('.message-box').css('border','2px solid red');
      }
      else{
        $('.message-box').css('border','2px solid black');
        $('#visible-comment').html(comment);
        console.log(comment);
        $('.message-box').hide();
        return false;
      }
  });

  $(".message-box").on('keyup',function(){
    console.log('keyup happened');
    var charCount=$('.message-box').val().length;
      if(charCount>50){
        $('#char-count').css('color','red');
      }
      else{
        $('#char-count').css('color','black');
      }
    console.log(charCount);
    $("#char-count").html(charCount);
  });
  $('#message-box').css('border','2px solid red');

  // work section
  for (var i=0; i<works.length;++i){
    $("#work").append("\
    <a herf='#' class='work-img'>\
    <div class='col-sm-6 col-md-3'>\
        <img class='img-responsive' src='" + works[i].pic + "'>\
        <span class='info'>"+ works[i].title +"</span>\
      </a>\
    </div>\
    ");
  var images=$("#work img");
  if(i%2===0){
    $(images[i]).css('border','2px solid dodgerblue');
  } else{
    $(images[i]).css('border','2px solid salmon');
  };
  };
  $(".work-img").mouseenter(function(){
    $(".info",this).show();
  }).mouseleave(function(){
    $(".info",this).hide();
  });
});
