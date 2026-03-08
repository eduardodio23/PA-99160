const botao = document.getElementById("gerarBotao");

botao.addEventListener("click", function gerar() {
    const campoNome = document.getElementById("nomedoAluno");
    const nome = campoNome.value;
    
    const campoNota1 = document.getElementById("nota1");
    const campoNota2 = document.getElementById("nota2");
    
    // CORREÇÃO: Adicionei as aspas aqui dentro dos parênteses
    const resultadoDiv = document.getElementById("resultadodaNota");

    let nota1 = Number(campoNota1.value);
    let nota2 = Number(campoNota2.value);

    // Validação do nome
    if (nome.trim() === "") {
        resultadoDiv.innerHTML = "<p style='color: red;'>Por favor, digite o nome do aluno</p>";
        return;
    }

    // Validação das notas
    if (campoNota1.value === "" || campoNota2.value === "") {
        resultadoDiv.innerHTML = "<p style='color: red;'>Preencha as notas!</p>";
        return;
    }
    
    const media = (nota1 + nota2) / 2;

    // CORREÇÃO: Usei "=" para limpar o resultado anterior e fechei a tag <h2> corretamente
    resultadoDiv.innerHTML = `<h2>A média do aluno ${nome} é: ${media.toFixed(1)}</h2>`;
});