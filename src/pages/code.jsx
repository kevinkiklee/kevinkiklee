import React, { Component } from 'react'
import Helmet from 'react-helmet'
import About from '../components/About/About'
import config from '../../data/SiteConfig'

class CodePage extends Component {
  render() {
    return (
      <div className='code-page-container'>
        <Helmet title={`Coding Musings | ${config.siteTitle}`} />
        Coding Musings
        <About />
      </div>
    )
  }
}

export default CodePage
