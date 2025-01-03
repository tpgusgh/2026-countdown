import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Analytics } from "@vercel/analytics/react"
import Countdown from './Countdown.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Countdown />
    <Analytics />
  </StrictMode>,
)
