import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../utils/urls'
import { ArticleDetails } from './ArticleDetails'

const ArticlePage = () => {
  const [articles, setArticles] = useState([])
  // const [isPaid, setIsPaid] = useState(false)

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(API_URL('articles'))
      console.log(response)
      setArticles(response.data)
    }
    getArticles()
  }, [])

  return (
    <div>
      {articles.map((article) => {
        return (
          <ArticleDetails
            title={article.title}
            summary={article.body.html}
            publicationDate={article.first_published_at} />
        )
      })}
    </div>
  )
  //       .then((res) => res.json())
  //     .then((json) => {
  //       console.log(json)
  //       setArticleList(json.results)
  //     })
  //     .catch((error) => {
  //       console.error(error)
  //     })
  //     .finally(() => {
  //     })
  // }, [])

  // return (
  //   <div className="main-container">
  //     {articleList.map((article) => (
  //       <Link
  //         key={article.id}
  //         to={`/${article.id}`}>
  //         <div className="article-container">
  //           <div className="news-article">
  //             <h1>{article.title}</h1>
  //             {article.body.map((item, id) => {
  //               return (
  //                 // eslint-disable-next-line max-len, react/no-array-index-key
  //                 <p key={id}>{item.html} </p>
  //               )
  //             })}
  //           </div>
  //         </div>
  //       </Link>
  //     ))}
  //   </div>
  // )
}

export default ArticlePage