import { Route, Routes, BrowserRouter, HashRouter} from 'react-router-dom';
import ProdutosPendentes from '../pages/ProdutosPendentes';
import Produtos from '../pages/Produtos';
import Login from '../pages/Login';



function RouteRoot() {
    return (
        <HashRouter>

            <Routes >
                <Route index element={<Login/>} path='/'/>
                <Route element={<ProdutosPendentes/>} path='/produtospendentes'/>
                <Route element={<Produtos/>} path='/produtos'/>
            </Routes>
         
        </HashRouter>
    )
}


export default RouteRoot;