let soma = 0;
let lista = [1, 2, 3, 4, 5, 6];

lista.forEach(valor => {
 console.log( soma += valor )
});

let total = lista.reduce((item, total) => {
  return item + total
}, 100);

alert(`Total = ${total}`);

