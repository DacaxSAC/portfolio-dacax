import './App.css'
import { MainLayout } from './components/templates/MainLayout';

// Components
import { Button } from './components/atoms/Button'
import { Card } from './components/molecules/Card'

function App() {
  return (
    <MainLayout>
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

      <section className=" max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            icon=''
            title="Apps Móviles"
            description="Desarrollamos aplicaciones enfocadas en una experiencia de usuario fluida, rendimiento excepcional y total aprovechamiento del dispositivo"
          />
          <Card
            icon=''
            title="Apps Móviles"
            description="Desarrollamos aplicaciones enfocadas en una experiencia de usuario fluida, rendimiento excepcional y total aprovechamiento del dispositivo"
          />
          <Card
            icon=''
            title="Apps Móviles"
            description="Desarrollamos aplicaciones enfocadas en una experiencia de usuario fluida, rendimiento excepcional y total aprovechamiento del dispositivo"
          />
          
        </div>
      </section>
    </MainLayout>
  );
}

export default App
