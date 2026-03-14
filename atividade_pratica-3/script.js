function voto() {
    
    // Pegando os elementos corretamente
    const campo1 = document.getElementById("numero1").value;
    const divResultado = document.getElementById("resultado"); // Removido o .value

    if (campo1 === "") {
        // Ajustei o texto do erro para fazer sentido com o contexto
        divResultado.innerHTML = "<p style='color: red; text-shadow: 1px 1px 2px black;'>Atenção: Digite a sua idade para gerar a análise!</p>";
        return; 
    }

    // Converte o texto digitado para número
    const idade = parseInt(campo1);
    let mensagem = "";

    // Sua lógica (que está perfeita!)
    if (idade < 16) {
        mensagem = "Sem voto: Você ainda não tem idade para votar.";
    } else if (idade === 16 || idade === 17 || idade >= 70) {
        mensagem = "Voto opcional: Você pode votar, mas não é obrigatório.";
    } else {
        mensagem = "Voto obrigatório: Você deve votar.";
    }

    divResultado.innerHTML = `<p style='color: green;'><strong>Resultado:</strong> ${mensagem}</p>`;
}

// Corrigido o nome do ID do botão (btnAnalisar)
const botao = document.getElementById("btnAnalisar");
botao.addEventListener("click", voto);