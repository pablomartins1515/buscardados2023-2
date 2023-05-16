import { Header } from "../componentes/Header";
import { Sidebar } from "../componentes/Sidebar";

export function BlogPage () {
    return (
        <div>
            <Header />
            <div className="flex flex-1 justify-center">
                <Sidebar />
            </div>            
        </div>       
    )        
}