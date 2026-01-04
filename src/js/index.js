/*

OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo 
cartao da lista
 - passo 1 - dar um jeito de pegar o elemento HTML da seta avancar
 - passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
    - passo 3 - fazer aparecer o próximo cartão da lista 
   - passo 4 - buscar o cartão que esta selecionado e esconder

OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão 
anterior da lista
 - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
 - passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
 - passo 3 - fazer aparecer o cartão anterior da lista
   - passo 4 - buscar o cartão que esta selecionado e esconder
*/

// - passo 1 - dar um jeito de pegar o elemento HTML da seta avancar
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".carta");

let cartaoSelecionado = 0;

// - passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
btnAvancar.addEventListener("click", () => {
  if (cartaoSelecionado === cartoes.length - 1) return;

  // passo 4 - buscar o cartão que esta selecionado e esconder
  const cartaoAtual = document.querySelector(".selecionado");
  cartaoAtual.classList.remove("selecionado");

  //  - passo 3 - fazer aparecer o próximo cartão da lista
  cartaoSelecionado++;
  cartoes[cartaoSelecionado].classList.add("selecionado");
});

// OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão 
// anterior da lista
//  - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
//  - passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
//  - passo 3 - fazer aparecer o cartão anterior da lista
//    - passo 4 - buscar o cartão que esta selecionado e esconder
// */



btnVoltar.addEventListener("click", () => {
  if (cartaoSelecionado ===  0) return;

  const cartaoAtual = document.querySelector(".selecionado");
  cartaoAtual.classList.remove("selecionado");

  cartaoSelecionado--;
  cartoes[cartaoSelecionado].classList.add("selecionado");
});

