import * as types from './types'

export const setAppInit = () => {
  return { type: types.SET_AUTH_INIT }
}

export const setToken = value => {
  return { type: types.SET_AUTH_TOKEN, payload: value }
}

export const setLanguage = value => {
  return { type: types.SET_AUTH_LANGUAGE, payload: value }
}

export const setIsFetching = value => {
  return { type: types.SET_AUTH_FETCHING, payload: value }
}

export const setAuthError = value => {
  return { type: types.SET_AUTH_ERROR, payload: value }
}

export const logOut = () => {
  return { type: types.LOG_OUT }
}
