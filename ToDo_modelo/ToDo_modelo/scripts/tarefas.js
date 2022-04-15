const codeJwt = localStorage.getItem('jwt');
const form = document.querySelector('form');


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

function date(date) {
  const formatDate = new Date(date);
  return formatDate.toLocaleDateString("pt-BR");
}

// Criar função get de novas tarefas
const getNewTasks = function (elem) {

  fetch('https://ctd-todo-api.herokuapp.com/v1/tasks', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: elem
    }
  })
  // .then( function (resp) {
  //   return resp.json()
  // })
  .then( resp => resp.json() ) // sempre a mesma coisa
  .then( data => { 
    console.log(data);
    data.forEach( elem => {
      const createTasks = document.querySelector('.create-tasks');

      const listTasks = document.createElement('li');
      listTasks.classList.add("tarefa");
      createTasks.appendChild(listTasks);

      const divDone = document.createElement("div");
      divDone.classList.add("not-done");
      listTasks.appendChild(divDone);

      const divDescription = document.createElement("div");
      divDescription.classList.add("descricao");
      listTasks.appendChild(divDescription);

      const pNome = document.createElement("p");
      pNome.classList.add("nome");
      pNome.innerText = `${elem.description}`;
      divDescription.appendChild(pNome);

      const pTimestamp = document.createElement("p");
      pTimestamp.classList.add("timestamp");
      pTimestamp.innerText = "Criada em: " + date(elem.createdAt);
      divDescription.appendChild(pTimestamp);
    });

    const incluir = document.getElementById("incluir");
    incluir.classList.add("tasks");

   
  });

};

getNewTasks(codeJwt);

//Faz a leitura de novas tarefas cadastradas
// const getTasks = (code) => {
//   fetch(window.apiApplication + 'tasks', {
//     headers: {
//       'Content-Type': 'application/json',
//       authorization: code
//     }
//   })
//     .then( resp => resp.json() )
//     .then( data => {
//       console.log(data);
//       data.forEach(element => {
//         /**
//          * <li class="tarefa">
//             <div class="not-done"></div>
//             <div class="descricao">
//               <p class="nome">Nova tarefa</p>
//               <p class="timestamp">Criada em: 15/07/21</p>
//             </div>
//           </li>
//          */
//         const createNewTasks = document.querySelector('.create-tasks');
//         //cria elemento de lista
//         const listTasks = document.createElement("li");
//         listTasks.classList.add("tarefa");
//         createNewTasks.appendChild(listTasks);
//         //cria elemento not-done
//         const divDone = document.createElement("div");
//         divDone.classList.add("not-done");
//         listTasks.appendChild(divDone);
//         //cria elemento descricao
//         const divDescription = document.createElement("div");
//         divDescription.classList.add("descricao");
//         listTasks.appendChild(divDescription);
//         //cria paragrafo de nome tarefa
//         const pNome = document.createElement("p");
//         pNome.classList.add("nome");
//         pNome.innerText = `${element.description}`;
//         divDescription.appendChild(pNome);
//         //cria paragrafo de data de criação
//         const pTimestamp = document.createElement("p");
//         pTimestamp.classList.add("timestamp");
//         pTimestamp.innerText = "Criada em: " + date(element.createdAt);
//         divDescription.appendChild(pTimestamp);
//       });
//     });
// };
// getTasks(codeJwt);



//Faz a gravação de novas tarefas
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
    console.log(data);
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


/**
 * dados.forEach( el => {
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
       pNome.innerHTML = `${el.description}`;
       divDescription.appendChild(pNome);
       //cria paragrafo de data de criação
       const pTimestamp = document.createElement("p");
       pTimestamp.classList.add("timestamp");
       pTimestamp.innerHTML = `Criada em: ${el.createAt}`;
    });
 */
