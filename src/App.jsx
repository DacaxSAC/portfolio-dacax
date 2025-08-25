import './App.css'
import { MainLayout } from './components/templates/MainLayout';

// Components
import { Button } from './components/atoms/Button'
import { CardGroup } from './components/organisms/CardGroup'
function App() {

  const cardData = [
    {
      icon: '',
      title: "App Móvil",
      description: "Llevamos tu idea a la palma de la mano con aplicaciones móviles intuitivas, rápidas y diseñadas para brindar la mejor experiencia."
    },
    {
      icon: '',
      title: "Landing Pages",
      description: "Creamos landing pages atractivas y optimizadas para captar la atención de tus clientes y convertir visitas en oportunidades reales."
    },
    {
      icon: '',
      title: "Software a Medida",
      description: "Desarrollamos soluciones personalizadas que se adaptan a tu negocio, optimizan procesos y resuelven problemas específicos."
    },
    {
      icon: '',
      title: "SaaS",
      description: "Ofrecemos aplicaciones en la nube listas para usar, con escalabilidad, seguridad y sin la complejidad de la instalación tradicional."
    },
    {
      icon: '',
      title: "Automatización de Procesos",
      description: "Implementamos herramientas inteligentes que eliminan tareas repetitivas, ahorran tiempo y aumentan la eficiencia."
    },
    {
      icon: '',
      title: "Mantenimiento y Soporte",
      description: "Nos aseguramos de que tus sistemas funcionen siempre al 100%, con actualizaciones y soporte técnico cuando lo necesites."
    },
  ]




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

      <section className="max-w-7xl mx-auto px-6 py-12">
        <CardGroup cards={cardData} />
      </section>
    </MainLayout>
  );
}

export default App
