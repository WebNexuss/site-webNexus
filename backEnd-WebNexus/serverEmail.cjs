require("dotenv").config();

const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json()); // CORRIGIDO: Parênteses estavam faltando
app.use(cors());

// Transporter do Nodemailer
const transporter = nodemailer.createTransport({
    host: "smtp.elasticemail.com",
    port: 587,
    pool: true, 
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
});

// Rota de envio de e-mail
app.post("/contact", async (req, res) => {


    const { nome, email, telefone, mensagem } = req.body;

    // Verifica se os dados chegaram corretamente
    if (!nome || !email || !telefone || !mensagem) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios" });
    }

    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: "developed.jhonatans@gmail.com",
            subject: `Orçamento de ${nome}`,
            text: `Nome: ${nome} \nE-mail: ${email} \nTelefone: ${telefone} \nMensagem: ${mensagem}`
        });

        res.status(200).json({ message: "Email enviado com sucesso!" });
    } catch (error) {
        console.error("Erro ao enviar e-mail:", error);
        res.status(500).json({ message: "Erro ao enviar e-mail", error: error.message });
    }
});

// Definição da porta
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
