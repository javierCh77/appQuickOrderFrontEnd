import React from 'react'
import { Link } from "react-router-dom"
import './Main.css'
// assets
import people from'../../../assets/icon/people.svg'
import chart from '../../../assets/icon/chart.svg'


export const Main = () => {
  return (
    <div className="container-home">
             <div className='container-left' >  
                    <img id='imgMain'src={people}></img>
                    <Link to={"/Welcome"} type="button" className="btn btn-outline-light">Pantalla cliente</Link>   
              </div> 
              <div className='container-right'> 
                    <img  id='imgMain' src={chart}></img>   
                    <Link to={"/Login"} type="button"  className="btn btn-outline-light">Pantalla Sistema</Link>        
             </div>   
    </div>
  )
}


