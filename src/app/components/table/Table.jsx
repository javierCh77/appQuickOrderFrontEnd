import React, { useEffect, useState } from "react";
import Boton from '../boton/Boton'
import { Link } from "react-router-dom";
import Contador from "../contador/Contador";
import "./Table.css";
import {ModalCancel, ModalSuccess} from '../modal/modal.jsx'


//--  fetch para trael el total del pedido --//
function useTotalCartFetch() {
  const [totalCart, setTotalCart] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/cart/total");
        const jsonData = await response.json();
        setTotalCart(jsonData);
      } catch (error) {
        console.log("Error getting API data:", error);
      }
    };
    fetchData();
  }, []);

  return totalCart;
}
//-- funciuon tabla--// aca se renderiza la tabla del pedido y se muetra la informacion correspondiente
export function Table() {
 // boton de contador de cantidad //  
  const [numClics, setNumClics] = useState(1);
  const [data, setData] = useState([]);
  const totalCart = useTotalCartFetch();

  const sumarClic = () => {
    setNumClics(numClics + 1);
  };

  const restarClic = () => {
    setNumClics(numClics - 1);
  };
//-- fetch para obtener la cantidad de productos cargada al carrito--//
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/cart/order");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log("Error al obtener los datos de la API:", error);
    }
  };
//-- renderizo la tabla y se llena con data.mapp --//
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Descripción</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Imagen</th>
            <th scope="col">Precio</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {data.map((props) => (
            <tr scope="row" key={props.id}>
              <td scope="row">{props.name}</td>
              <td scope="row">{props.description}</td>
              <td id="quantity" scope="row">
                <Boton texto=" - " esBotonDeClic={true} manejarClic={restarClic} />
                <Contador numClics={numClics} />
                <Boton texto=" + " esBotonDeClic={true} manejarClic={sumarClic} />
              </td>
              <td scope="row">
                <img id="img-quantity" src={props.imgUrl} alt={props.name} />
              </td>
              <td scope="row">
                <b>${props.price}</b>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="container-sub">
        <hr />
        <div className="row">
          <div className="col-lg-10" id="total">
            <h3>Total</h3>
          </div>
          <div className="col-lg-2" id="importe">
            <div className="total">
              <h3>${totalCart}</h3>
            </div>
          </div>
        </div>
      </div>

      <div id="container-button" className="row align-items-end">
        <div className="col-6 ">
        <Link onClick={() => {ModalCancel()}} className="card" > 
          <button type="button" className="btn btn-danger px-4 py-4 btnCancelar">
            Cancelar pedido
          </button>
          </Link>
        </div>
        <div className="col-6">
        <Link onClick={() => {ModalSuccess()}} className="card" >
          <button type="button" className="btn btn-success px-4 py-4 btnFinalizar">
            Finalizar pedido
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Table;

/* 

//------ codigo de table a sustituir -----------//


export function Table() {
////////////////////////////////////////////////////////
  // referente al codigo para el boton de contador
  const [numClics, setNumClics ] = useState(1); 

  const sumarClic = () =>{
    setNumClics(numClics + 1);
 }
  const restarClic = () =>{
    setNumClics(numClics - 1);
  }

  /////////////////////////////////////////////////////
  const [data, setData] = useState([]);

  //------------- consumo mi api-------------//
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/cart/order"
      );
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log("Error al obtener los datos de la API:", error);
    }
  };
  //------------- lleno la "LIST" con los atributos-------------//



  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Descripción</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Imagen</th>
            <th scope="col">Precio</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
        {data.map((props) => (
            <tr scope="row" key={props.id}>
              <td scope="row">{props.name}</td>
              <td scope="row">{props.description}</td>
              <td id="quantity" scope="row">
                 <Boton  texto=" - " esBotonDeClic={true}  manejarClic={restarClic} />
                   <Contador numClics={numClics}/>
                 <Boton texto=" + " esBotonDeClic={true} manejarClic={sumarClic} />
               </td>
              <td scope="row">
                <img id="img-quantity" src={props.imgUrl} />
              </td>
              <td scope="row">
                <b>${props.price}</b>
              </td>
            </tr>
        ))}
        </tbody>
      </table>
      
      <div className="container-sub">
         <hr></hr>
         
           <div className="row" >
              <div className="col-lg-10" id="total">
                  <h3>Total</h3>
              </div>
              <div className="col-lg-2" id="importe">
                    <h3> $ 16.000</h3>
               </div>
           </div>
        </div>
          
      
      <div id="container-button" className="row align-items-end">
        <div className="col-6 ">
          <button type="button" className="btn btn-danger px-4 py-4 btnCancelar ">
            Cancelar orden
          </button>
        </div>
        <div className="col-6">
          <button type="button" className="btn btn-success px-4 py-4 btnFinalizar">
            Finalizar pedido
          </button>
        </div>
      </div>
    
    </div>
     
  );
}

*/