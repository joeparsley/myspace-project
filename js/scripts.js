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
  $('.down-triangle, .up-triangle').click(function() {
    if (!expanded) {
      $('.content-nav .wrapper').css('overflow', 'auto');
      $('.content-nav').css('height', 'auto');
      expanded = true;
      $('.down-triangle').hide();
      $('.up-triangle').show();
    } else {
      $('.content-nav').css('height', '80px');
      $('.content-nav .wrapper').css('overflow', 'hidden');
      expanded = false;
      $('.down-triangle').show();
      $('.up-triangle').hide();
    }
  });
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
