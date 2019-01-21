document.addEventListener('DOMContentLoaded', () => {

/**
 * @param {} NULL.
 * @returns {Object} An instance of App object.
 */
const App = () => {
  window.onerror = function(message, file, line, col, error){ console.log(arguments); }
  let app
  let listings
  let shuffledListings

  const construct = () => {
    app = {}
  }

  construct()

  const DOM = () => {
    let dom = {}

    return dom
  }

  const State = () => {
    let state = {}

    return state
  }

  const Render = () => {
    let render = {}

    render.init = (template, parent, currentListings) => {
    }

    return render
  }

  const Update = () => {
    const update = {}

    return update
  }

  const Template = () => {
    let template = {}

    template.message = (message, type, outcome, className, image, display = '') => {
      return `
        <div class='message slide__message${display}' style='background-image: url(img/${image});'>
          <h1 class=${className}>${outcome}</h1>
          <h2>${type}</h2>
          <p>${message}</p>
          <button class='button button--next'>NEXT</button>
        </div>
      `
    }

    template.list = (i, image, type, desc) => {
      return `
        <li data-type='${type}' data-desc='${desc}' data-img='${image}' class='listings__pane-${i} ${position}'>
          <div class='item'>
            <div style='background-image: url(img/${image})' class='img'></div>
            <div class='like'></div>
            <div class='dislike'></div>
          </div>
        </li>
      `
    }

    return template
  }

  const Init = () => {
    Render.init()
    //Add eventListeners to list items
    //Add eventListeners for Action Buttons
  }

  const Controller = () => {

  }

}

App();

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

/**********/