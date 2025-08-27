import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Preload de imágenes críticas antes de renderizar la app
const imageUrls = [
  '/images/Background-Home.png',
  '/images/Background-Services.png',
  '/images/Background-Projects.png',
  '/images/Background-Footer.png',
  '/images/Logo-Vector-Dacax.png',
  '/images/auditai.png',
];

function preloadImages(urls) {
  return Promise.all(
    urls.map(
      (url) =>
        new Promise((resolve) => {
          const img = new Image();
          img.onload = () => resolve(url);
          img.onerror = () => resolve(url); // No bloquear si alguna falla
          img.src = url;
        })
    )
  );
}

(async () => {
  await preloadImages(imageUrls);
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
})();
