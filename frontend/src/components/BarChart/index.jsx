import './index.scss'

import { useEffect, useState } from 'react';

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, LinearScale, BarElement, CategoryScale, Tooltip } from 'chart.js';

ChartJS.register(LinearScale, BarElement, CategoryScale, Tooltip);

// // array de objetos com as incrições 2025 retiradas do domínio => 'https://vestibular-insf.com.br' disponibilidado pelo Bruno no dia 14/10/2025
// const arrIncricaoFrei = [
//     {
//         _id: { courseName: 'Administração', periodName: 'Manhã' },
//         totalInscritos: 32
//     },
//     {
//         _id: { courseName: 'Administração', periodName: 'Tarde ' },
//         totalInscritos: 49
//     },
//     {
//         _id: {
//             courseName: 'Automação Residencial e Robótica',
//             periodName: 'Manhã'
//         },
//         totalInscritos: 4
//     },
//     {
//         _id: {
//             courseName: 'Automação Residencial e Robótica',
//             periodName: 'Tarde '
//         },
//         totalInscritos: 5
//     },
//     {
//         _id: { courseName: 'Informática', periodName: 'Manhã' },
//         totalInscritos: 31
//     },
//     {
//         _id: { courseName: 'Informática', periodName: 'Tarde ' },
//         totalInscritos: 49
//     },
//     {
//         _id: {
//             courseName: 'Inglês Básico - Pré Intermediário (Diurno)',
//             periodName: 'Manhã 1'
//         },
//         totalInscritos: 30
//     },
//     {
//         _id: {
//             courseName: 'Inglês Básico - Pré Intermediário (Diurno)',
//             periodName: 'Manhã 2'
//         },
//         totalInscritos: 20
//     },
//     {
//         _id: {
//             courseName: 'Inglês Básico - Pré Intermediário (Diurno)',
//             periodName: 'Tarde 1'
//         },
//         totalInscritos: 51
//     },
//     {
//         _id: {
//             courseName: 'Inglês Básico - Pré Intermediário (Diurno)',
//             periodName: 'Tarde 2 '
//         },
//         totalInscritos: 24
//     },
//     {
//         _id: {
//             courseName: 'Inglês Intermediário (Sábados)',
//             periodName: 'Manhã'
//         },
//         totalInscritos: 93
//     },
//     {
//         _id: {
//             courseName: 'Inglês Pré Intermediário (Noturno)',
//             periodName: 'Noite'
//         },
//         totalInscritos: 14
//     }
// ]

// formatação que permitirá a leitura dos dados de forma individual e por id
// autoexplicativo, mas basicamente eu estou puxando o nome do curso e perído na coluna x (Exibição) e o total de inscritos como condição de altura na coluna y (Comparação)
// const dataIncricoes = arrIncricaoFrei.map(data => ({
//     x: data._id.courseName + ' - ' + data._id.periodName,
//     y: data.totalInscritos
// }))

export default function BarChart() {
    const [arrInscricoes, setArrInscricoes] = useState([]);

    useEffect(() => {
        const RenderizarDados = async () => {
            try {
                const resp = await fetch('http://localhost:5001/RenderizarCursos');
                const respJson = await resp.json();

                const DadosFormatados = respJson.map(resp => ({
                    x: resp.courseName + ' - ' + resp.periodName,
                    y: resp.totalInscritos
                }))

                setArrInscricoes(DadosFormatados);
            }
            catch (err) {
                console.log(err)
                return;
            }
        }

        RenderizarDados()
    }, [])

    // renderização do gráfico
    const data = {
        labelcd: arrInscricoes.map(item => item.x),
        datasets: [
            {
                label: "Dataset1",
                data: arrInscricoes,
                backgroundColor: [
                    '#d4a628ff',
                    '#d4a628ff',
                    '#25a368ff',
                    '#25a368ff',
                    '#a15cc9ff',
                    '#a15cc9ff',
                    '#25a368ff',
                    '#25a368ff',
                    '#0463bdff',
                    '#0463bdff',
                    '#87C2FA',
                    '#c74e46ff',
                    '#c74e46ff',
                    '#c52c21ff',
                    '#c52c21ff',
                    '#c52c21ff',
                    '#c52c21ff',
                    '#f8fa87ff',
                    '#f8fa87ff',
                    '#87f6faff',
                    '#87f6faff',
                    '#87f6faff',
                    '#b1fa87ff',
                    '#b1fa87ff',
                    '#b1fa87ff',
                    '#b1fa87ff'
                ],
                parsing: {
                    xAxisKey: 'x',
                    yAxisKey: 'y'
                }
            }
        ]
    }

    // configurações do gráfico
    const chartOption = {
        resposive: true,
        scales: {
            x: {
                type: 'category', // tipo texto
                position: 'bottom', // textos indicativos abaixo das linhas
                min: 1 // inicia na primeira coluna
            },
            y: {
                beginAtZero: true,
            }
        },
        plugins: {
            tooltip: { // tooltip é o que exibe informações do gráfico no hover, aqui eu estou permitindo um retorno que mostra a quantidade de incrições feitas que está armazenado na coluna y originalmente informada pela variável de estado "arrIncricaoFrei"
                callbacks: {
                    label: function (context) {
                        return "Incrições: " + context.parsed.y;
                    }
                }
            }
        }
    };

    return (
        <div className='Bar'>
            <Bar data={data} options={chartOption} />
        </div>
    )
}