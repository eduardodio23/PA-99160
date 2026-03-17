function calcularMedia() {
    // 1. Pegamos os valores que o usuário digitou
    let input1 = document.getElementById('nota1').value;
    let input2 = document.getElementById('nota2').value;
    let input3 = document.getElementById('nota3').value;

    // Convertendo texto para número decimal (Float)
    let nota1 = parseFloat(input1);
    let nota2 = parseFloat(input2);
    let nota3 = parseFloat(input3);

    // 2. Validação: Caso seja menor que 0 ou maior que 10...
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || 
        nota1 < 0 || nota1 > 10 || 
        nota2 < 0 || nota2 > 10 || 
        nota3 < 0 || nota3 > 10) {
        
        // ...mostre a pergunta novamente (emitimos um alerta e limpamos os campos)
        alert("Erro: As notas devem estar entre 0 e 10. Por favor, digite as notas novamente.");
        document.getElementById('nota1').value = '';
        document.getElementById('nota2').value = '';
        document.getElementById('nota3').value = '';
        document.getElementById('resultado').className = 'oculto'; // Esconde o resultado
        return; // Interrompe o cálculo aqui
    }

    // 3. Calcula a média
    let media = (nota1 + nota2 + nota3) / 3;
    
    // Seleciona a caixa onde o resultado vai aparecer e remove classes antigas
    let divResultado = document.getElementById('resultado');
    divResultado.className = ''; 

    // 4. Verifica os critérios de aprovação
    if (media >= 7) {
        // Se a média for a partir de 7
        divResultado.innerHTML = `Média: ${media.toFixed(1)}<br>Status: <strong>APROVADO</strong>`;
        divResultado.classList.add('aprovado');

    } else if (media >= 5 && media < 7) {
        // Se a média for entre 5 e 6,9 (menor que 7)
        divResultado.innerHTML = `Média: ${media.toFixed(1)}<br>Status: <strong>EM RECUPERAÇÃO</strong>`;
        divResultado.classList.add('recuperacao');

    } else {
        // Caso seja menor que 5
        divResultado.innerHTML = `Média: ${media.toFixed(1)}<br>Status: <strong>REPROVADO</strong>`;
        divResultado.classList.add('reprovado');
    }
}