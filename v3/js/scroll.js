$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if(wScroll > $('.container-1').offset().top - ($(window).height() / 0.9)) {

    $('.container-1').each(function(){

      $('.container-1').addClass('container-1-show');

    });


  }

});
