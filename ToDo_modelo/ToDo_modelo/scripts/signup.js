// constantes e variáveis globais

//formulário
const form = document.querySelector('form');
const namePerson = document.getElementById('name');
const nickPerson = document.getElementById('nickname');
const emailPerson = document.getElementById('email');
const password = document.getElementById('password');
const repeatPassword = document.getElementById('repeatPassword');
// mensagem
const messageName = document.getElementById('messageName');
const messageNick = document.getElementById('messageNick');
const messageEmail = document.getElementById('messageEmail');
// Botão
const btnSubmit = document.getElementById('btn-submit');
//mensagens
const smallName = document.getElementById('smallName');
const smallNickname = document.getElementById('smallNickname');
const smallEmail = document.getElementById('smallEmail');
const smallPassword = document.getElementById('smallPassword');

// funções e validações

namePerson.addEventListener('keydown', function() {
  //Validação Nome
  if(namePerson.value === '') {
    smallName.innerHTML = 'Informe seu nome';
    namePerson.classList.add("messageError");
    smallName.classList.add("error");
  } else {
    smallName.innerHTML = '';
    namePerson.classList.remove("messageError");
    smallName.classList.remove("error");
  }
});

nickPerson.addEventListener('keydown', function() {
  // Validação Apelido
  if(nickPerson.value === '') {
    smallNickname.innerHTML = "Crie seu apelido";
    nickPerson.classList.add("messageError");
    smallNickname.classList.add("error");
  } else {
    smallNickname.innerHTML = '';
    nickPerson.classList.remove("messageError");
    smallNickname.classList.remove("error");
  }
});

emailPerson.addEventListener('keydown', function() {
  // Validação Email
  if(emailPerson.value === '') {
    emailPerson.classList.add("messageError");
    smallEmail.innerHTML = "Informe seu email";
    smallEmail.classList.add("error");
  } else {
    smallEmail.innerHTML = '';
    emailPerson.classList.remove("messageError");
    smallEmail.classList.remove("error");
  }
});

password.addEventListener('keyup', function() {
  if(password.value === '') {
    password.classList.add("messageError");
    smallPassword.innerHTML = "Favor cadastrar uma senha";
    smallPassword.classList.add("error");
  } else {
    smallPassword.innerHTML = '';
    password.classList.remove("messageError");
    smallPassword.classList.remove("error");
  }
});

repeatPassword.addEventListener('keyup', function() {
  if(password.value !== repeatPassword.value) {
    smallPassword.innerHTML = "A senha deve ser a mesma nos dois campos";
    password.classList.add("messageError");
    smallPassword.classList.add("error");
  } else {
    smallPassword.innerHTML = '';
    password.classList.remove("messageError");
    smallPassword.classList.remove("error");
  }
});

// Liberação do botão de Criar Conta
form.addEventListener('change', function(e) {
  e.preventDefault();
  if((namePerson.value !== '' && nickPerson.value !== '' && emailPerson.value !== '')) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
});

// Envio do formulário API
btnSubmit.addEventListener('click', function(e) {
  e.preventDefault();
  // criando o objeto com os dados do formulário
  const formData = {
    firstName: namePerson.value,
    lastName: nickPerson.value,
    email: emailPerson.value,
    password: password.value,
  };

  // criando a comunicação com a API
  fetch('https://ctd-todo-api.herokuapp.com/v1/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(function(resp) {
    return resp.json();
  })
  .then(function(data) {
    // lendo os dados recebidos
    if(typeof data === 'object') {
      alert('Cadastro realizado com sucesso');
      sessionStorage.setItem("jwt", data.jwt);
    } else {
      alert(data);
    }
  })
  .catch(function(err) {
    alert(err);
  });
});
