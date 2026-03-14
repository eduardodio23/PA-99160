function verificarAposentadoria() {
    // 1. Pega os valores digitados
    const codigo = document.getElementById("codigo").value;
    const anoNasc = parseInt(document.getElementById("anoNasc").value);
    const tempoTrabalho = parseInt(document.getElementById("tempoTrabalho").value);
    const divResultado = document.getElementById("resultado");

    if (!codigo || !anoNasc || !tempoTrabalho) {
        divResultado.innerHTML = "<p style='color: red;'>Por favor, preencha todos os campos corretamente!</p>";
        return;
    }
    
    // 2. Calcula a idade do empregado
    // Usamos o comando Date() para pegar o ano atual automaticamente do sistema
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - anoNasc;

    let mensagemAposentadoria = "";

    if (idade >= 65 || tempoTrabalho >= 30){
        mensagemAposentadoria = "Requerer aposentadoria";
    } else {
        mensagemAposentadoria = "Não requer aposentadoria";
    }
    divResultado.innerHTML = `
        <div style="border: 1px solid #ccc; padding: 10px; max-width: 300px;">
            <p><strong>Código do Empregado:</strong> ${codigo}</p>
            <p><strong>Idade:</strong> ${idade} anos</p>
            <p><strong>Tempo de Trabalho:</strong> ${tempoTrabalho} anos</p>
            <hr>
            <h3 style="color: ${idade >= 65 || tempoTrabalho >= 30 ? 'green' : 'red'};">
                Status: ${mensagemAposentadoria}
            </h3>
        </div>
    `;
}

const botao = document.getElementById("btnVerificar");
botao.addEventListener("click", verificarAposentadoria);