import NovoCurso from '../repository/Cursos.js'

import { Router } from "express";

const endpoint = Router();

endpoint.post('/NovoCurso', async (req, resp) => {
    const { courseName, periodName, totalInscritos } = req.body;

    try {
        const registro = await NovoCurso.create({ courseName, periodName, totalInscritos });
        resp.json(registro);
    }

    catch (err) {
        console.log({ erro: err })
    }
})

endpoint.get('/RenderizarCursos', async (req, resp) => {
    try {
        const registro = await NovoCurso.find()
        resp.json(registro);
    }

    catch (err) {
        console.log({ erro: err })
    }
})

endpoint.get('/RenderizarContagem', async (req, resp) => {
    try {
        const registro = await NovoCurso.aggregate([
            { $group: { _id: null, total: { $sum: "$totalInscritos" } } }
        ]);

        const TotalMatricula = registro.length > 0 ? registro[0].total : 0;
        resp.json({ TotalMatricula });
    }
    catch (err) {
        console.log({ erro: err });
    }
});

endpoint.get('/CursoMaisEscolhido', async (req, resp) => {
    const cursos = await NovoCurso.find();

    let cursoMaisEscolhido = cursos[0];

    for (let i = 1; i < cursos.length; i++) {
        if (cursos[i].totalInscritos > cursoMaisEscolhido.totalInscritos) {
            cursoMaisEscolhido = cursos[i];
        }
    }

    resp.json({
        nome: cursoMaisEscolhido.courseName,
        periodo: cursoMaisEscolhido.periodName,
        total: cursoMaisEscolhido.totalInscritos
    });
});

export default endpoint;