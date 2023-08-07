import React from 'react'
// import { API_URL } from 'utils/urls';
// import axios from 'axios';

export const ArticlePreview = ({ title, urlToImage, summary, publicationDate }) => {
  console.log(title)
  const formatPublicationDate = (isoDate) => {
    const date = new Date(isoDate);
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false };
    return date.toLocaleString('en-US', options);
  }

  return (
    <div className="article">
      <div className="article-image">
        {urlToImage && <img className="news-img" src={urlToImage} alt={title} />}
        <div className="article-content">
          <div className="article-title">
            <h1>{title}</h1>
          </div>
          <p className="article-description"> {summary}</p>
          <div className="article-details">
            <small>Published: {formatPublicationDate(publicationDate)}</small>
          </div>
        </div>
      </div>
    </div>
  );
}