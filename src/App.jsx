import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <header>
        <nav>
          <div>Dacax</div>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Proyectos</a></li>
          </ul>
          <a href="#">Contáctanos</a>
        </nav>
      </header>

      <section>
        <div>
          <img src="" alt="Logo Dacax" />
        </div>
        <h1>Impulsando la Innovación</h1>
        <p>
          Transformamos ideas en realidad con tecnología de vanguardia y un enfoque centrado en el usuario
        </p>
        <a href="#">Descubre nuestros servicios</a>
      </section>

      <section className="soluciones">
        <h2>Nuestras Soluciones</h2>
        <p>Ofrecemos servicios diseñados para llevar tu negocio al siguiente nivel digital</p>
      </section>
    </>
  );
}

export default App
