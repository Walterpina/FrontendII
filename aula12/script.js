const nome = document.getElementById("nome");
const password = document.getElementById("pass");
const telefone = document.getElementById("tel");
const message = document.getElementById("message");
const hobbies = document.getElementsByName("hobbies");
const nacionalidade = document.getElementsByName("nacionalidade");
const botaoInscrever = document.getElementById("btnSubmit");
const form = document.getElementById("form");


botaoInscrever.disabled = false;

//Botão submit
botaoInscrever.addEventListener("click", function (evento) {
  evento.preventDefault();

  //Validação do campo de nome
  const nomeValue = nome.value.trim().split(" ");
  const semNumero = /[0-9]/;

  // Validado quantidade de campos, quantidade de palavras e preenchimento completo
  if (nome.value.length <= 150 && semNumero.test(nome.value) === false) {
    if (nomeValue.length > 1) {
      const invalido = nomeValue.find((palavra) => palavra.length === 1);
      if (invalido) {
        // mensagem na tela e borda de erro no input
        nome.classList.add("error");
        message.innerHTML = "O sobrenome está incompleto";
        message.style.display = "block";
        botaoInscrever.disabled = true;
      }
    } else {
      // precisa ser completo
      nome.classList.add("error");
      message.innerHTML = "Preencha o nome e sobrenome";
      message.style.display = "block";
      botaoInscrever.disabled = true;
    }
  } else {
    // Limite de caracteres atingido
    nome.classList.add("error");
    message.innerHTML = "Máximo de 150 caracteres.";
    message.style.display = "block";
    botaoInscrever.disabled = true;
  }

  // Dados no console do browser
  console.log(nome.value);
  console.log(password.value);
  console.log(telefone.value);
});

//validação no momento da ação
const validaCampos = function () {
  
  //valida quantidade de campos checkbox hobbies
  if (checkHobbies() > 4) {
    console.log('entrei mais 4');
    message.innerHTML = "Desculpe, é preciso mais para ser super-homem... Continue tentando!!!";
    message.style.display = "block";
    botaoInscrever.disabled = true;
  } else {
    botaoInscrever.disabled = false;
    message.style.display = "none";
  }

  // valido a nacionalidade brasileira
  if (document.getElementById("nacionalidadeBrasileira").checked) {
    message.innerHTML = "Desculpe, ainda não estamos recrutando bruxos no Brasil, mas chegaremos em breve";
    message.style.display = "block";
    botaoInscrever.disabled = true;
  } else {
    botaoInscrever.disabled = false;
    message.style.display = "none";
  }

  // validaChecks();
};

//contagem de check de hobbies
const checkHobbies = function () {
  console.log('contando...')
  let count = 0;
  for (hobbie of hobbies) {
    if (hobbie.checked) {
      count++;
    }
  }
  return count;
};

// escuto a selecao do checkbox e valido a quantidade antes do click
hobbies.forEach((el) => el.addEventListener("change", validaCampos));

//escuto a selecao do radiobox da nacionalidade
nacionalidade.forEach((elemento) =>
  elemento.addEventListener("change", validaCampos)
);

function validaChecks() {
  if(document.getElementById("hobbiesVideoGame").checked && document.getElementById("hobbiesCozinha").checked) {
    message.innerHTML =
    "Eu acho que algo queimará, para te ajudar nessa preciso que escolha algo diferente!!";
    message.style.display = "block";
    botaoInscrever.disabled = true;
    return
  } else {
    botaoInscrever.disabled = false;
    message.style.display = "none";
  }

  if(document.getElementById("hobbiesGuitarra").checked && document.getElementById("Leitura").checked) {
    message.innerHTML =
    "Ou música ou leitura... o que escolhe??";
    message.style.display = "block";
    botaoInscrever.disabled = true;
    return
  } else {
    botaoInscrever.disabled = false;
    message.style.display = "none";
  }

  if(document.getElementById("hobbiesNetflix").checked && document.getElementById("hobbiesCostura").checked) {
    message.innerHTML = "Olhe o filme... você vai gostar!!!";
    message.style.display = "block";
    botaoInscrever.disabled = true;
  } else {
    botaoInscrever.disabled = false;
    message.style.display = "none";
  }

}

