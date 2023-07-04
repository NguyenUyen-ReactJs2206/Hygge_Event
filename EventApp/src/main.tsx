import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import React from 'react'
import App from './App'
import ErrorBoundary from './components/ErrorBoundary'
import { AppProvider } from './contexts/app.context'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
)
