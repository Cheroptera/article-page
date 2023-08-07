import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ArticlePage from 'components/ArticlePage'
import { ArticleDetails } from 'components/ArticleDetails'
import { API_URL } from 'utils/urls'
import axios from 'axios'

export const App = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(API_URL('articles'))
      console.log(response)
      setArticles(response.data)
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
          element={<ArticleDetails />} />
        <Route path="*" element={<Navigate to="/404" />} />
        {/* <Route path="/404" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  )
}
