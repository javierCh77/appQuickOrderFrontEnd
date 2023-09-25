import react from 'react';
import './Boton.css'

//test pool request 
function Boton ({texto, manejarClic}){
    return (
        <button 
             className='btn btn-secondary btnPlus'
             onClick={manejarClic}>
             {texto}
        </button>
    );
}

export default Boton;