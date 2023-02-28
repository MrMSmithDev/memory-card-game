import CardGrid from '@components/cardGrid'
import Footer from '@components/footer'
import Header from '@components/header'
import Help from '@components/help'
import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

const RouteSwitch = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<CardGrid />} />
        <Route path="/help" element={<Help />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default RouteSwitch
