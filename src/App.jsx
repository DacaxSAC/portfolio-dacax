import { MainLayout } from './components/templates/MainLayout'
import { Hero } from './components/organisms/Hero'
import { About } from './components/organisms/About'
import { Services } from './components/organisms/Services'
import { ProjectShowcase } from './components/organisms/ProjectShowcase'
import { Process } from './components/organisms/Process'
import { ContactCTA } from './components/organisms/ContactCTA'

/* Narrativa: promesa → quiénes somos → qué hacemos → prueba → cómo trabajamos → acción. */
function App() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Services />
      <ProjectShowcase />
      <Process />
      <ContactCTA />
    </MainLayout>
  )
}

export default App
