import Linhas from '../../components/LineChart'
import Cabecalho from '../../components/Header'

import { Link } from "react-router-dom"

export default function Barras() {
    return (
        <div>
            <Cabecalho
                Assunto={'Frei 2026 - Gráfico de Incrições'}
                Link={<Link to={'/'}>Barras</Link>} />
            <Linhas />
        </div>
    )
}