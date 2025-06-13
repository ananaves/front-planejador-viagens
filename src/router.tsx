import { BrowserRouter, Route, Routes } from "react-router-dom";
import { APP_ROUTES } from "./appConfig";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Perfil from "./components/Perfil/perfil";
import Home from "./components/Home/home";


function AppRoutes() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path={APP_ROUTES.ROUTE_CABECALHO} element={<Cabecalho/>}/>
            <Route path={APP_ROUTES.ROUTE_PERFIL} element={<Perfil/>}/>
            <Route path={APP_ROUTES.ROUTE_HOME} element={<Home/>}/>
        </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;