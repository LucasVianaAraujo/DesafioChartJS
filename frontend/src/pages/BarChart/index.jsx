import { useState, useEffect } from "react"
import BarChart from "../../components/BarChart"
import Cabecalho from '../../components/Header'

import './index.scss'

import { Link } from "react-router-dom"

export default function Linhas() {
    const [inscricoes, setInscricoes] = useState(0);
    const [curso, setCurso] = useState({ nome: '', perido: '', total: '' })

    useEffect(() => {
        async function fetchTotal() {
            try {
                const resp = await fetch('https://desafiochartjs-2.onrender.com/RenderizarContagem');
                const data = await resp.json();
                setInscricoes(data.TotalMatricula);
            }

            catch (err) {
                console.log(err);
            }
        }

        fetchTotal();
        const intervalo = setInterval(fetchTotal, 5000)
        return () => clearInterval(intervalo)
    }, []);

    useEffect(() => {
        async function fetchCurso() {
            const resp = await fetch('https://desafiochartjs-2.onrender.com/CursoMaisEscolhido');
            const data = await resp.json();
            setCurso(data);
        }

        fetchCurso();
        const intervalo = setInterval(fetchCurso, 5000);
        return () => clearInterval(intervalo);
    }, []);

    return (
        <div className="Principal">
            <Cabecalho
                Assunto={'Frei 2026 - Gráfico de Cursos Escolhidos'}
                Link={<Link to={'/LineChart'}>Linhas</Link>} />
            <div className="ApresentandoConteudo">
                <div className="LadoEsquerdo">
                    <h1 id="TituloPrincipal">Acompanhar Tráfego de Matrículas</h1>
                    <h4>Acompanhe em <span>tempo real</span> as inscrições para o ano de 2026 no Instituto Social Nossa Senhora de Fátima.</h4>
                </div>
                <div className="LadoDireito">
                    <div className="Cima">
                        <h3 id="Titulo">Total de Matrículas</h3>
                        <h1 id="Incricoes">{inscricoes}</h1>
                        <h4>Dados atualizados em tempo real</h4>
                    </div>
                    <div className="Baixo">
                        <h3 id="Titulo">Curso mais Escolhido</h3>
                        <h1 id="Curso">{curso.nome}</h1>
                        <h4 id="Total">Inscrições: {curso.total}</h4>
                    </div>
                </div>
            </div>

            <div className="Barras">
                <BarChart />
            </div>
        </div>
    )
}
