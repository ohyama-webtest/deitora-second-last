$(function(){
  $('a[href^="#"]').click(function(){
    let speed = 600;
    let id = $(this).attr('href');
    let target = $("#" == id ? "html" : id);
    let position = $(target).offset().top;
    $('html, body').animate({
      scrollTop: position
    }, speed);
  });

  $('.question').click(function(){
    $(this).next().slideToggle();
  });

});