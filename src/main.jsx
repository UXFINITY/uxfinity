import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Context, { useLanguage } from './helpers/LanguageContext'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>
)
