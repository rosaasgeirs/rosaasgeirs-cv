import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LocaleProvider } from './i18n/LocaleContext'
import './index.css'
import App from './App.tsx'
import Lacuna from './lacuna/Lacuna.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <LocaleProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/work/lacuna" element={<Lacuna />} />
        </Routes>
      </LocaleProvider>
    </BrowserRouter>
  </StrictMode>,
)
