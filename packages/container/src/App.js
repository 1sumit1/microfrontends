import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './components/MarketingApp'
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <div className='abc'>
        <Header />
        <MarketingApp />
      </div>
    </BrowserRouter>

  )
}

export default App
