import React from 'react'
import Helmet from 'react-helmet'
import PostList from '../components/PostList/PostList'
import SEO from '../components/SEO/SEO'
import config from '../../data/SiteConfig'
import './algods.css'

class AlgoDs extends React.Component {
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

    const algodsEdges = groupEdges(this.props.data.algods.edges)

    return (
      <div className='algods-page-container page-container'>
        <Helmet title={config.siteTitle} />
        <SEO postEdges={this.props.data.algods.edges} />
        <h1>Algorithms & Data Structures</h1>

        <h3>Introduction</h3>
        <p>If you are new to this site, please check out these articles</p>
        {algodsEdges.sticky && <PostList postEdges={algodsEdges.sticky} />}

        <h3>Algorithms & Data Structures Guides</h3>
        <p>Learn the fundamentals</p>
        {algodsEdges.regular && <PostList postEdges={algodsEdges.regular} />}
      </div>
    )
  }
}

export default AlgoDs

/* eslint no-undef: 'off' */
export const pageQuery = graphql`
  query AlgoDsEdges {
    algods: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: "algods" } } }
    ) {
      ...edgeFields
    }
  }
`
