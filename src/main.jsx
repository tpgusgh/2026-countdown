import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Countdown from './Countdown.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Countdown />
  </StrictMode>,
)
