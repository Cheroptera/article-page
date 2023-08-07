import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { ArticlePreview } from './ArticlePreview';
import RenderHTML from './RenderHTML';

const ArticlePage = ({ articles }) => {
  const articlesPerPage = 3; // Number of articles to display per page
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  // Calculate the index of the first and last articles to display on the current page
  const indexOfLastArticle = (currentPage + 1) * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;

  // Slice the articles array based on the current page
  const paginatedArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  return (
    <div className="main-container">
      {paginatedArticles.map((article) => {
        const articleBodyHtml = article.body.find((item) => item.type === 'text')?.html;
        const articleHtmlContent = articleBodyHtml ? <RenderHTML html={articleBodyHtml} /> : null;
        return (
          <Link className="list-item-container" key={article.id} to={`/articles/${article.id}`}>
            <div className="news-list-item">
              <ArticlePreview
                id={article.id}
                title={article.title}
                urlToImage={article?.body.find((item) => item.type === 'image')?.src}
                summary={articleHtmlContent}
                publicationDate={article.first_published_at} />
            </div>
          </Link>
        );
      })}

      {/* Pagination */}
      <div className="pagination-container">
        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          pageCount={Math.ceil(articles.length / articlesPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName="pagination"
          activeClassName="active" />
      </div>
    </div>
  );
};

export default ArticlePage;
