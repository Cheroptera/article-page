import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ArticlePage from 'components/ArticlePage'
import { ArticleDetails } from 'components/ArticleDetails'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ArticlePage />} />
        <Route path="/articles/:id" element={<ArticleDetails />} />
        <Route path="*" element={<Navigate to="/404" />} />
        {/* <Route path="/404" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  )
}
