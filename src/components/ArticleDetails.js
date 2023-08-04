import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { API_URL } from 'utils/urls';
import axios from 'axios';

export const ArticleDetails = ({ title, summary, publicationDate, urlToImage, url }) => {
  const { _id } = useParams()
  const [articleDetails, setArticleDetails] = useState({})

  useEffect(() => {
    const getArticle = async () => {
      const response = await axios.get(API_URL(`/articles/${_id}`))
      console.log(response)
      setArticleDetails(response.data.body)
    }
    getArticle()
  }, [articleDetails, _id])

  return (
    <div className="news-app">
      <div className="news-article">
        <img className="news-img" src={urlToImage} alt={urlToImage} />
        <h1><a href={url}>{title}</a></h1>
        <p>{summary}</p>
        <p>{publicationDate}</p>
      </div>
    </div>
  )
}
