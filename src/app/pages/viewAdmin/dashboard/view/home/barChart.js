import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler,} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

var beneficios = [72, 56, 20, 36, 80, 30, 13];
var estaciones = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

var misoptions = {
    responsive : true,
    animation : true,
    plugins : {
        legend : {
            display : false
        }
    },
    scales : {
        y : {
            min : 0,
            max : 100
        },
        x: {
            ticks: { color: 'rgba(255, 255, 255)'}
        }
    }
};

var midata = {
    labels: estaciones,
    datasets: [
        {
            label: 'FTY',
            data: beneficios,
            backgroundColor: 'rgba(175, 241, 213)'
        }
    ]
};

export default function Bars() {
    return <Bar data={midata} options={misoptions} />
}