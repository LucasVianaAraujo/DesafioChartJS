import mongoose from 'mongoose'

const inscricaoSchema = new mongoose.Schema({
    date: String,
    totalAgendamentos: Number
})

export default mongoose.model("NovaInscricao", inscricaoSchema)