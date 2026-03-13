// Captura o botão que você criou no HTML
const botao = document.getElementById("expansaoDominio");

// Fica esperando o clique no botão
botao.addEventListener("click", function() {
    
    // 1. Pega os valores que o usuário digitou
    const campo1 = document.getElementById("numero1").value;
    const campo2 = document.getElementById("numero2").value;
    const divResultado = document.getElementById("resultado");

    // 2. Validação: Checa se a pessoa esqueceu de digitar algum número
    if (campo1 === "" || campo2 === "") {
        // Mostra o erro na div de resultado que você colocou lá no HTML
        divResultado.innerHTML = "<p style='color: red; text-shadow: 1px 1px 2px black;'>Atenção: Digite os dois números para gerar a análise!</p>";
        return; // Faz o código parar aqui e não vai para a outra página
    }

    // 3. O Truque Mágico: Salva os números no "pen-drive" do navegador
    localStorage.setItem("valorVermelho", campo1);
    localStorage.setItem("valorAzul", campo2);

    // 4. A Viagem: Manda o usuário para a segunda página!
    window.location.href = "resultado.html"; 
});