function obtemOpcaoUsuario() {
  let input = prompt('Selecione uma das opções: [1] Pedra | [2] Papel | [3] Tesoura');
  return parseInt(input, 10);
}

function obtemOpcaoComputador() {
  return parseInt(Math.random() * 3 + 1, 10);
}

let usuario = obtemOpcaoUsuario();
let computador = obtemOpcaoComputador();
console.log('Usuário: ', usuario);
console.log('Computador: ', computador);

// [Computador: ${computador} | Usuário: ${usuario}]

let possiveisResultados = {
  vitoria: "Vitória 🤩",
  derrota: "Perdeu 😤",
  empate: "Empatou  🤔"
};

let resultado = "Erro: indefinido.";
let selecao = '';

// Refatoração

if(usuario === computador) {
  resultado = possiveisResultados.empate;
} else {
  switch(usuario) {
    case 1: //Pedra
      if(computador === 2) { //Papel
        resultado = possiveisResultados.derrota;
      } else { //Tesoura
        resultado = possiveisResultados.vitoria;
      }
      selecao = 'Usuário selecionou 1';
      break;
    case 2: //Papel
      if(computador === 3) { //Tesoura
        resultado = possiveisResultados.derrota;
      } else { // Pedra
        resultado = possiveisResultados.vitoria;
      }
      selecao = "Usuário selecionou 2";
      break;
    case 3: //Tesoura
      if(computador === 1) { //Pedra
        resultado = possiveisResultados.derrota;
      } else { //Papel
        resultado = possiveisResultados.vitoria;
      }
      selecao = "Usuário selecionou 3";
      break;
    default:
      resultado = 'Erro: Opção inválida';
  }
}

/**
 * Primeiro código
 * 
 * if(usuario == 1) {
  //Pedra
  if(computador == 1) {
    resultado = `Empate. 😒`;
  }
  if(computador == 2) {
    resultado = 'Você perdeu! O papel embrulha a pedra.😢';
  }
  if(computador == 3) {
    resultado = 'Você ganhou! Pedra quebra tesoura. 😉';
  }
}
if(usuario == 2) {
  //Papel
  if(computador == 1) {
    resultado = 'Você ganhou! Pedra embrulha papel. 😉'
  }
  if(computador == 2) {
    resultado = 'Empate. 😒';
  }
  if(computador == 3) {
    resultado = 'Você perdeu! A tesoura corta o papel.😢';
  }
}
if(usuario == 3) {
  //Tesoura
  if(computador == 1) {
    resultado = 'Você perdeu! A pedra quebra a tesoura. 😢';
  }
  if(computador == 2) {
    resultado = 'Você ganhou! A tesoura corta o papel. 😉';
  }
  if(computador == 3) {
    resultado = 'Empate. 😒';
  }
}
 */

alert(resultado);
alert(selecao);