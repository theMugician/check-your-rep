const DOM = () => {
  const dom = {}

  dom.score = document.getElementsByClassName('score')[0]

  return dom
}

const State = () => {
  const state = {}

  state.score = 0
  state.isLoggedIn.facebook = 0
  state.isLoggedIn.linkedin = 0

  return state
}

const Handler = () => {
  const handler = {}

  handler.addToScore = function() { DOM.score.innerHTML = State.score }
  return handler
}

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  if(response.status === 'connected') {
    console.log( 'Logged in and authenticated' )
    Handler.addToScore()
  } else {
    console.log('Not authenticated')
  }
}
