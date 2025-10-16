import Linhas from '../../components/LineChart'
import Cabecalho from '../../components/Header'

import { Link } from "react-router-dom"

import './index.scss'
import { useState, useEffect } from 'react'

export default function Barras() {
    const [inscricoes, setInscricoes] = useState(0);
    const [popularidade, setPopularidade] = useState(0);

    useEffect(() => {
        async function fetchTotal() {
            try {
                const resp = await fetch('https://desafiochartjs-2.onrender.com/RenderizarInscricoes');
                const data = await resp.json();
                setInscricoes(data.TotalMatricula);
            } catch (err) {
                console.log(err);
            }
        }

        fetchTotal();
        const intervalo = setInterval(fetchTotal, 5000);
        return () => clearInterval(intervalo);
    }, []);

    useEffect(() => {
        async function fetchDiaMaisInscricoes() {
            const resp = await fetch('https://desafiochartjs-2.onrender.com/DiaComMaisInscricoes');
            const data = await resp.json();
            setPopularidade(data);
        }

        fetchDiaMaisInscricoes();
        const intervalo = setInterval(fetchDiaMaisInscricoes, 5000);
        return () => clearInterval(intervalo);
    }, []);

    return (
        <div className='Principal'>
            <Cabecalho
                Assunto={'Frei 2026 - Gráfico de Incrições'}
                Link={<Link to={'/'}>Barras</Link>} />
            <div className="ApresentandoConteudo">
                <div className="LadoEsquerdo">
                    <h1 id="TituloPrincipal">Acompanhar Tráfego de Inscrições</h1>
                    <h4>Acompanhe em <span>tempo real</span> as inscrições para o ano de 2026 no Instituto Social Nossa Senhora de Fátima.</h4>
                </div>
                <div className="LadoDireito">
                    <div className="Cima">
                        <h3 id="Titulo">Total de Inscrições</h3>
                        <h1 id="Incricoes">{inscricoes}</h1>
                        <h4 id="Total">Dados atualizados em tempo real</h4>
                    </div>
                    <div className="Baixo">
                        <h3 id="Titulo">Recorde de Inscrições</h3>
                        <h1 id="Curso">{popularidade._id}</h1>
                        <h4 id="Total">Inscrições: {popularidade.total}</h4>
                    </div>
                </div>
            </div>

            <div className="Barras">
                <Linhas />
            </div>
        </div>
    )
}