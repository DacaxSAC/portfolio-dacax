import { ReactNode } from "react"


interface MainLayoutProps {
    children: ReactNode,
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {  
    return (
        <div className="container mx-auto px-4">
            {children}
        </div>
    )
}