import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="bg-sky-100 justify-center">
      <div className="w-full sm:w-96 mx-auto text-gray-800 bg-white sm:shadow-xl">
        <App />
      </div>
    </div>
  </React.StrictMode>,
)
