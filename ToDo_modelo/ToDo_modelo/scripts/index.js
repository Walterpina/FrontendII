// Constantes e variáveis
const form = document.querySelector('form');
const email = window.getValue("inputEmail");
const password = window.getValue("inputPassword");
const smallEmail = window.getValue("messageEmail");
const smallPassword = window.getValue("messagePassword");
const btnAccess = window.getValue("btnAccess");

const spinner = document.querySelector('.spinner-loading');

// Funções e validações 

const showSpinner = () => {
  return spinner.classList.add("show");
};

const hideSpinner = () => {
  spinner.classList.remove("show");
}

// validando email
email.addEventListener('keyup', function() {
  if(email.value === '') {
    email.classList.add("messageError");
    smallEmail.innerHTML = "Favor preencher ser usuário/email";
    smallEmail.classList.add("error");
  } else {
    email.classList.remove("messageError");
    smallEmail.innerHTML = '';
    smallEmail.classList.remove("error");
  }
});

//validando password
password.addEventListener('keyup', function() {
  if(password.value === '') {
    password.classList.add("messageError");
    smallPassword.innerHTML = "Favor informar sua senha";
    smallPassword.classList.add("error");
  } else {
    password.classList.remove("messageError");
    smallPassword.innerHTML = '';
    smallPassword.classList.remove("error");
  }
});

form.addEventListener('keyup', function() {
  if(email.value !== '' && password.value !== '') {
    btnAccess.disabled = false;
  }
});

// enviando o formulário
btnAccess.addEventListener('click', function(e) {
  e.preventDefault();
  //criando objeto para comunicação com a API

  //exibe spinner
  showSpinner();

  // objeto json
  const formLogin = {
    email: email.value,
    password: password.value
  };

  //Criando a comunicação com a API
  fetch(window.apiApplication + 'users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formLogin)
  })
  .then(function (resp) {
    return resp.json();
  })
  .then(function(data) {
    if(typeof data === 'object') {
      //guardo o token no ssessionStorage
      sessionStorage.setItem("jwt", data.jwt);
      //rota de direcionamento para tarefas
      window.location.href = 'tarefas.html';
    } else if (typeof data === 'string'){
      alert(data);
      hideSpinner();
    } else {
      hideSpinner();
    }
  });
});
