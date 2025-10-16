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

endpoint.get('/RenderizarInscricoes', async (req, resp) => {
    try {
        const registro = await NovaInscricao.aggregate([
            { $group: { _id: null, total: { $sum: "$totalAgendamentos" } } }
        ]);

        const TotalMatricula = registro.length > 0 ? registro[0].total : 0;

        resp.json({ TotalMatricula });
    } catch (err) {
        console.log({ erro: err });
    }
});

endpoint.get('/DiaComMaisInscricoes', async (req, resp) => {
    const registro = await NovaInscricao.aggregate([
        { $group: { _id: "$date", total: { $sum: "$totalAgendamentos" } } },
        { $sort: { total: -1 } },
        { $limit: 1 }
    ]);

    resp.json(registro[0]);
});

export default endpoint;