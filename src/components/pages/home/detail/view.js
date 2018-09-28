import React, { Component } from 'react'
import { Link } from 'react-static'
import _ from 'lodash'

export default class extends Component {
  render() {
    return (
      <div style={{ flexDirection: 'column', flex: 1, display: 'flex' }}>
        <h2>STATIC ROUTE</h2>
        <Link prefetch={true} to="/dynamicroute" style={{ marginTop: 40 }}>
          {'GO TO DYNAMIC ROUTE WITH LINK'}
        </Link>
        <Link prefetch={false} to="/dynamicroute" style={{ marginTop: 40 }}>
          {'GO TO DYNAMIC ROUTE WITH LINK (NO PREFETCH)'}
        </Link>
        <a onClick={this.props.navigateToDetail2} style={{ marginTop: 40, cursor: 'pointer' }}>
          <span>{'GO TO DYNAMIC ROUTE WITH "withRouter" PARAM'}</span>
        </a>
      </div>
    )
  }
}
