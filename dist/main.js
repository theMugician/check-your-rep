const List = () => {
  let list = [
    { }
  ]
  return list;
}
const DOM = () => {
  const dom = {}

  dom.score = document.getElementsByClassName('score')[0]

  return dom
}

const State = {
  score: 0
}

const Handler = () => {
  const handler = {}

  handler.updateScore = function(curr, added) { 
    let end = curr + added
    let ticks = 20
    let speed = 40

    let randomNumbers = [end]

    for (let i = 0; i < ticks - 1; i++) {
      randomNumbers.unshift(
        Math.floor(Math.random() * (end - curr + 1) + curr)
      )
    }

    randomNumbers.sort((a, b) => {return a - b})

    let x = 0
    let interval = setInterval(function () {
      
       DOM().score.innerHTML = randomNumbers.shift()

       if (++x === ticks) {
          window.clearInterval(interval)
       }

    }, speed)

    State.score = end
  }

  return handler
}

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  })
}

function statusChangeCallback(response) {
  if(response.status === 'connected') {
    console.log( 'Logged in and authenticated' )
    Handler().updateScore(State.score, 10)
  } else {
    console.log('Not authenticated')
  }
}
