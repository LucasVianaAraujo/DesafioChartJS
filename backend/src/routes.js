import Cursos from './controller/Cursos.js'
import Incricoes from './controller/Inscricoes.js'

export default function AdicionarRotas(api) {
    api.use(Cursos),
    api.use(Incricoes)
}