import './App.css'
import { MainLayout } from './components/templates/MainLayout';

// Components
import { Button } from './components/atoms/Button'

function App() {
  return (
    <MainLayout>
      <header>
        <nav>
          <Button onClick={() => console.log('Click')}>
            <p>Dacax</p>
          </Button>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Proyectos</a></li>
          </ul>
          <Button onClick={() => console.log('Click')}>
            <p>Contáctanos</p>
          </Button>
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

        <Button onClick={() => console.log('Click')}>
          <p>Descubre nuestros servicios</p>
        </Button>
      </section>

      <section className="soluciones">
        <h2>Nuestras Soluciones</h2>
        <p>Ofrecemos servicios diseñados para llevar tu negocio al siguiente nivel digital</p>
      </section>
    </MainLayout>
  );
}

export default App
