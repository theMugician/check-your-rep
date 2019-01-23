const List = () => {
  let list = [
    { }
  ]
  return list;
}
let score = 0
let scoreEl = document.getElementsByClassName('score')

function addToScore() {
  score += 10
  scoreEl[0].innerHTML = score
}

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  if(response.status === 'connected') {
    console.log( 'Logged in and authenticated' )
    addToScore()
  } else {
    console.log('Not authenticated')
  }
}

document.addEventListener('DOMContentLoaded', () => {
/*
function renderNewScore() {
  scoreEl.innerHTML = score
}
*/
})

/**
 * @param {String} eventName.
 * @param {Function} functionName.
 * @param {String, Integer} data.
 * @returns {Object} An instance of the Event Emmitter object.
 */
const EventEmitter = () => {
  const obj = {}

  obj.events = {}

  obj.on = (eventName, fn) => {
    obj.events[eventName] = obj.events[eventName] || []
    obj.events[eventName].push(fn)
  }

  obj.off = (eventName, fn) => {
    if (obj.events[eventName]) {
      for (var i = 0; i < obj.events[eventName].length; i++) {
        if (obj.events[eventName][i] === fn) {
          obj.events[eventName].splice(i, 1)
          break
        }
      }
    }
  }

  obj.emit = (eventName, data) => {
    if (obj.events[eventName]) {
      obj.events[eventName].forEach((fn) => { fn(data) })
    }
  }

  return obj
}

/**
 * @param {function} takes a list of observers.
 * @returns {} NULL.
 */
const Observable = () => {
  const obs = {}

  obs.observers = []

  obs.subscribe = (fn) => {
    obs.observers.push(fn)
  }

  obs.unsubscribe = (fn) => {
    obs.observers = obs.observers.filter(subcriber => subscriber !== fn)
  }

  obs.notify = (data) => {
    obs.observers.forEach(observer => observer(data))
  }

  return obs
}