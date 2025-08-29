import './App.css'
import { MainLayout } from './components/templates/MainLayout';

// Components
import { Button } from './components/atoms/Button'
import { CardGroup } from './components/organisms/CardGroup'
import { Slider } from './components/organisms/Slider'
import { Logo } from './components/atoms/Logo'
function App() {

  const cardData = [
    {
      icon: '/images/icons/Icon-Movil.png',
      title: "App Móvil",
      description: "Llevamos tu idea a la palma de la mano con aplicaciones móviles intuitivas, rápidas y diseñadas para brindar la mejor experiencia."
    },
    {
      icon: '/images/icons/Icon-Page.png',
      title: "Landing Pages",
      description: "Creamos landing pages atractivas y optimizadas para captar la atención de tus clientes y convertir visitas en oportunidades reales."
    },
    {
      icon: '/images/icons/Icon-Software.png',
      title: "Software a Medida",
      description: "Desarrollamos soluciones personalizadas que se adaptan a tu negocio, optimizan procesos y resuelven problemas específicos."
    },
    {
      icon: '/images/icons/Icon-SaaS.png',
      title: "SaaS",
      description: "Ofrecemos aplicaciones en la nube listas para usar, con escalabilidad, seguridad y sin la complejidad de la instalación tradicional."
    },
    {
      icon: '/images/icons/Icon-Automation.png',
      title: "Automatización de Procesos",
      description: "Implementamos herramientas inteligentes que eliminan tareas repetitivas, ahorran tiempo y aumentan la eficiencia."
    },
    {
      icon: '/images/icons/Icon-Maintenance.png',
      title: "Mantenimiento y Soporte",
      description: "Nos aseguramos de que tus sistemas funcionen siempre al 100%, con actualizaciones y soporte técnico cuando lo necesites."
    },
  ]


  return (
    <MainLayout>
      <section id="home" className="flex flex-col items-center w-full h-[811px] bg-[url('/images/Background-Home.png')] bg-cover bg-center bg-no-repeat pt-[230px]">
        <Logo />
        <h1 className='mt-[40px] h-[80px] text-[64px] font-[Orbitron] font-black leading-[100%] tracking-[0%]'>Impulsando la Innovación</h1>
        <p className='mt-[16px] h-[52px] text-[20px] font-[Roboto Mono] font-normal leading-normal tracking-[0%] text-[#C4E4E9]'>
          Transformamos ideas en realidad con tecnología de vanguardia y <br />un enfoque centrado en el usuario
        </p>

        <Button onClick={() => console.log('Click')} className='mt-[56px] h-[58px] w-[354px] ' >
          <p>Conoce nuestros servicios</p>
        </Button>
      </section>


      <section id="services" className="flex flex-col items-center w-full h-[854px] bg-[url('/images/Background-Services.png')] bg-cover bg-center bg-no-repeat">
        <div className="mt-[23px] h-[97px] flex flex-col items-center">
          <h2 className='h-[47px] text-[36px] font-[Roboto Mono] font-bold leading-normal tracking-[0%] text-[#FFFFFF] '>Nuestros servicios</h2>
          <p className='mt-[24px] h-[26px] text-[20px] font-[Roboto Mono] font-normal leading-normal tracking-[0%] text-[#C4E4E9]'>Descubre lo que podemos crear juntos</p>

        </div>
        <CardGroup cards={cardData} />
      </section>



      <section id="projects" className="flex flex-col items-center w-full h-[853px] bg-[url('/images/Background-Projects.png')] bg-cover bg-center bg-no-repeat">
        <div className="mt-[113px] h-[97px] flex flex-col items-center">
          <h2 className='h-[47px] text-[36px] font-[Roboto Mono] font-bold leading-normal tracking-[0%] text-[#FFFFFF] '>Nuestros Proyectos recientes</h2>
          <p className='mt-[24px] h-[26px] text-[20px] font-[Roboto Mono] font-normal leading-normal tracking-[0%] text-[#C4E4E9]'>Conoce lo que hemos creado para nuestros clientes</p>

        </div>
        <div className='mt-[85px]'>
          <Slider />
        </div>
      </section>



    </MainLayout>
  );
}

export default App
