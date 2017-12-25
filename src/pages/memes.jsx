import React, { Component } from 'react'
import Helmet from 'react-helmet'
import config from '../../data/SiteConfig'

class MemesPage extends Component {
  render() {
    return (
      <div className='random-page-container'>
        <Helmet title={`Random Ramblings | ${config.siteTitle}`} />
        Random Ramblings
      </div>
    )
  }
}

export default MemesPage
