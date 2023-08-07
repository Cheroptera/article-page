/* eslint-disable max-len */
import React from 'react'
import { Link } from 'react-router-dom'
import { ArticlePreview } from './ArticlePreview'

const ArticlePage = ({ articles }) => {
  return (
    <div className="main-container">
      {articles.map((article) => {
        const articleBodyHtml = article.body.find((item) => item.type === 'text')?.html; // Gets the "html" property from the "body" array
        return (
          <Link
            className="news-link"
            key={article.id}
            to={`/articles/${article.id}`}>
            <ul className="news-list">
              <li><ArticlePreview
                id={article.id}
                title={article.title}
                urlToImage={article?.body.find((item) => item.type === 'image')?.src}
                summary={articleBodyHtml}
                publicationDate={article.first_published_at} />
              </li>
            </ul>
          </Link>
        )
      })}
    </div>
  )
}

export default ArticlePage