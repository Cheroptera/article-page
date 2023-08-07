import React from 'react'
import { Link } from 'react-router-dom'

// A component of the remaining articles list that is mounted in the
// FullArticlePage component, under the 'opened' article.

export const RemainingArticlesList = ({ articles }) => {
  return (
    <div className="remaining-articles">
      <h3>Lignende artikler:</h3>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link to={`/articles/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
