import { AuthActions, AuthUtils } from '.'
import _ from 'lodash'

export const checkRegisterData = () => (dispatch, getState) => {
  dispatch(AuthActions.setIsFetching(false))
}
