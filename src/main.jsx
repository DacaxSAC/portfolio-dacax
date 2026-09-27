import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Se renderiza de inmediato: las imágenes críticas se precargan desde index.html
// y cada imagen aparece con un fundido al terminar de cargar, sin bloquear el primer render.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
