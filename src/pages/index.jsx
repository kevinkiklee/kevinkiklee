import React from 'react'
import Helmet from 'react-helmet'
import PostList from '../components/PostList/PostList'
import SEO from '../components/SEO/SEO'
import config from '../../data/SiteConfig'
import './index.css'

class Index extends React.Component {
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
    const ramblesEdges = groupEdges(this.props.data.rambles.edges)
    const allEdges = groupEdges(this.props.data.allPosts.edges)
    const memesEdges = this.props.data.memes.edges

    return (
      <div className='index-page-container page-container'>
        <Helmet title={config.siteTitle} />
        <SEO postEdges={allEdges} />

        <h1>Algorithms & Data Structures</h1>
        {algodsEdges.sticky && <PostList postEdges={algodsEdges.sticky} />}
        {algodsEdges.regular && <PostList postEdges={algodsEdges.regular} />}

        <h1>Rambles</h1>
        {ramblesEdges.sticky && <PostList postEdges={ramblesEdges.sticky} />}
        {ramblesEdges.regular && <PostList postEdges={ramblesEdges.regular} />}

        <h1>Memes</h1>
        <PostList postEdges={memesEdges} isTwoColumn />
      </div>
    )
  }
}

export default Index

/* eslint no-undef: 'off' */
export const pageQuery = graphql`
  query AllPosts {
    allPosts: allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      ...edgeFields
    }
    algods: allMarkdownRemark(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: "algods" } } }
    ) {
      ...edgeFields
    }
    rambles: allMarkdownRemark(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: "rambles" } } }
    ) {
      ...edgeFields
    }
    memes: allMarkdownRemark(
      limit: 6
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: "memes" } } }
    ) {
      ...edgeFields
    }
  }

  fragment edgeFields on MarkdownRemarkConnection {
    edges {
      node {
        id
        fileAbsolutePath
        fields {
          slug
        }
        excerpt
        timeToRead
        frontmatter {
          title
          tags
          cover
          icon
          date
          category
          sticky
        }
      }
    }
  }
`
