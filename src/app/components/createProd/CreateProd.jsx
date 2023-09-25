import React from 'react'
import './createProd.css'

export default function CreateProd() {
  return (
  <div>
 
    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Crear Producto</button>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg ">
            <div class="modal-content ">
            <div class="modal-header">
                <h1 class="modal-title fs-5 " id="exampleModalLabel">Crear Waffle</h1>
                <button type="button" class="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="container-modal"> 
                <div className='container-input d-flex'>
                    <div className='container-codigo'>   
                        <div class="col-12 col-xxl-12 mb-3">
                            <label for="recipient-name" class="col-form-label"><b>CODIGO</b></label>
                            <input type="text" class="form-control" placeholder='Ingresa el numero de codigo' id="recipient-name"/>
                        </div>       
                    </div>
                    <div className='datos2'>   
                        <div class="col-10 col-xxl-8 mb-3">
                            <label for="recipient-name" class="col-form-label">Nombre</label>
                            <input type="text" class="form-control"placeholder='Ingrese el nombre del waffle' id="recipient-name"/>
                        </div>
                        <div class="col-2 col-xxl-4 mb-3">
                            <label for="recipient-name" class="col-form-label" placeholder='$'>Precio</label>
                            <input type="text" class="form-control"placeholder='$0,00' id="recipient-name"/>
                        </div> 
                    </div>
                    <div className='datos2'>
                        <div class="col-8 col-xxl-8   mb-3">
                            <label for="recipient-name" class="col-form-label">Descripcion</label>
                            <textarea type="text" class="form-control" placeholder='Añada una descripcion del producto o caracteristica' id="recipient-name"/>
                        </div>
                        <div class="col-4  col-xxl-4 mb-3">
                            <label for="recipient-name" class="col-form-label">Subir Imagen</label>
                            <input type="file" class="form-control" id="recipient-name"/>
                        </div> 
                    </div>
                   
                </div>
                
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" class="btn btn-success">Crear Waflle</button>
            </div>
            </div>
             </div>
</div>
   

</div>
  )
}
