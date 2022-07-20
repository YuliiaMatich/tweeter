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
        <div class="added-tweet-text">${tweetData.content.text}</div>
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

    for (user of tweets) {// loops through tweets
      const $tweet = createTweetElement(user); // calls createTweetElement for each tweet
      $('#tweets-container').prepend($tweet);// takes return value and appends it to the tweets container
    }
  }


  const $form = $('.new-tweet-form');
  $form.on('submit', function (event) { // event listener
    event.preventDefault(); // to prevent the default form submission behaviour
    console.log($('#tweet-text').val());
    $.ajax({
      type: "POST",
      url: "/tweets",
      data: $('.new-tweet-form').serialize()
    });
  });

  const loadTweets = function () {
    $.ajax('/tweets', { method: 'GET' }) // Ajax GET request to  /tweets to server
    .then(function (serverTweets) { // callback when service responds
      renderTweets(serverTweets); // send received array with tweets to renderTweets function
    });
  }

  loadTweets();
});






