import React from 'react'
import Helmet from 'react-helmet'
import config from '../../data/SiteConfig'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import '../css/reset.css'
import '../css/typography.css'
import './index.css'

export default class MainLayout extends React.Component {
  getLocalTitle() {
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
    const pathPrefix = config.pathPrefix ? config.pathPrefix : '/'
    const currentPath = this.props.location.pathname
      .replace(pathPrefix, '')
      .replace('/', '')
    let title = ''
    if (currentPath === '') {
      title = 'Home'
    } else if (currentPath === 'algods/') {
      title = 'Algorithms & Data Structures'
    } else if (currentPath === 'code/') {
      title = 'Coding Thoughts'
    } else if (currentPath === 'random/') {
      title = 'Random Ramblings'
    } else if (currentPath === 'about/') {
      title = 'About Kevin'
    } else if (currentPath.includes('posts')) {
      title = 'Post'
    } else if (currentPath.includes('tags/')) {
      const tag = currentPath
        .replace('tags/', '')
        .replace('/', '')
        .replace('-', ' ')
      title = `Tagged in ${capitalize(tag)}`
    } else if (currentPath.includes('categories/')) {
      const category = currentPath
        .replace('categories/', '')
        .replace('/', '')
        .replace('-', ' ')
      title = `${capitalize(category)}`
    }
    return title
  }
  render() {
    const { children } = this.props
    return (
      <div className='page-container'>
        <Helmet>
          <title>{`${config.siteTitle} |  ${this.getLocalTitle()}`}</title>
          <meta name='description' content={config.siteDescription} />
        </Helmet>
        <Header />
        <div className='children-container'>
          {children()}
        </div>
        <Footer />
      </div>
    )
  }
}
