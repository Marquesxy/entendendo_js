
let altura = 0; 
let idade = 0;


altura = parseFloat(prompt("Qual é a sua altura?"));
idade =  parseInt(prompt("Qual é a sua idade"));

let mensagem = "";

if (altura >= 1.70) {
    mensagem = ("Entrada autorizada em metros (Ex: 1,70)");
} else if (altura >= 1.60 && idade > 18) { 
    mensagem = ("Entrada autorizada");
} else {
    mensagem = ("Entrada negada");
}

alert(mensagem);
