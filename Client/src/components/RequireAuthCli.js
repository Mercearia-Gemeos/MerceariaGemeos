import { useLocation, Navigate, Outlet } from "react-router-dom";
//Componentes


import useStore from "../hooks/useStore";
//Hooks


const RequireAuthCli = () => {
    const { authCli } = useStore();
    //Recebe a Variavel Global de Autenticação

    const location = useLocation();
    //Lembra qual página o usuário estava indo antes de ser detido pela página de login



    // Verifica se a Variavel Global "auth", possui o campo "user", 
    // caso Verdadeiro, é renderizado a página desejada atravéz do Outlet
    // caso Falso, é redirecionado para a página de login, e armazena na memoria a url que o usuáro queria acessar

    return (

        authCli?.user
            ? <Outlet />
            : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuthCli;