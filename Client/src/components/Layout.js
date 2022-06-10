import { Outlet } from "react-router-dom"
//Componentes

//Outlet guarda um conjunto de rotas

const Layout = () => {
    return (
    <main>
        <Outlet />
    </main>
    )
}

export default Layout