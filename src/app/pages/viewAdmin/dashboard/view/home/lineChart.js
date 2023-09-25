import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

var beneficios = [20, 15, 36, 55, 40, 60, 55];
var meses = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

var midata = {
    labels: meses,
    datasets: [ // Cada una de las líneas del gráfico
        {
            label: 'Semana actual',
            data: beneficios,
            tension: 0.5,
            fill : true,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.3)',
            pointRadius: 5,
            pointBorderColor: 'rgba(255, 99, 132)',
            pointBackgroundColor: 'rgba(255, 99, 132)',
        },
        {
            label: 'Semana anterior',
            data: [20, 25, 60, 65, 45, 10, 30]
        },
    ],
};

var misoptions = {
    scales : {
        y : {
            min : 0,
            
        },
        x: {
            ticks: { color: 'rgb(255, 255, 255, 0.8)'}
        }
    }
};

export default function LinesChart() {
    return <Line data={midata} options={misoptions}/>
}