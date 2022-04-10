// Constantes e variáveis
const form = document.querySelector('form');
const email = document.getElementById("inputEmail");
const password = document.getElementById("inputPassword");
const smallEmail = document.getElementById("messageEmail");
const smallPassword = document.getElementById("messagePassword");
const btnAccess = document.getElementById("btnAccess");

// Funções e validações 

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
  const formLogin = {
    email: email.value,
    password: password.value
  };

  //Criando a comunicação com a API
  fetch('https://ctd-todo-api.herokuapp.com/v1/users/login', {
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
    console.log(data);
    localStorage.setItem("jwt", data.jwt);
    window.location.href = 'tarefas.html';
  })
  .catch(function(err) {
    console.log(err);
  });
});
