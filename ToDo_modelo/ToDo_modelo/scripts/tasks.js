const codeJwt = sessionStorage.getItem('jwt');
const form = document.querySelector('form');
const closeApp = document.getElementById("closeApp");
const spinner = document.querySelector('.spinner-loading');

// Faz a leitura dos dados do usuário
const getUser = (code) => {
  fetch(window.apiApplication + 'users/getMe', {
    headers: {
      'Content-Type': 'application/json',
      authorization: code
    }
  })
    .then( resp => resp.json())
    .then( data => {
      const el = document.querySelector('.user-name');
      el.innerHTML = `${data.firstName} ${data.lastName}`;
    });
};
getUser(codeJwt);

//função que formata a data
function date(date) {
  const formatDate = new Date(date);
  return formatDate.toLocaleDateString("pt-BR");
}
//função que aparece o loading na página
const showSpinner = () => {
  return spinner.classList.add("show");
};
//função que esconde o loading na página
const hideSpinner = () => {
  return spinner.classList.remove("show");
};

// Criar função get de novas tarefas
const getNewTasks = function (elem) {

  fetch(window.apiApplication + 'tasks', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: elem
    }
  })
  // .then( function (resp) { padrão de escrita da linguagem
  //   return resp.json() 
  // })
  .then( resp => resp.json() ) // arrow function - este código é sempre padrão
  .then( data => {
    //primeiro jeito de escrever
    // let dados = [];
    // dados = data;
    // dados.forEach( elem => {
    //   const createTasks = document.querySelector('.create-tasks');

    //   const listTasks = document.createElement('li');
    //   listTasks.classList.add("tarefa");
    //   createTasks.appendChild(listTasks);

    //   const divDone = document.createElement("div");
    //   divDone.classList.add("not-done");
    //   listTasks.appendChild(divDone);

    //   const divDescription = document.createElement("div");
    //   divDescription.classList.add("descricao");
    //   listTasks.appendChild(divDescription);

    //   const pNome = document.createElement("p");
    //   pNome.classList.add("nome");
    //   pNome.innerText = `${elem.description}`;
    //   divDescription.appendChild(pNome);

    //   const pTimestamp = document.createElement("p");
    //   pTimestamp.classList.add("timestamp");
    //   pTimestamp.innerText = "Criada em: " + date(elem.createdAt);
    //   divDescription.appendChild(pTimestamp);
    // });
    //segundo jeito de escrever
    data.forEach( elem => {
      //pego o elemento no HTML onde quero criar as informações que preciso
      const createTasks = document.querySelector('.create-tasks');
      // crio o elemento de lista
      const listTasks = document.createElement('li');
      listTasks.classList.add("tarefa");
      createTasks.appendChild(listTasks);
      //crio o elemento de div 
      const divDone = document.createElement("div");
      divDone.classList.add("not-done");
      listTasks.appendChild(divDone);
      //crio o elemento de div
      const divDescription = document.createElement("div");
      divDescription.classList.add("descricao");
      listTasks.appendChild(divDescription);
      //crio o parágrafo de descrição da tarefa
      const pNome = document.createElement("p");
      pNome.classList.add("nome");
      pNome.innerText = `${elem.description}`;
      divDescription.appendChild(pNome); 
      //crio o parágrafo de data de criação da tarefa
      const pTimestamp = document.createElement("p");
      pTimestamp.classList.add("timestamp");
      pTimestamp.innerText = "Criada em: " + date(elem.createdAt);
      divDescription.appendChild(pTimestamp);
    });
    // oculta o eskeleton
    const incluir = document.getElementById("esconder");
    incluir.classList.add("tasks");
  });
};
getNewTasks(codeJwt);

//Função do formulário que cria as novas tarefas
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const newTask = window.getValue('novaTarefa');
  const dataForm = {
    description: newTask.value,
    completed: false
  };

  fetch(window.apiApplication + 'tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: codeJwt
    },
    body: JSON.stringify(dataForm)
  })
  .then(resp => resp.json())
  .then(data => {
    //determina início do html
    const createNewTasks = document.querySelector('.create-tasks');
    //cria elemento de lista
    const listTasks = document.createElement("li");
    listTasks.classList.add("tarefa");
    createNewTasks.appendChild(listTasks);
    //cria elemento not-done
    const divDone = document.createElement("div");
    divDone.classList.add("not-done");
    listTasks.appendChild(divDone);
    //cria elemento descricao
    const divDescription = document.createElement("div");
    divDescription.classList.add("descricao");
    listTasks.appendChild(divDescription);
    //cria paragrafo de nome tarefa
    const pNome = document.createElement("p");
    pNome.classList.add("nome");
    pNome.innerHTML = `${data.description}`;
    divDescription.appendChild(pNome);
    //cria paragrafo de data de criação
    const pTimestamp = document.createElement("p");
    pTimestamp.classList.add("timestamp");
    pTimestamp.innerHTML = `Criada em: ${data.createAt}`;
  });
});

closeApp.onclick = function() {
  // loading
  showSpinner();
  setTimeout(() => {
    // removo o jwt da sessão
    sessionStorage.removeItem('jwt', codeJwt);
    // direciono para a tela de login
    window.location.href = "index.html";
    // retiro o loading
    hideSpinner();
  }, 3000);
};