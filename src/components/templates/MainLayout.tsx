import { ReactNode } from "react"
import { Header } from '../organisms/Header';


interface MainLayoutProps {
    children: ReactNode,
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="mx-auto ">
                {children}
            </main>
            <footer className="w-full bg-black text-gray-400 text-center">
                <section className="w-full h-64 bg-[url('/images/Background-Footer.png')] bg-cover bg-top bg-no-repeat">
                    <h2 className="m-0 pt-20">¿Tienes una idea?</h2>
                    <p>Conversemos y hagámosla realidad</p>
                    <div></div>
                </section>
                <p className="text-sm py-4">
                    © 2025 Dacax. Todos los derechos reservados.
                </p>
            </footer>


        </div>
    )
}