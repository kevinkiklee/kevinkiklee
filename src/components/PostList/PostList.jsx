import React from 'react'
import Link from 'gatsby-link'
import './PostList.css'

class PostList extends React.Component {
  getPostList() {
    const buildPostPath = ({ frontmatter, fields }) => (
      `/${frontmatter.category}${fields.slug}`
    )

    const postList = []

    this.props.postEdges.forEach((postEdge) => {
      postList.push({
        path: buildPostPath(postEdge.node),
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        icon: postEdge.node.frontmatter.icon,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
        isSticky: postEdge.node.frontmatter.sticky,
      })
    })

    return postList
  }

  render() {
    const postList = this.getPostList()

    const buildPostLink = post => (
      <Link
        to={post.path}
        key={post.title}
        className={'post-list__post'}
      >
        {post.icon &&
          <img
            className='post-list__post__icon'
            src={`${post.icon}`}
            alt={`${post.title}`}
          />
        }
        <div className='post-list__post__description'>
          <h3>{post.title}</h3>
          <p className='post-list__post__excerpt'>
            {post.excerpt}
          </p>
        </div>
        {post.isSticky && (
          <div className='post-list__post--sticky'>
            <h4>Sticky</h4>
          </div>
        )}
      </Link>
    )

    const buildPostColumn = (columns, post) => {
      const postLink = buildPostLink(post)

      if ((columns[0].length + columns[1].length) % 2 === 0) {
        columns[0].push(postLink)
      } else {
        columns[1].push(postLink)
      }

      return columns
    }

    return (
      this.props.isTwoColumns ? (
        <div className='post-list post-list--two-columns'>
          {postList
            .reduce((columns, post) => buildPostColumn(columns, post), [[], []])
            .map((posts, index) =>
              <div
                className={`${index % 2 === 0
                  ? 'post-list__left-column'
                  : 'post-list__right-column'}`}
                key={index}
              >
                {posts}
              </div>)
          }
        </div>
      ) : (
        <div className='post-list'>
          {postList.map(buildPostLink)}
        </div>
     )
    )
  }
}

export default PostList
