// ... (mantenha sua função verificarAposentadoria intacta) ...
function verificarAposentadoria(event) {
    // Previne o comportamento padrão do formulário (recarregar a página)
    event.preventDefault();

    // 1. Pega os valores digitados
    const codigo = document.getElementById("codigo").value;
    const anoNasc = parseInt(document.getElementById("anoNasc").value);
    const tempoTrabalho = parseInt(document.getElementById("tempoTrabalho").value);
    const divResultado = document.getElementById("resultado");

    // Limpa qualquer resultado anterior
    divResultado.innerHTML = "";
    divResultado.style.display = "block"; // Mostra a área de resultado

    // Validação básica
    if (!anoNasc || !tempoTrabalho) {
        divResultado.innerHTML = "<p class='result-box nao-elegivel'>Por favor, preencha todos os campos obrigatórios (*)!</p>";
        return;
    }
    
    // 2. Calcula a idade do empregado
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - anoNasc;

    let mensagemAposentadoria = "";
    let statusClass = "";

    // Lógica do exercício (mantida, mas lembrando que as regras reais mudaram)
    if (idade >= 65 || tempoTrabalho >= 30) {
        mensagemAposentadoria = "Requerer aposentadoria";
        statusClass = "elegivel";
    } else {
        mensagemAposentadoria = "Não requer aposentadoria";
        statusClass = "nao-elegivel";
    }

    // Criação do resultado com a nova estrutura e classes CSS
    divResultado.innerHTML = `
        <div class="result-box ${statusClass}">
            <p><strong>Código do Empregado:</strong> ${codigo || 'Não informado'}</p>
            <p><strong>Idade Calculada:</strong> ${idade} anos</p>
            <p><strong>Tempo de Contribuição:</strong> ${tempoTrabalho} anos</p>
            <hr style="border: 1px solid rgba(0,0,0,0.1); margin: 15px 0;">
            <h3 class="status-title">
                Status: ${mensagemAposentadoria}
            </h3>
        </div>
    `;
}

// Vincula a função ao formulário em vez de apenas ao botão
const formulario = document.getElementById("simulador-form");
formulario.addEventListener("submit", verificarAposentadoria);