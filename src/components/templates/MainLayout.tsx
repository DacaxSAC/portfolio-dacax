import { ReactNode } from "react"
import { Header } from '../organisms/Header';


interface MainLayoutProps {
    children: ReactNode,
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col ">
            <Header />
            <main className="mx-auto ">
                {children}
            </main>
            <footer className="w-full bg-black text-gray-400 text-center">
                <section className=" pt-[91px] w-full h-[367px] bg-[url('/images/Background-Footer.png')] bg-cover bg-top bg-no-repeat">
                    <h2 className=' h-[47px] text-[36px] font-[Roboto Mono] font-bold leading-normal tracking-[0%] text-[#FFFFFF] '>¿Tienes una idea?</h2>
                    <p className='mt-[24px] h-[26px] text-[20px] font-[Roboto Mono] font-normal leading-normal tracking-[0%] text-[#C4E4E9]'>Conversemos y hagámosla realidad</p>
                    <div className="mt-[52px] flex justify-center items-center gap-x-9">
                        <img src="/images/icons/Icon-Wsp.png" alt="" className="w-[32px] h-[32px]" />
                        <img src="/images/icons/Icon-Mail.png" alt="" className="w-[32px] h-[32px]" />
                        <img src="/images/icons/Icon-LinkedIn.png" alt="" className="w-[32px] h-[32px]" />
                        <img src="/images/icons/Icon-Instagram.png" alt="" className="w-[32px] h-[32px]" /> 
                    </div>
                </section>
                <p className="h-[48px] flex justify-center items-center text-[12px] font-[Roboto Mono] font-normal leading-normal tracking-[0%] text-[#FFFFFF]">
                    © 2025 Dacax. Todos los derechos reservados.
                </p>
            </footer>
        </div>
    )
}