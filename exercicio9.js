
let turno = prompt(`Em que turno você estuda? 
(Responda com M de matutino, V de vespertino ou N de noturno.`);

let mensagem

if (turno == "M") {
    mensagem = ("Bom Dia");
}
 else if (turno == "V") {
    mensagem = ("Boa Tarde");
}
else if (turno == "N") {
    mensagem = ("Boa Noite");
}
else {
    mensagem = ("Valor Invalido");
}

alert (mensagem)

