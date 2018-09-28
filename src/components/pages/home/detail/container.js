import { connect } from 'react-redux'
import { withSiteData, withRouteData } from 'react-static'
import { AuthOperations } from '../../../../redux/auth/'
import View from './view'
import React from 'react'
import _ from 'lodash'

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch, props) {
  return {
    navigateToDetail2: () => {
      dispatch(AuthOperations.navigateToDetail2())
    }
  }
}

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(View)

export default withRouteData(props => <Container {...props} />)
