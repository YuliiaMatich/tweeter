/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function () { // to add it to the html page when document is loaded to the browser 

  const data = [
    {
      "user": {
        "name": "Apollo Alien",
        "avatars": "/images/avatar.png"
        ,
        "handle": "@MrApollo"
      },
      "content": {
        "text": "First alien's tweet"
      },
      "created_at": 1461116232228
    },
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

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

  const renderTweets = function (tweets) {

    for (user of tweets) {// loops through tweets
      const $tweet = createTweetElement(user); // calls createTweetElement for each tweet
      $('#tweets-container').prepend($tweet);// takes return value and appends it to the tweets container
    }
  }



  renderTweets(data)
});

