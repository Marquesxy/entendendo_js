let nome, qntGanhaPh,numH, mensagem, Vt;

nome = prompt ("Nome do proletariado ")

qntGanhaPh = parseFloat(prompt("Quantidade de valor pago por Hora"));

numH = parseFloat(prompt("Horas Trabalhadas no Mês"));



mensagem = (`O funcionario ${nome} vai receber ao final do mês: R$${qntGanhaPh * numH}`);

alert (mensagem)