import { ReactNode } from "react"
import {Header} from '../organisms/Header';


interface MainLayoutProps {
    children: ReactNode,
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {  
    return (
        <div>
            <Header/>
            <main className="container mx-auto px-4">
            {children}
            </main>
            
            
        </div>  
    )
}