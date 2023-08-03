import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ArticlePage = () => {
  const [articleList, setArticleList] = useState([])
  const [loading, setLoading] = useState(false)
  // const [isPaid, setIsPaid] = useState(false)

  useEffect(() => {
    console.log(articleList)
    setLoading(true)
    fetch('localhost:3000/articles')
      .then((res) => res.json())
      .then((data) => {
        setArticleList(data.results)
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [articleList])

  if (loading) {
    return (
      <p>Loading..</p>
    )
  }
  return (
    <div className="main-container">
      {articleList.map((results) => (
        <Link
          key={results.id}
          to={`/articles/${results.id}`}>
          <div className="article-container">
            <div className="news-article">
              {results.articles.map((singleArticle) => {
                return (
                  // eslint-disable-next-line max-len
                  <><h1 src={singleArticle.title}> </h1><p src={singleArticle.articles.body}> </p></>
                )
              })}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ArticlePage