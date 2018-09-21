import React from 'react'
import { Router } from 'react-static'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../config/styled'
import Paths from '../../../config/paths'
import store from '../../../config/redux' // redux
import '../../../config/styles' // css

const App = () => (
  <Provider store={store}>
    <Router>
      <ThemeProvider theme={theme}>
        <div className="content">
          <div className="emp-container">{Paths}</div>
        </div>
      </ThemeProvider>
    </Router>
  </Provider>
)

export default hot(module)(App)
