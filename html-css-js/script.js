function gerarTabuada() {
    //pegar o valor do input no HTML.
    //parse serve para inverter os valores
    const numeroInput = document.getElementById("numeroInput")
    let numero = parseInt(numeroInput.value);
    
    // Pega o elemento HTML onde a tabuada será exibida.
    const resultadoDiv = document.getElementById("resultadoTabuada");
    //Limpa o conteúdo anterior
    resultadoDiv.innerHTML = "";
    
    // Verifica se a entrada é um número válido.
    if (isNaN (numero) || numero === null || numero === ""){
        resultadoDiv.innerHTML =  "<p>Por Favor, digite um numero...</p>";
        return;
    }
    //Adciona  um  Titulo para a tabuada
    resultadoDiv.innerHTML += `<h2>Tabuada do ${numero}: <h2>`;
    //Laço de repetição para gerar a tabuada de 1 a 10.
    for(let i = 1; i <= 10; i++){
        let resultado = numero *i;
        resultadoDiv.innerHTML += `<p>${numero} x ${i} = ${resultado}</p>`;

    }
}

const gerarBotao = document.getElementById("gerarBotao");
gerarBotao = document.addEventListener("click", gerarTabuada);
