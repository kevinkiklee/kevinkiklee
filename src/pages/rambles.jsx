import React from 'react'
import Helmet from 'react-helmet'
import PostList from '../components/PostList/PostList'
import SEO from '../components/SEO/SEO'
import config from '../../data/SiteConfig'
import './rambles.css'

class Rambles extends React.Component {
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

    const ramblesEdges = groupEdges(this.props.data.rambles.edges)

    return (
      <div className='rambles-page-container page-container'>
        <Helmet title={config.siteTitle} />
        <SEO postEdges={this.props.data.rambles.edges} />
        <h1>Coding Ramblings</h1>
        {ramblesEdges.sticky && <PostList postEdges={ramblesEdges.sticky} />}
        {ramblesEdges.regular && <PostList postEdges={ramblesEdges.regular} />}
      </div>
    )
  }
}

export default Rambles

/* eslint no-undef: 'off' */
export const pageQuery = graphql`
  query ramblesEdges {
    rambles: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: "rambles" } } }
    ) {
      ...edgeFields
    }
  }
`
