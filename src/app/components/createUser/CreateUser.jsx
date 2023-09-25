import React from 'react'
import './createUser.css'

export default function CreateUser() {
  return (
  <div>
    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Crear Usuario</button>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5 " id="exampleModalLabel">Crear Usuario</h1>
                <button type="button" class="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="container-modal"> 
                <div className='container-input d-flex'>
                    <div className='datos1'>   
                        <div class="col-5 col-xxl-3 mb-3">
                            <label for="recipient-name" class="col-form-label">Nombres</label>
                            <input type="text" class="form-control"placeholder='Ingrese nombre del usuario' id="recipient-name"/>
                        </div>
                        <div class="col-4 col-xxl-3 mb-3">
                            <label for="recipient-name" class="col-form-label">Apellido</label>
                            <input type="text" class="form-control"placeholder='Ingrese apellido del usuario' id="recipient-name"/>
                        </div>
                        <div class="col-3 col-xxl-2 mb-3">
                            <label for="recipient-name" class="col-form-label" placeholder='$'>D.N.I</label>
                            <input type="text" class="form-control"placeholder='34.000.000' id="recipient-name"/>
                        </div> 
                    </div>
                    <div className='datos1'>
                    <div class="col-6 col-xxl-4 mb-3">
                            <label for="recipient-name" class="col-form-label">Domicilio</label>
                            <input type="text" class="form-control"placeholder='Av. siempre vivas 23' id="recipient-name"/>
                        </div>
                        <div class="col-2 col-xxl-1 mb-3">
                            <label for="recipient-name" class="col-form-label">Numero</label>
                            <input type="text" class="form-control"placeholder='00000' id="recipient-name"/>
                        </div>
                        <div class="col-4 col-xxl-3 mb-3">
                            <label for="recipient-name" class="col-form-label">Ciudad</label>
                            <select class="form-select" aria-label="Default select example">
                                  <option selected>Seleccione un opcion</option>
                                  <option value="1">Tierra del fuego</option>
                                  <option value="2">Buenos Aires</option>
                                  <option value="3">Salta</option>
                                  <option value="1">Mendoza</option>
                                  <option value="2">Jujuy</option>
                                  <option value="3">La pampa</option>
                            </select>
                        </div>
                    </div>
                    <div className='datos1'>
                    <div class="col-2 col-xxl-1 mb-3">
                            <label for="recipient-name" class="col-form-label">C.P</label>
                            <input type="text" class="form-control"placeholder='Numero cp' id="recipient-name"/>
                        </div>
                        <div class="col-4 col-xxl-3 mb-3">
                            <label for="recipient-name" class="col-form-label">Celular</label>
                            <input type="text" class="form-control"placeholder='+54 2901 000000' id="recipient-name"/>
                        </div>
                        <div class="col-6 col-xxl-4 mb-3">
                            <label for="recipient-name" class="col-form-label">E-mail</label>
                            <input type="text" class="form-control"placeholder='ejemplo@gmail.com' id="recipient-name"/>
                        </div>
                    </div>
                    <div className='title-2'>
                    <h6 htmlFor="">Datos del inicio de seccion</h6>
                    </div>
                    <div className='datos-user col-xxl-8'>
                    
                    <div class="col-5 col-xxl-4 mb-3">
                            <label for="recipient-name" class="col-form-label">Usuario ID</label>
                            <input type="text" class="form-control"placeholder='nombre.apellido' id="recipient-name"/>
                        </div>
                        <div class="col-5 col-xxl-4 mb-3">
                            <label for="recipient-name" class="col-form-label">Contraseña</label>
                            <input type="password" class="form-control"placeholder='Usar May. min 6 caracter' id="recipient-name"/>
                        </div>
                    </div>
                   
                </div>
                
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Editar</button>
                <button type="button" class="btn btn-success">Crear Usuario</button>
            </div>
            </div>
             </div>
</div>
   

</div>
  )
}
