import react from 'react';
import './Contador.css'


function Contador({ numClics }){
    return (
        <div className='contador'>
           {numClics}
        </div>
    )
}

export default Contador;