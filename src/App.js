import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ArticlePage from 'components/ArticlePage'
import FullArticlePage from 'components/FullArticlePage'
import { API_URL } from 'utils/urls'
import axios from 'axios'

export const App = () => {
  const [articles, setArticles] = useState([])

  // fetching the articles from the json-server mock API. I then pass 'articles'
  // as props to the ArticlePage and FullArticlePage components.

  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await axios.get(API_URL('articles'))
        setArticles(response.data)
      } catch (error) {
        console.error('Error fetching list', error)
      }
    }
    getArticles()
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<ArticlePage
            articles={articles} />} />
        <Route
          path="/articles/:id"
          element={<FullArticlePage articles={articles} />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  )
}
