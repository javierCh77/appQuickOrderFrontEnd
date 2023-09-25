import React from 'react'
import './Login.css'
// importo el logo svg para la vista del componente
import logout from '../../../../assets/icon/logout.svg'
import report from '../../../../assets/icon/report.svg'
import { Link } from 'react-router-dom'


export default function Login() {
  return (
    <div className='container-login'>
         <div className='container-1'>
            <Link  to={"/"}><img id="back" src={logout}></img><b id="volver">Volver</b></Link>
         </div> 
         <div className='container-img'>
            <div>
              <img id="logo-login" src={report}></img>
            </div>
            <div className='form-login container-xl'>
                    <div className='container-text'>
                        <div className='p-2'>
                              <span><b> React |</b><b id='text'> Sr.Waffle</b></span>
                        </div>
                        <div className='col-10 mt-3'>
                              <label>Usuario</label>
                              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Escriba aqui su usuario"/>
                        </div>
                        <div className='col-10 mt-3'>
                              <label>Contraseña</label>
                              <input type="password" id="inputPassword5" className="form-control"   placeholder="Escriba aqui su contraseña" aria-labelledby="passwordHelpBlock"/>
                        </div>
                        <Link id="a" to={"/recuperar-contraseña"}>¿Olvidó su contraseña?</Link>
                        <div className='mt-3'>
                              <Link to={"/inicio"} className='btn btn-dark' id="enviar">Ingresar</Link>
                        </div>
                   </div>
                
          </div>
       </div>  
    </div>
  )
}





