/*22/08/2024*/
const MediaN = 2;
let nome;
let n1, n2 = 0;
let mensagem;
let media;

nome = prompt('informe o nome do aluno: ');

n1 = parseFloat(prompt ('Informe a primeira nota obtida do aluno'));
n2 = parseFloat(prompt ('Informe a segunda nota obtida do aluno'));

media = (n1 + n2) / MediaN;

if (media >= 7) {
    mensagem = ("O aluno esta aprovado");
} else if (media >= 5) {
    mensagem = ("O aluno esta de recuperação");
} else  {
    mensagem = ("O aluno esta Reprovado"); 
} 
alert (mensagem)




 


