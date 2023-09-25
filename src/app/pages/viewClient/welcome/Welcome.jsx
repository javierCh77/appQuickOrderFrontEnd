import React from 'react';
import { Link } from "react-router-dom";
// style personalizations
import './Welcome.css';
// assets img 
import  translate  from  '../../../../assets/icon/translate.svg';
import  viewWelcomeEdit  from  '../../../../assets/viewWelcomeEdit.png';
// sweet alert 
import {showAlert} from "../../../components/selectLang/selectLang.js";


export default function Welcome() {
  return (
    <div className='container-todo' >
      <Link className='container-img' to={"/list"}>
         <div id="box1"></div>
         <div id="box2"></div>
         <div id="box3"></div>
      </Link>
       <div className='container-lang'>
          <button type="button" onClick={showAlert} id='btn' className="btn btn-outline-light"> 
          <img className='img-lang' src={translate} alt="" />
             Lenguaje
           </button>
       </div>
          <Link id="link-start"to={"/list"}>
              <div className="button-start">
                 TOCA AQUI PARA COMENZAR
              </div>  
          </Link>
           
    </div>
  )
}


