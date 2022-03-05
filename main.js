// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () => {
  const heartStrings = document.querySelectorAll('.like-glyph')
  heartStrings.forEach(heartStrings => heartStrings.addEventListener('click', heartBeat))
  function heartBeat(e) {
    mimicServerCall()
    .then(() => {
      if (e.target.textContent === EMPTY_HEART) {
        e.target.textContent = FULL_HEART
        e.target.className = "activated-heart"
      }
      else if (e.target.textContent === FULL_HEART) {
        e.target.textContent = EMPTY_HEART
        e.target.className = "like-glyph"
      }
    })
    .catch(() => {
      const whoops = document.getElementById('modal')
      whoops.className = "visible"

      setTimeout(() => {
        whoops.className = "hidden"}, 3000)}
    )}
      })





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
