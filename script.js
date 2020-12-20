$(function() {
    $("#menubtn").click(function(){
      $("header nav").toggleClass("active");
      $(this).toggleClass("active");
      return false;
    });

    $('a[href^="#"]').click(function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });
