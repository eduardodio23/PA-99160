const botao = document.getElementById("gerarBotao");

botao.addEventListener("click", function gerar() {
    const campoNome = document.getElementById("nomedoAluno");
    const nome = campoNome.value;
    
    const campoNota1 = document.getElementById("nota1");
    const campoNota2 = document.getElementById("nota2");
    const resultadoDiv = document.getElementById("resultadodaNota");

    let nota1 = Number(campoNota1.value);
    let nota2 = Number(campoNota2.value);

    // Validação de campos vazios
    if (nome.trim() === "" || campoNota1.value === "" || campoNota2.value === "") {
        resultadoDiv.innerHTML = "<p style='color: red;'>Por favor, preencha todos os campos corretamente!</p>";
        return;
    }

    // Cálculo da Média
    const media = (nota1 + nota2) / 2;

    // --- NOVA LÓGICA DE COMPARAÇÃO ---
    let situacao = "";
    let corFeedback = "";

    if (media >= 7) {
        situacao = "APROVADO";
        corFeedback = "green";
    } else {
        situacao = "REPROVADO";
        corFeedback = "red";
    }
    // ---------------------------------

    // Exibição do Resultado
    resultadoDiv.innerHTML = `
        <div style="border: 2px solid ${corFeedback}; padding: 10px; border-radius: 8px;">
            <h2>Média do aluno ${nome}: ${media.toFixed(1)}</h2>
            <h3 style="color: ${corFeedback};">Situação: ${situacao}</h3>
        </div>
    `;
});