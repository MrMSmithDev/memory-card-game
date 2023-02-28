import CardGrid from '@components/cardGrid'
import Footer from '@components/footer'
import Header from '@components/header'
import Help from '@components/help'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="memory-card-game/" element={<CardGrid />} />
        <Route path="memory-card-game/help" element={<Help />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default RouteSwitch
