const form = document.querySelector('form');
const namePerson = document.getElementById('name');
const nickPerson = document.getElementById('nickname');
const emailPerson = document.getElementById('email');
const password = document.getElementById('password');
const repeatPassword = document.getElementById('repeatPassword');
const messageName = document.getElementById('messageName');
const messageNick = document.getElementById('messageNick');
const messageEmail = document.getElementById('messageEmail');


form.addEventListener('submit', function(e) {
  let error = [];

  //Validação Nome
  if(namePerson.value === '') {
    error.push('Me informe seu nome.');
    namePerson.classList.add("messageError");
  }

  // Validacao Apelido
  if(nickPerson.value === '') {
    error.push('Me informe seu apelido.');
    nickPerson.classList.add("messageError");
  }

  // Validação email
  if(emailPerson.value === '') {
    error.push('Me informe um email.');
    emailPerson.classList.add("messageError");
  }

  // if(password.value === '') {
  //   error.push("É preciso cadastrar uma senha.");
  //   password.classList.add("messageError");
  // }

  // if(repeatPassword.value === '') {
  //   error.push("Repita a senha cadastrada.");
  //   password.classList.add("messageError");
  // }

  // Validação de campos de senha preenchidas iguais
  if(password.value !== repeatPassword.value) {
    error.push("A senha deve ser a mesma");
  }

  if(error.length > 0) {
    e.preventDefault();
    let ulError = document.querySelector(".error ul");
    error.forEach(err => {
      ulError.innerHTML += `<li class="errorList">${err}</li>`;
    });
  }

  const formData = {
    name: namePerson.value,
    nickname: nickPerson.value,
    email: emailPerson.value,
    password: password.value,
    repeatPassword: repeatPassword.value
  };

  console.log(formData);

});
