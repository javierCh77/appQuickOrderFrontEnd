import {  BrowserRouter as Router,  Route,  Routes} from "react-router-dom";
import './App.css'
//import de bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

// **************************************************
import { Main } from './app/components/main/Main';
//***************import views************************ 
import  Welcome  from './app/pages/viewClient/welcome/Welcome';
import  {List}  from  './app/pages/viewClient/list/List';
import {Table} from '../src/app/components/table/Table'
import Login from '../src/app/pages/viewAdmin/login/Login';
import RestorePassword from './app/pages/viewAdmin/restorePassword/RestorePassword';

//vistas
import Home from './app/pages/viewAdmin/dashboard/view/home/Home'
import Products from './app/pages/viewAdmin/dashboard/view/products/Products';
import Users from './app/pages/viewAdmin/dashboard/view/users/Users';
import Sales from './app/pages/viewAdmin/dashboard/view/sales/Sales';
import Stock from './app/pages/viewAdmin/dashboard/view/stock/Stock'


function App() {
  return (
    < >
        <Router>
            <Routes>
                <Route path="/" element = { < Main />} />
                <Route path="/welcome" element ={ < Welcome /> } />
                <Route path="/list" element ={ < List /> } />
                <Route path="/table" element = { < Table /> } />
                <Route path="/login" element = { < Login /> } />
                <Route path="/inicio" element = { < Home /> } />
                <Route path="/productos" element = { < Products /> } />
                <Route path="/usuario" element = { < Users /> } />
                <Route path="/ventas" element = { < Sales /> } />
                <Route path="/stock" element = { < Stock /> } />
                <Route path="/recuperar-contraseña" element = { < RestorePassword /> } />
            </Routes>
        </Router>
    </>
  );
}

export default App;
