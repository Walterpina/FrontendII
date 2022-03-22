/* Código Marcelo */

/* Pegando dados do Formulário */
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); /* Impede de limpar os campos */

  const titulo = document.querySelector("#titulo");
  const tituloTexto = titulo.value;

  const url = document.querySelector("#url");
  const urlTexto = url.value;

  const descricao = document.querySelector("#descricao");
  const descricaoTexto = descricao.value;

  const cardContainer = document.querySelector(".card-container");

  /* Criando elementos HTML Card */
  const divCards = document.createElement("div");
  divCards.classList.add("cards");

  /* Criando elementos HTML Titulo Card */
  const divCardTitulo = document.createElement("div");
  divCardTitulo.classList.add("card-title");
  const tituloH3 = document.createElement("h3");
  const tituloH3Texto = document.createTextNode(tituloTexto);
  /* Apendar */
  cardContainer.appendChild(divCards);
  divCards.appendChild(divCardTitulo);
  divCardTitulo.appendChild(tituloH3);
  tituloH3.appendChild(tituloH3Texto);

  /* Criando elementos HTML Imagem Card */
  const divCardImg = document.createElement("div");
  divCardImg.classList.add("card-img");
  const tagImg = document.createElement("img");
  tagImg.setAttribute("src", urlTexto);
  /*Apendar*/
  divCards.appendChild(divCardImg);
  divCardImg.appendChild(tagImg);

  /* Criando elementos HTML Descrição Card */
  const divDescricao = document.createElement("div");
  divDescricao.classList.add("card-description");
  const pDivDescricao = document.createElement("p");
  const TextoPDivDescricao = document.createTextNode(descricaoTexto);
  /* Apendar */
  divCards.appendChild(divDescricao);
  divDescricao.appendChild(pDivDescricao);
  pDivDescricao.appendChild(TextoPDivDescricao);
});
