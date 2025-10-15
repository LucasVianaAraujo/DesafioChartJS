import mongoose from 'mongoose'

const cursoSchema = new mongoose.Schema({
    courseName: String,
    periodName: String,
    totalInscritos: Number
})

export default mongoose.model("NovoCurso", cursoSchema)