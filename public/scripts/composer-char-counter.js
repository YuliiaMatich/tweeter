$(document).ready(function() {  //  runs a callback when the DOM is ready to be manipulated with jQuery
  $('#tweet-text').on('input', function () { // when element wit id "tweet-text" gets and input, call back function is called;
    $('.counter').text(140 - this.value.length); // "counter class is called. this.value = intput value of tweet text"
    if ( $('.counter').text() < 0 ) { // change color if counter < 0;
      $('.counter').addClass('counter-error');
    } else {
      $('.counter').removeClass('counter-error');
    }
  })
});


