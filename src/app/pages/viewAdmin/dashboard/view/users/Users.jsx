import React, { useState, useEffect } from "react";
//import Sidebar from "../../sidebar/Sidebar";
import Header from "../../header/Header";
import "../Views.css";

// import del componente crearuser
import CreateUser from '../../../../../components/createUser/CreateUser';

export default function Users() {
  const [data, setData] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3001/users/list");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log("Error al obtener los datos de la API:", error);
    }
  };

  const handleSearch = async () => {
    try {
      if (searchKeyword.trim() !== "") { // Evita hacer la búsqueda si el campo está vacío o contiene solo espacios en blanco
        const response = await fetch(`http://localhost:3001/users/search/${searchKeyword}`);
        const jsonData = await response.json();
        setData(jsonData);
      } else {
        // Si el campo de búsqueda está vacío, vuelve a cargar todos los usuarios
        fetchData();
      }
    } catch (error) {
      console.log("Error al buscar los datos:", error);
    }
  };

  return (
    <div className="container-main">
        <Header />
      <div className="container-vista">
        <div className="title">
          <h3>Usuarios</h3>
        </div>
         <div className="form-button">
             <div className="container-search">
             <CreateUser />
          <input
            className="form-control inputBuscar"
            type="search"
            id="clienteBuscar"
            placeholder="Ingrese el nombre o apellido o dni a buscar"
            aria-label="Search"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
          <button
            className="btn btn-outline-primary"
            type="button"
            id="buscarCliente"
            onClick={handleSearch}
          >
            BUSCAR
          </button>
        </div>
        <div className="tablaFactura">
          <table className="table table-bordered ">
            <thead>
              <tr className="table-danger">
                <th scope="col">Apellido</th>
                <th scope="col">Nombre</th>
                <th scope="col">DNI</th>
                <th scope="col">Email</th>
                <th scope="col">Usuario</th>
                <th scope="col">Tipo de Usuario</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {data.map((props) => (
                <tr className="table-secondary" key={props.id}>
                  <td>{props.lastName}</td>
                  <td>{props.name}</td>
                  <td>{props.dni}</td>
                  <td>{props.email}</td>
                  <td>{props.user}</td>
                  <td>{props.rol}</td>
                  <td>
                    <button type="button" className="btn btn-warning btnAccion">
                      Editar
                    </button>
                    <button type="button" className="btn btn-danger btnAccion">
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
             
        </div>
      </div>
    </div>
    </div>
  );
}
