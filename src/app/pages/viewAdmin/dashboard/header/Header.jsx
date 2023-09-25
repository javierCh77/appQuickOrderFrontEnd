import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

// importacion de los iconos
import home from '../../../../../assets/icon/home.svg'
import award from '../../../../../assets/icon/award.svg'
import users from '../../../../../assets/icon/users.svg'
import ventas from '../../../../../assets/icon/ventas.svg'
import stock from '../../../../../assets/icon/stock.svg'
import logout from '../../../../../assets/icon/logout.svg'


export default function Header() {
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark">
         <div class="container-fluid">
                <Link class="navbar-brand container-test" to={'/inicio'}>
                    <div>
                      <img className='header-logo'  alt="" />
                    </div>
                    <div>
                        <h5>Sr.Waffle</h5>
                    </div>
                    </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            <div className="offcanvas offcanvas-end text-bg-dark  menu" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                <div class="offcanvas-header" >
                    <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
                     <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  
         
        <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item link-menu" >
                <img src={home}  alt="" />
                <Link class="nav-link active test" aria-current="page" to={"/inicio"}>Inicio</Link> 
            </li>
            <li class="nav-item link-menu">
                <img  src={award} alt="" />
                <Link class="nav-link active test" aria-current="page" to={"/productos"}>Producto</Link>
            </li>
            <li class="nav-item link-menu">
                <img  src={users}  alt="" />
                <Link class="nav-link active test" aria-current="page" to={"/usuario"}>Usuario</Link>
            </li>
            <li class="nav-item link-menu" >
                <img  src={ventas} alt="" />
                <Link class="nav-link active test" aria-current="page" to={"/ventas"}>Ventas</Link>
            </li>
            <li class="nav-item link-menu">
                <img src={stock} alt="" />
                <Link class="nav-link active test" aria-current="page" to={"/stock"}>Stock</Link>
            </li>
            
            </ul>
               <div className='container-logout'>
                  <Link class="btn btn-success" type="submit">
                  <img src={logout} className="closed" alt="" />
                  Cerrar Seccion</Link>
                </div>
              </div>
              </div>
            </div>
        
        </nav>
    </div>
  )
}
