function calcularMacas() {
    // 1. Pega os elementos da tela
    const campoQuantidade = document.getElementById("quantidade").value;
    const divResultado = document.getElementById("resultado");

    // 2. Verifica se o usuário deixou vazio ou digitou um número negativo/zero
    if (campoQuantidade === "" || campoQuantidade <= 0) {
        divResultado.innerHTML = "<p style='color: red; text-shadow: 1px 1px 2px black;'>Atenção: Digite uma quantidade válida de maçãs!</p>";
        return; // Para o código aqui
    }

    // 3. Converte o texto digitado para número inteiro
    const quantidade = parseInt(campoQuantidade);
    let precoUnidade = 0;

    // 4. Lógica do preço das maçãs
    if (quantidade < 12) {
        precoUnidade = 1.30; // Menos de uma dúzia
    } else {
        precoUnidade = 1.00; // Pelo menos uma dúzia
    }

    // 5. Calcula o valor total
    const valorTotal = quantidade * precoUnidade;

    // 6. Formata o número para o formato de dinheiro do Brasil (R$ 0,00)
    const valorFormatado = valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    // 7. Mostra o resultado na tela
    divResultado.innerHTML = `<p style='color: green;'><strong>Resultado:</strong> Você vai comprar ${quantidade} maçãs.<br>O valor total da sua compra será de <strong>${valorFormatado}</strong>.</p>`;
}

// Vincula a função ao clique do botão que criamos no HTML
const botao = document.getElementById("btnCalcular");
botao.addEventListener("click", calcularMacas);