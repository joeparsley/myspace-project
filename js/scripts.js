$(document).ready(function() {
  function resize() {
    var width = $('.hero').width();
    $('.hero').height(width/3);
  }
  resize();

  $(window).on('resize', function() {
    resize();
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
