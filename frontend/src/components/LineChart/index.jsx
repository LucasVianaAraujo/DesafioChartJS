import { Line } from 'react-chartjs-2';
//importando dentro do Chart.js o tipo linha (Line) e seus elementos derivados 'PointElement' e 'LineElement'
import { Chart as ChartJS, PointElement, LineElement, LinearScale, BarElement, CategoryScale, Tooltip } from 'chart.js';

ChartJS.register(LinearScale, LineElement, BarElement, PointElement, CategoryScale, Tooltip);

// array de objetos com as incrições 2025 retiradas do domínio => 'https://vestibular-insf.com.br' disponibilidado pelo Bruno no dia 14/10/2025
const arrIncricaoFrei = [
    { _id: '08/10/2025', totalAgendamentos: 1 },
    { _id: '09/10/2025', totalAgendamentos: 3 },
    { _id: '10/10/2025', totalAgendamentos: 7 },
    { _id: '13/10/2025', totalAgendamentos: 28 },
    { _id: '14/10/2025', totalAgendamentos: 55 },
    { _id: '15/10/2025', totalAgendamentos: 120 },
    { _id: '16/10/2025', totalAgendamentos: 54 },
    { _id: '17/10/2025', totalAgendamentos: 70 },
    { _id: '20/10/2025', totalAgendamentos: 53 },
    { _id: '21/10/2025', totalAgendamentos: 37 },
    { _id: '22/10/2025', totalAgendamentos: 28 },
    { _id: '23/10/2025', totalAgendamentos: 29 },
    { _id: '24/10/2025', totalAgendamentos: 43 }
]

// formatação que permitirá a leitura dos dados de forma individual e por id
// é identico ao BarChart, mas dessa vez o x (exibição) só contém um tipo de informação
const dataIncricoes = arrIncricaoFrei.map(data => ({
    x: data._id,
    y: data.totalAgendamentos
}))

// renderização do gráfico
const data = {
    datasets: [
        {
            label: "Incrições 2025",
            data: dataIncricoes,
            backgroundColor: '#87C2FA',
            borderColor: '#87C2FA', // cor da linha, é legal utilizar pra não ficar estranho, sem isso a linha fica praticamente invisível
            tension: 0.4, // border-radius das bordas
            parsing: {
                xAxisKey: 'x',
                yAxisKey: 'y'
            }
        }
    ]
}

// configurações do gráfico
const chartOption = {
    scales: {
        x: {
            type: 'category',
            position: 'bottom',
        },
        y: {
            beginAtZero: true,
        }
    },
    plugins: {
        tooltip: {
            callbacks: {
                label: function (context) {
                    return "Total Agendamentos: " + context.parsed.y; // retornando o total de agendamentos isolado
                }
            }
        }
    }
};

export default function () {
    return (
        <div>
            <Line data={data} options={chartOption} />
        </div>
    )
}
