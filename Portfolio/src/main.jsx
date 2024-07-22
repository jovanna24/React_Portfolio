// imports core REACT lib
import React from 'react'
// imports ReactDOM
import ReactDOM from 'react-dom/client'
// imports App component
import App from './App.jsx'
// imports index.css file, contains global styling
import './index.css'

// creates root element for app 
// renders App component
ReactDOM.createRoot(document.getElementById('root')).render(
  // strict mode renders app in dev mode
  <React.StrictMode>
    {/* renders app */}
    <App />
  </React.StrictMode>,
)

