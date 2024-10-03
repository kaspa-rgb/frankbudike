import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import ArtContextProvider from './context/ArtContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ArtContextProvider>
      <App />
  </ArtContextProvider>
  </BrowserRouter>,
)
