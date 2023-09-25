import React from 'react'
import './restorePassword.css'
// importo el logo svg para la vista del componente
import logout from '../../../../assets/icon/logout.svg'
import restore from '../../../../assets/restore.svg'
import { Link } from 'react-router-dom'


export default function RestorePassword() {
  return (
        <div className='container-restore'>
                  <Link  to={"/login"}><img id="back" src={logout}></img><b id="volver">Volver</b></Link>
         <div className='container-form-restore'>
                <div>
                     <img id="logo-restore" src={restore}></img>
                </div>
                 <div className='col-4 mt-3 input-restore'>
                     <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Ingresa tu mail para recuperar tu clave"/>
                 </div>
                 <div className='mt-3 btn-restore'>
                     <Link to={"/login"} className='btn btn-dark' id="enviar">Recuperar Contraseña</Link>
                 </div>
                
        
       </div>  
    </div>
   
  )
}





