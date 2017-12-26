import React from 'react'
import Helmet from 'react-helmet'
import PostList from '../components/PostList/PostList'
import SEO from '../components/SEO/SEO'
import config from '../../data/SiteConfig'
import './memes.css'

class Memes extends React.Component {
  render() {
    const groupEdges = (edges) => (
      edges.reduce((groupedEdges, edge) => {
        if (edge.node.frontmatter.sticky) {
          groupedEdges.sticky.push(edge)
        } else {
          groupedEdges.regular.push(edge)
        }

        return groupedEdges
      }, {
        sticky: [],
        regular: [],
      })
    )

    const memesEdges = groupEdges(this.props.data.memes.edges)

    return (
      <div className='memes-page-container page-container'>
        <Helmet title={config.siteTitle} />
        <SEO postEdges={this.props.data.memes.edges} />

        <h1>Coding Memes</h1>

        {memesEdges.sticky && <PostList postEdges={memesEdges.sticky} isTwoColumns />}
        {memesEdges.regular && <PostList postEdges={memesEdges.regular} isTwoColumns />}
      </div>
    )
  }
}

export default Memes

/* eslint no-undef: 'off' */
export const pageQuery = graphql`
  query memesEdges {
    memes: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: "memes" } } }
    ) {
      ...edgeFields
    }
  }
`
