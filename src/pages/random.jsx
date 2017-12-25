import React, { Component } from 'react'
import Helmet from 'react-helmet'
import About from '../components/About/About'
import config from '../../data/SiteConfig'

class RandomPage extends Component {
  render() {
    return (
      <div className='random-page-container'>
        <Helmet title={`Random Ramblings | ${config.siteTitle}`} />
        Random Ramblings
        <About />
      </div>
    )
  }
}

export default RandomPage
