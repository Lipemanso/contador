
let valorAtualbox = document.getElementById("valorAtual")
let valorAtual = 0;

function incrementar(){
  valorAtual = valorAtual + 1;
  valorAtualbox.innerHTML = valorAtual;
}

function decrementar(){
  if(valorAtual > 0){
    valorAtual = valorAtual - 1;
    valorAtualbox.innerHTML = valorAtual;
  }
}