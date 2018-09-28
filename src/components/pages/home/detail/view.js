import React, { Component } from 'react'
import { Link } from 'react-static'
import _ from 'lodash'

export default class extends Component {
  render() {
    return (
      <div>
        <h2>STATIC ROUTE</h2>
        <Link prefetch={true} to="/dynamicroute">
          {'GO TO DYNAMIC ROUTE'}
        </Link>
        <Link prefetch={false} to="/dynamicroute">
          {'GO TO DYNAMIC ROUTE WITHOUT PREFETCH'}
        </Link>
      </div>
    )
  }
}
