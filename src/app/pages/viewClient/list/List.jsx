import React, { useEffect, useState } from "react";
import "./List.css";
//import { Table } from "../../../components/table/Table.jsx";
import { CardList } from "../../../components/card/Card";
import { showAlert } from "../../../components/selectLang/selectLang.js";
import { Link } from "react-router-dom";
// import de vaul esto es para ver el carroloco
import { Vaul } from '../../../components/vaul/Vaul.jsx';
import { Drawer } from 'vaul';
import { Table } from '../../../components/table/Table';


function CantCartFetch() {
  let [cantCart, setCantCart] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/cart/vieworder");
        const jsonData = await response.json();
        setCantCart(jsonData);
      } catch (error) {
        console.log("Error getting API data:", error);
      }
    };
    fetchData();
  }, []);
  return cantCart;
}

export function List() {
  let cantCart = CantCartFetch();
  
  return (
    <div className="container-main">
        <div className="container-header"></div>
        <div className="container-lang" onClick={showAlert}>
          <div>
             <svg  xmlns="http://www.w3.org/2000/svg"  fill="currentColor"  className="bi bi-translate" viewBox="0 0 25 25" >
              <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
              <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
             </svg>{"Lenguaje "}
           </div>
         </div> 
         <div  className='container-list'>
          <CardList />
          </div>
          <Drawer.Root  shouldScaleBackground>
            <Drawer.Trigger asChild>
          <div className="container-menu">
               <div>
                Mi orden
               </div>
              <button className="contador-car">
                {cantCart}
              </button>
              </div>
            </Drawer.Trigger>
            <Drawer.Overlay/>
              <Drawer.Content className="container-vaul">
                    <Drawer.Title className="font-medium mb-4 vaul-title">Mi orden</Drawer.Title>
                      <div className="container">
                         <Table/>
                      </div>
              </Drawer.Content>
          </Drawer.Root>
      </div>
  );
}