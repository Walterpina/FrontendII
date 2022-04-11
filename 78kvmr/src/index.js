/* 
    DIGITAL HOUSE - CTD - FRONT END 2
    PROF: Marcos Martins
    -> Possível solução para a mesa de trabalho da Aula 11 sobre formulários
 */
let nomeUsuario = document.getElementById("nome");
let sobrenomeUsuario = document.getElementById("sobrenome");
let botaoEnviar = document.getElementById("enviar");

botaoEnviar.addEventListener("click", function (evento) {
  /* Valida se os dados obrigatorios (required) foram preenchidos 
     Caso contrário, não faz o preventDefault
     */
  if (nomeUsuario.value !== "" && sobrenomeUsuario.value !== "") {
    evento.preventDefault();

    /* trim() */
    let nomeSemEspacos = utilizandoFuncaoTrim(nomeUsuario.value);
    let sobrenomeSemEspacos = utilizandoFuncaoTrim(sobrenomeUsuario.value);
    exibeFuncaoTrim(nomeSemEspacos, sobrenomeSemEspacos);

    /* toUpperCase() */
    let nomeEmMaiusculas = converteParaMaisculas(nomeSemEspacos);
    let sobrenomeEmMaiusculas = converteParaMaisculas(sobrenomeSemEspacos);
    exibeFuncaoUpperCase(nomeEmMaiusculas, sobrenomeEmMaiusculas);

    /* toLowerCase() */
    let nomeEmMinusculas = converteParaMinusculas(nomeSemEspacos);
    let sobrenomeEmMinusculas = converteParaMinusculas(sobrenomeSemEspacos);
    exibeFuncaoLowerCase(nomeEmMinusculas, sobrenomeEmMinusculas);

    /* concat() */
    let nomeConcatenado = concatenaNomeESobrenome(
      nomeSemEspacos,
      sobrenomeSemEspacos
    );
    exibeFuncaoConcat(nomeConcatenado);

    /* replaceAll() */
    let nomeAlterado = alteraCaracteresDefinidos(nomeSemEspacos);
    let sobrenomeAlterado = alteraCaracteresDefinidos(sobrenomeSemEspacos);
    exibeFuncaoReplaceAll(nomeAlterado, sobrenomeAlterado);

    /* Limpa os campos do formulário após o envio */
    limpaCamposFormulario();
  }
});

/* Funções que alterar/modificam os textos informados */
function utilizandoFuncaoTrim(nomeComEspacos) {
  //Retira os espaços antes e depois da string e retorna
  return nomeComEspacos.trim();
}

function converteParaMaisculas(nomeRecebido) {
  //Converte a string recebida para maiscula e retorna
  return nomeRecebido.toUpperCase();
}

function converteParaMinusculas(nomeRecebido) {
  //Converte a string recebida para minuscula e retorna
  return nomeRecebido.toLowerCase();
}

function concatenaNomeESobrenome(nome, sobrenome) {
  //Concatena o nome e o sobrenome recebidos e retorna
  return nome.concat(" ", sobrenome);
}

function alteraCaracteresDefinidos(nomeRecebido) {
  //Alterar os caracteres conforme o desejado e retorna
  return nomeRecebido
    .replaceAll("a", "@")
    .replaceAll("A", "@")
    .replaceAll("e", "3")
    .replaceAll("E", "3");
}

/* Funções para a exibição em tela das modificações realizadas */
function exibeFuncaoTrim(nomeRecebido, sobrenomeRecebido) {
  let exibeTrim = document.getElementById("trim");
  exibeTrim.innerText = `Nome: ${nomeRecebido}\nSobrenome: ${sobrenomeRecebido}`;
}

function exibeFuncaoUpperCase(nomeRecebido, sobrenomeRecebido) {
  let exibeUpperCase = document.getElementById("toUpperCase");
  exibeUpperCase.innerText = `Nome: ${nomeRecebido}\nSobrenome: ${sobrenomeRecebido}`;
}

function exibeFuncaoLowerCase(nomeRecebido, sobrenomeRecebido) {
  let exibeLowerCase = document.getElementById("toLowerCase");
  exibeLowerCase.innerText = `Nome: ${nomeRecebido}\nSobrenome: ${sobrenomeRecebido}`;
}

function exibeFuncaoConcat(nomeRecebido) {
  let exibeConcat = document.getElementById("concat");
  exibeConcat.innerText = `Nome completo: ${nomeRecebido}`;
}

function exibeFuncaoReplaceAll(nomeRecebido, sobrenomeRecebido) {
  let exibeReplaceAll = document.getElementById("replaceAll");
  exibeReplaceAll.innerText = `Nome: ${nomeRecebido}\nSobrenome: ${sobrenomeRecebido}`;
}

/* Funções extras */
function limpaCamposFormulario() {
  nomeUsuario.value = "";
  sobrenomeUsuario.value = "";
}
