/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
};



const createTweetElement = function(tweetData) {
  const markup = `
  <article class="tweets">
        <header>
          <div class="image-name">
          <img class ="user-image"src="${tweetData.user.avatars}"> 
          <p>${tweetData.user.name}</p>
          </div>
          <div class="user-name">${tweetData.user.handle}</div>
        </header>
        <div class="added-tweet-text">${tweetData.content.text}</div>
        <footer class="tweet-footer">
          <p>${tweetData.created_at}</p>
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

const $tweet = createTweetElement(tweetData);

$(document).ready(function() { // to ad it to the html page when document is loaded to the browser 
  $('.container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});
