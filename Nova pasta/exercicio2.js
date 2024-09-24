let Diad
let mensagem 
Diad = prompt("Informe o dia da semana que deseja visualizar");
mensagem = "";

if (Diad == 1){
    mensagem = ("Domingo");
} else if (Diad == 2) {
    mensagem = ("Segunda-Feira");
}
 else if (Diad == 3) {
    mensagem = ("Terça-Feira");
}
 else if (Diad == 4) {
    mensagem = ("Quarta-Feira");
}
 else if (Diad == 5) {
    mensagem = ("Quinta-Feira");
}
 else if (Diad == 6) {
    mensagem = ("Sexta-Feira");
}
 else if (Diad == 7) {
    mensagem = ("Sabado");
} else{
    mensagem = ("Dia Invalido");
}
alert (mensagem)

