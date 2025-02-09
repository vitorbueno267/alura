alert('boas vindas');
let numeroMaximo = 10;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;


// enquanto 
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um numero entre 1 a ${numeroMaximo}`);

    if (numeroSecreto == chute) {
        break;
    } else {
        if (numeroSecreto > chute) {

            alert(`O numero secreto é maior que ${chute}`);
        } else
            alert(`O numero secreto é menor que ${chute}`);
    }
    //tentativas = tentativas + 1;
    tentativas++;

}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai voce descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`)

// if (tentativas > 1) {
//     alert(`Voce descobriru o nuemero secreto = ${numeroSecreto} com ${tentativas} tentativas.`);
// } else {
//     alert(`Voce descobriru o nuemero secreto = ${numeroSecreto} com ${tentativas} tentativa.`);
// }