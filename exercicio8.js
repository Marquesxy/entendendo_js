// V: valor  P: preço

let p1 = prompt("Informe o primeiro produto");

let v1 = parseInt(prompt("qual é o valor do primeiro produto?"));

let p2 = prompt("Informe o segundo produto");
let v2 = parseInt(prompt("qual é o valor do segundo produto?"));

let p3 = prompt("Informe o terceiro produto");
let v3 = parseInt(prompt("qual é o valor do terceiro produto?"));

let mensagem
if ((v1 <= v2) && (v1 <= v3)) {
    mensagem = ("O Produto mais barato é " + p1 + " custando R$" +v1);

} else if ((v2 <= v1) && (v2 <= v3)) {
    mensagem = ("O Produto mais barato é " + p2 + " custando R$" +v2);

} else if ((v3 <= v1) && (v3 <= v2)) {
    mensagem = ("O Produto mais barato é " + p3 + " custando R$" +v3);
}
alert (mensagem)
