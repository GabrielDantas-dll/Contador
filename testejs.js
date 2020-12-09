const btnMais = document.getElementById("btnMais");
const btnMenos = document.getElementById("btnMenos");
const btnCheck = document.getElementById("btnCheck");
const btnZerar = document.getElementById("btnZerar");
const p = document.getElementById("contador");
//limite = document.getElementById('valor').value;

let contador = 0;

p.innerHTML = contador;

btnMais.addEventListener('click', function() {
    
    p.innerHTML = ++contador;

})

btnMenos.addEventListener('click', function() {

    p.innerHTML = --contador;
    
})


btnZerar.addEventListener('click', function() {
    
    p.innerHTML = contador = 0;

})


