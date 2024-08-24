let nome, qntGanhaPh,numH, mensagem, Vt;

nome = prompt ("Nome do proletariado ")

qntGanhaPh = parseFloat(prompt("Quantidade de valor pago por Hora"));

numH = parseFloat(prompt("Horas Trabalhadas no Mês"));



mensagem = (`o Funncionario ${nome}
    vai receber ao final do mês: ${qntGanhaPh * numH}`);

alert (mensagem)