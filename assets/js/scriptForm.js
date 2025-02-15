 async function submitForm(nome, email, telefone, mensagem) {
    try {
        const response = await fetch("http://localhost:3000/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nome, email, telefone, mensagem }),
        });

        const data = await response.json();

        if (response.ok) {
            alert("E-mail enviado com sucesso!");
        } else {
            alert("Erro ao enviar e-mail: " + data.message);
        }
    } catch (error) {
        console.error("Erro ao enviar e-mail:", error);
        alert("Erro ao enviar e-mail.");
    }
}

export default submitForm;