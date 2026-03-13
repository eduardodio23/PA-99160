// Espera o HTML carregar completamente antes de rodar a mágica
document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Puxa os dados salvos
    const num1String = localStorage.getItem("valorVermelho");
    const num2String = localStorage.getItem("valorAzul");

    const caixa = document.getElementById("caixaResultado");

    // Se os números não vierem por algum motivo, avisa na tela
    if (!num1String || !num2String) {
        caixa.innerHTML = "<p style='color: red;'>Erro: A energia sumiu no caminho! Volte e tente novamente.</p>";
        return;
    }

    // 2. Converte para números reais
    const num1 = Number(num1String);
    const num2 = Number(num2String);

    // 3. Faz a matemática
    const soma = num1 + num2;
    const media = soma / 2;
    const produto = num1 * num2;
    const maior = Math.max(num1, num2);
    const menor = Math.min(num1, num2);

    // 4. Joga o resultado na tela
    caixa.innerHTML = `
        <h2 style="color: #c77dff; margin-bottom: 20px;">Análise do Vazio Roxo 🟣</h2>
        <p><strong>Número Vermelho:</strong> ${num1}</p>
        <p><strong>Número Azul:</strong> ${num2}</p>
        <hr style="border: 1px solid #800080; margin: 15px 0;">
        <p><strong>Soma Total:</strong> ${soma}</p>
        <p><strong>Média de Energia:</strong> ${media}</p>
        <p><strong>Produto (Colisão):</strong> ${produto}</p>
        <p><strong>Maior Poder:</strong> ${num1 === num2 ? "Empate" : maior}</p>
        <p><strong>Menor Poder:</strong> ${num1 === num2 ? "Empate" : menor}</p>
    `;
});