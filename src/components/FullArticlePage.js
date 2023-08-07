import React from 'react';
import { useParams } from 'react-router-dom';
import RenderHTML from './RenderHTML';
import { RemainingArticlesList } from './RemainingArticlesList';

// This component displays the content of a full article based on the
// id parameter from the route and the articles prop.

const FullArticlePage = ({ articles }) => {
  const { id } = useParams();

  // First, I used a useEffect here to do a fetch for that specific id, whenever the
  // id changed, but then it hit me that that API call was unnecessary, since I already could
  // pass down articles as a prop and filter through the array.

  const article = articles.find((item) => item.id === id);

  // Here I filter out the current article from the list of remaining articles
  const remainingArticles = articles.filter((item) => item.id !== id)

  // Function to make the time format more readable.
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
    <div className="full-article-container">
      <div className="article">
        <div className="article-image">
          {/* Conditionally render image */}
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
            <div className="article-details">
              <p>{formatPublicationDate(article.first_published_at)}</p>
            </div>
            {/* Conditionally render subhead */}
            {article?.body?.map((item) => {
              if (item.type === 'subhead') {
                return (
                  <React.Fragment key={item.value}>
                    <h2 className="sub-head">{item.value}</h2>
                  </React.Fragment>
                );
              } else if (item.type === 'text') {
                return (
                  <React.Fragment key={item.html}>
                    <RenderHTML html={item.html} />
                  </React.Fragment>
                );
              }
              return null;
            })}
          </div>
        </div>
        <RemainingArticlesList articles={remainingArticles} />
      </div>
    </div>
  );
};

export default FullArticlePage;
