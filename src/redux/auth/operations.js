import { AuthActions, AuthUtils } from '.'
import _ from 'lodash'
import { withRouter } from 'react-static'

export const navigateToDetail2 = () => (dispatch, getState) => {
  console.log('navigateToDetail2')
  withRouter(props => {
    console.log('withRouter rops: ', props)
  })
}
