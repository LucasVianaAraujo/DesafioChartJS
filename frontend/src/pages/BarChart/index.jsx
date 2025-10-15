import BarChart from "../../components/BarChart"
import Cabecalho from '../../components/Header'

import './index.scss'

import { Link } from "react-router-dom"

export default function Linhas() {
    return (
        <div>
            <Cabecalho
                Assunto={'Frei 2026 - Gráfico de Cursos Escolhidos'}
                Link={<Link to={'/LineChart'}>Linhas</Link>} />
            <div className="Bar">
                <BarChart />
            </div>
        </div>
    )
}
