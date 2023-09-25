import React from 'react';
import './Card.css'

import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Modal } from '../modal/modal.jsx';

export function CardList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/products/list');
      const jsonData = await response.json();
      setData(jsonData);
} catch (error) {
      console.error('error al consumir la api', error);
    }
  };
  return (
    <div  className="row">
      {data.map((props) => (
        <Card key={props.id} id={props.id} name={props.name} imgUrl={props.imgUrl} price={props.price} description={props.description}/>
      ))}
    </div>
  )
};

export function Card({id,name, description,imgUrl, price,quantity}) {
  return (
    <div className='container-card'>
      <Link onClick={() => {Modal(id,name, description,imgUrl, price,quantity)}} className="card" >
        <img src={imgUrl}  className="card-img-top" alt="..."></img>
        <div className="card-body">
          <div className="card-text">{name}</div> 
          <div className='title-card'>${price}</div> 
        </div>
      </Link>
    </div>     
 )
};