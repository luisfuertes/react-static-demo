import * as types from './types'

const initialState = {
  isFetching: false,
  authError: '',
  token: null,
  language: null,
  init: false
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_AUTH_INIT:
      return { ...state, init: true }
    case types.SET_AUTH_TOKEN:
      return { ...state, token: action.payload }
    case types.SET_AUTH_LANGUAGE:
      return { ...state, language: action.payload }
    case types.SET_AUTH_FETCHING:
      return { ...state, isFetching: action.payload }
    case types.SET_AUTH_ERROR:
      return { ...state, authError: action.payload }
    case types.LOG_OUT:
      return initialState
    default:
      return state
  }
}
