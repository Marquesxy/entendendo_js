let n1, n2, n3;
let mensagem;

n1 = parseInt(prompt("Digite o primeiro numero"));
n2 = parseInt(prompt("Digite o segundo numero"));
n3 = parseInt(prompt("Digite o terçeiro numero"));

if ((n1 >= n2) && (n1 >= n3)) {
   mensagem = ("O maior é " + n1);

}else if ((n2 >= n1) && (n2 >= n3)) {
   mensagem = ("O maior é " + n2);
   
} else if ((n3 >= n1) && (n3 >= n2)) {
   mensagem = ("O maior é " + n3);   
}
alert (mensagem)
