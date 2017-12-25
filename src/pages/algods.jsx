import React, { Component } from 'react'
import Helmet from 'react-helmet'
import About from '../components/About/About'
import config from '../../data/SiteConfig'

class AlgoDsPage extends Component {
  render() {
    return (
      <div className='algods-page-container'>
        <Helmet title={`About | ${config.siteTitle}`} />
        Algorithms & Data Structures
        <About />
      </div>
    )
  }
}

export default AlgoDsPage
