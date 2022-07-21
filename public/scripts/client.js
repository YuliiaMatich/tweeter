/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function () { // to add it to the html page when document is loaded to the browser 
  const createTweetElement = function (tweetData) {
    const markup = `
  <article class="tweet">
        <header>
          <div class="image-name">
          <img class ="user-image"src="${tweetData.user.avatars}"> 
          <p>${tweetData.user.name}</p>
          </div>
          <div class="user-name">${tweetData.user.handle}</div>
        </header>
        <div class="added-tweet-text">${escape(tweetData.content.text)}</div>
        <footer>
          <p>${timeago.format(tweetData.created_at)}</p>
          <div class="icons">
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
          </div>
        </footer>
      </article>
  `
    return markup;
  }

  const renderTweets = function (tweets) {
    const container = $('#tweets-container');
    container.empty();
    for (user of tweets) {// loops through tweets
      const $tweet = createTweetElement(user); // calls createTweetElement for each tweet
      container.prepend($tweet);// takes return value and appends it to the tweets container
    }
  }


  const $form = $('.new-tweet-form');
  $form.on('submit', function (event) { // event listener
    console.log('submit')
    event.preventDefault(); // to prevent the default form submission behaviour
    console.log($('#tweet-text').val());
    if (!$('#tweet-text').val()) {
      $('.error-message').slideUp();
      return $('.error-message').text('Your tweet is empty.').slideDown();
    }

    if ($('#tweet-text').val().length > 140) {
      $('.error-message').slideUp();
      return $('.error-message').text('Characters limit was exceeded.').slideDown();

    }
    $('.error-message').slideUp();

    $.ajax({
      type: "POST",
      url: "/tweets",
      data: $('.new-tweet-form').serialize()
    })
      .then(() => {
        loadTweets()
      });
  });


  const loadTweets = function () {
    $.ajax('/tweets', { method: 'GET' }) // Ajax GET request to  /tweets to server
      .then(serverTweets => { // callback when service responds
        renderTweets(serverTweets); // send received array with tweets to renderTweets function
      });
  }

  const escape = function (str) { // a function to escape some text
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  loadTweets();
});






