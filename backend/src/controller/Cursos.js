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

export default endpoint;