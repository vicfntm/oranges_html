$(document).ready(function () {
  $('.wrapper_object').css('visibility', 'hidden');
  indexOrder = [];
  $('.wrapper_switcher').click(function () {
    var here = $(this).index();
    console.log(here);
    $('.wrapper_object:nth-child(' + (here + 1) + ')')
      .css('visibility', 'visible');
    indexOrder.push(here + 1);
  })
  $(document).keyup(function (e) {
      if (e.keyCode == 27 && indexOrder.length > 0) {
        $('.wrapper_object:nth-child(' + indexOrder.pop() + ')')
          .css('visibility', 'hidden');
    }
  })
});