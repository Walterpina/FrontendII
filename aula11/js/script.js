const form = document.querySelector('form');

form.addEventListener('submit', function (event) {

  event.preventDefault();

  const nome = document.getElementById('nome').value;
  console.log(nome);

  const sobrenome = document.getElementById('sobrenome').value;
  console.log(sobrenome);
  
  const divItem = document.createElement('div');

  //pegando os dados dos inputs nome e sobrenome trabalhando com o trim
  const novoElemento = document.querySelector('.elementos');
  novoElemento.appendChild(divItem);
  const p1 = document.createElement('p');
  p1.classList.add('elemento-trim');
  p1.innerHTML = nome.trim();
  divItem.appendChild(p1);
  const p2 = document.createElement('p');
  p2.classList.add('elemento-trim');
  p2.innerHTML = sobrenome.trim();
  divItem.appendChild(p2);

  //pegando os dados dos inputs nome e sobrenome trabalhando o uppercase
  novoElemento.appendChild(divItem);
  const p3 = document.createElement('p');
  p3.classList.add('elemento-uppercase');
  p3.innerHTML = nome.toUpperCase();
  divItem.appendChild(p3);
  const p4 = document.createElement('p');
  p4.classList.add('elemento-uppercase');
  p4.innerHTML = sobrenome.toUpperCase();
  divItem.appendChild(p4);

  //pegando os dados dos inputs nome e sobrenome trabalhando o lowercase
  novoElemento.appendChild(divItem);
  const p5 = document.createElement('p');
  p5.classList.add('elemento-lowercase');
  p5.innerHTML = nome.toLowerCase();
  divItem.appendChild(p5);
  const p6 = document.createElement('p');
  p6.classList.add('elemento-lowercase');
  p6.innerHTML = sobrenome.toLowerCase();
  divItem.appendChild(p6);

  //pegando os dados dos inputs nome e sobrenome e trabalhando o concatenar
  novoElemento.appendChild(divItem);
  const concatenar = document.createElement('p');
  concatenar.innerHTML = nome.concat(sobrenome);
  divItem.appendChild(concatenar);

  //pegando os dados dos inputs nome e sobrenome e trabalhando o replace
  novoElemento.appendChild(divItem);
  const rep = document.createElement('p');
  const replace = document.createElement('p');
  let substituir = '';
  let characters = { 'a': '@', 'e': '3'};
  substituir = nome.replace(/[a-e]/gi, m => characters[m]);
  rep.innerHTML = substituir;
  divItem.appendChild(rep);
  substituir = sobrenome.replace(/[a-e]/gi, m => characters[m]);
  replace.innerHTML = substituir;
  divItem.appendChild(replace);
  
});