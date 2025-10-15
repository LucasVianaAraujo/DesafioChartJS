import NovaInscricao from '../repository/Inscricoes.js'

import { Router } from "express";

const endpoint = Router();

endpoint.post('/NovaIncricao', async (req, resp) => {
    const { date, totalAgendamentos } = req.body;

    try {
        const registro = await NovaInscricao.create({ date, totalAgendamentos });
        resp.json(registro);
    }

    catch (err) {
        console.log({ erro: err })
    }
})

endpoint.get('/RenderizarIncricoes', async (req, resp) => {
    try {
        const registro = await NovaInscricao.find()
        resp.json(registro);
    }

    catch (err) {
        console.log({ erro: err })
    }
})

export default endpoint;