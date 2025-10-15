import mongoose from "mongoose";

export const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Conectado ao MongoDB!');
    }

    catch (err) {
        console.log("Erro ao conectar com o MongoDB.", err);
    }
}