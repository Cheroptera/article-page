import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_URL } from 'utils/urls';
import axios from 'axios';

const FullArticlePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    const getArticleById = async () => {
      try {
        const response = await axios.get(API_URL(`articles/${id}`));
        setArticle(response.data);
      } catch (error) {
        console.error('Error fetching article', error);
      }
    };
    getArticleById();
  }, [id]);

  const formatPublicationDate = (isoDate) => {
    const date = new Date(isoDate);
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false
    };
    return date.toLocaleString('en-US', options);
  };

  return (
    <div className="article">
      <div className="article-image">
        {article?.body?.find((item) => item.type === 'image') && (
          <img
            className="news-img"
            src={article.body.find((item) => item.type === 'image').src}
            alt={article.title} />
        )}
        <div className="article-content">
          <div className="article-title">
            <h1>{article.title}</h1>
          </div>
          {article.paid ? (
            <p className="article-description">Locked content</p>
          ) : (
            <p className="article-description">{article?.body?.map((item) => item.html).join(' ')}</p>
          )}
          <div className="article-details">
            <small>Published full: {formatPublicationDate(article.first_published_at)}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullArticlePage;
