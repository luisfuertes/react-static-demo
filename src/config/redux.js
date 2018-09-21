import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducers from '../redux/'

if (typeof window === 'undefined') {
  global.window = {}
}

const logger = createLogger({
  collapsed: true
})

/* eslint-disable no-underscore-dangle */
const store = createStore(
  // https://redux.js.org/api-reference/createstore
  reducers, // reducers
  {},
  applyMiddleware(thunk, logger) // middlewares
)
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
/* eslint-enable */

export default store
