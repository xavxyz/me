import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import App from './App.js'

export default class Index extends React.Component {
  render () {
    return (
      <DocumentTitle title={config.siteTitle}>
        <App />
      </DocumentTitle>
    )
  }
}
