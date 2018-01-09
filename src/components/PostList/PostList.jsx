import React from 'react'
import moment from 'moment'
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
        title: postEdge.node.frontmatter.title,
        summary: postEdge.node.frontmatter.summary,
        date: postEdge.node.frontmatter.date,
        time: postEdge.node.frontmatter.time,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
        isSticky: postEdge.node.frontmatter.sticky,
      })
    })

    return postList
  }

  render() {
    const postList = this.getPostList()

    const buildPostLink = post => {
      const momentDate = moment(`${post.date} ${post.time}`)
      const daysAgo = momentDate.startOf('minute').fromNow()
      const datePublished = momentDate.format('dddd - MMM Do YYYY - hh:mma')

      return (
        <Link
          to={post.path}
          key={post.title}
          className={'post-list__post'}
        >
          {post.cover &&
            <img
              className='post-list__post__cover'
              src={`${post.cover}`}
              alt={`${post.title}`}
            />
          }
          <div className='post-list__post__description'>
            <h3>{post.title}</h3>
            <h6>{`${daysAgo} | ${datePublished}`}</h6>
            <p className='post-list__post__excerpt'>
              {post.summary || post.excerpt}
            </p>
          </div>
          {post.isSticky && (
            <div className='post-list__post--sticky'>
              <h5>Sticky</h5>
            </div>
          )}
        </Link>
      )
    }

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
