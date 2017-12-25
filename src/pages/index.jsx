import React from 'react'
import Helmet from 'react-helmet'
import PostListing from '../components/PostListing/PostListing'
import SEO from '../components/SEO/SEO'
import config from '../../data/SiteConfig'

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges
    return (
      <div className='index-page-container page-container'>
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <h1>Algorithms & Data Structures</h1>
        <h1>Coding Thoughts</h1>
        <PostListing postEdges={postEdges} />
        <h1>Random Ramblings</h1>
      </div>
    )
  }
}

export default Index

/* eslint no-undef: 'off' */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`
