import CardGrid from '@components/cardGrid'
import Help from '@components/help'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CardGrid />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch
