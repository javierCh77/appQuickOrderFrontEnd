import React from 'react'
//import Sidebar from '../../sidebar/Sidebar'
import Header from '../../header/Header'
import './Home.css'

// importacion chart.js

import  LinesChart from './lineChart.js'
import  Pies from './piesChart.js'
import BarChart from './barChart.js'


export default function Home(props) {
  return (
    <div className='container-main'>
         <Header />
       <div className="container-vista">
          <div className="title">
              <h3>Dashboard</h3>
          </div>
          <div className='container-data'>
            <div className='container-sales'>
                  <div className='container-box1'>
                  <div className='box1'>
                     <h4>PEDIDOS CANCELADOS</h4>
                     <h1 className='pc'>{props.precio} 40</h1> 
                  </div>
                    <div className='chart'>
                    <LinesChart/>
                    </div>
                    
                  </div>
                  <div className='container-box2'>
                  <div className='box2'>
                    <h4>PEDIDOS ENTREGADOS</h4>
                    <h1 className='pc2'>{props.precio} 70</h1> 
                    </div>
                    <div className='chart'>
                    <Pies />
                    </div>
                  </div>
                  <div className='container-box3'>
                  <div className='box3'>
                    <h4>INGRESO DIARIO</h4>
                    <h1 className='pc3'>{props.precio}$ 70</h1> 
                    </div>
                    <div className='chart'>
                    <BarChart />
                    </div>
                  </div>
                  
            </div>
           
          </div>
    
    
    

    
        
       </div>
</div>
  )
}
