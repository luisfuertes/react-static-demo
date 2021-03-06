import getStaticPaths from './src/config/staticPaths'
import getStaticData from './src/config/staticData'

// Styled components
import React, { Component } from 'react'
import { ServerStyleSheet } from 'styled-components'

export default {
  siteRoot: 'http://localhost:3000',

  // Add constants from config?
  getSiteData: () => ({
    title: 'Demo'
  }),
  // Load data and paths
  getRoutes: async () => {
    const data = await getStaticData()
    return getStaticPaths(data)
  },
  // Styled components implementation
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet()
    const html = render(sheet.collectStyles(<Comp />))
    meta.styleTags = sheet.getStyleElement()
    return html
  },
  Document: class CustomHtml extends Component {
    render() {
      const { Html, Head, Body, children, renderMeta } = this.props

      return (
        <Html>
          <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            {renderMeta.styleTags}
          </Head>
          <Body>{children}</Body>
        </Html>
      )
    }
  }
}
