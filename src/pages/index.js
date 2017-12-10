import React from 'react'
// import Link from 'gatsby-link'
import styled from 'styled-components'

const IndexPageWrapper = styled.div`
`;

const IndexPage = ({ data }) => (
  <IndexPageWrapper>
    <div style={{ margin: '3rem auto', maxWidth: 600 }}>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          {node.frontmatter.title}{' '}
          {node.frontmatter.date}
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div>
  </IndexPageWrapper>
)

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
