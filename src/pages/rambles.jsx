import React, { Component } from 'react'
import Helmet from 'react-helmet'
import config from '../../data/SiteConfig'

class RamblesPage extends Component {
  render() {
    return (
      <div className='code-page-container'>
        <Helmet title={`Coding Musings | ${config.siteTitle}`} />
        Coding Musings
      </div>
    )
  }
}

export default RamblesPage
