$(document).ready(function() {
  function resize() {
    var width = $('.hero').width();
    $('.hero').height(width/3);
  }
  resize();

  $(window).on('resize', function() {
    resize();
    $('.card-image img').each(function(index) {
      $(this).attr('src', 'img/cards/600x600(' + index + ').jpg');
      $(this).height($(this).width() / 2);
    });
  });

  $('.card-image img').each(function(index) {
    $(this).attr('src', 'img/cards/600x600(' + index + ').jpg');
    $(this).height($(this).width() / 2);
  });

  var expanded = false;
  var navHeight = $('.content-nav').height();
  $('.content-nav a').click(function() {
    if (!expanded) {
      $('.content-nav').animate({height: '1000px'}, 1000);
      expanded = true;
    } else {
      $('.content-nav').animate({height: navHeight}, 1000);
    }
  })
  // var i = 2;
  // setInterval(function() {
  //   $('.main-square img').attr('src', 'img/hero/hero' + i +'.jpg');
  //   i++;
  //   if (i === 5) {
  //     i = 1;
  //   }
  // },3000);
});
//
// var counter = 1;
// $('imgselector').each(function() {
//   $(this).attr('src', 'path/600x600(' + counter + ').jpg');
//   counter++;
// });
