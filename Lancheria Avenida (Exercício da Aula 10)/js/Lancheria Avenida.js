//cria referência aos elementos da página que irão ter o seu comportamento 'monitorado' pelo JavaScript

var rbhamburger = document.getElementById("rbhamburger")
var rbtorrada = document.getElementById("rbtorrada")
var rbcachorroquente = document.getElementById("rbcachorroquente")

var imglanche = document.getElementById("imglanche")

var outpreco = document.getElementById("outpreco")

var ckovo = document.getElementById("ckovo")
var ckbacon = document.getElementById("ckbacon")
var ckcebola = document.getElementById("ckcebola")
var ckmaioneseextra = document.getElementById("ckmaioneseextra")


//variável global para o preço do veículo
// qua pode ser acessada em qualquer função

var preco = 19.80

//Define uma função
//que irá trocar a foto quando acionada (chamada)
function trocarfoto() {
    //se o radio button(rbxxxxx) estiver selecionado (checado)
    if (rbhamburger.checked) {
        imglanche.src = "img/hamburger.png"
        preco = 19.80
    }else if (rbtorrada.checked) {
        imglanche.src = "img/torrada.jpg"
        preco = 10.80
    }else {
        imglanche.src = "img/cachorroquente.png"
        preco = 14.80
    }

ckovo.checked = false
ckbacon.checked = false
ckcebola.checked = false
ckmaioneseextra.checked = false

//chama a function, ou seja, vai exibir o preço formatado
exibirpreco()
}


function exibirpreco() {
    outpreco.textContent = preco.toLocaleString ('pt-br',
    {style: 'currency', currency: 'BRL'})

}

function somarovo() {
    //se mudou de "estado"
if(ckovo.checked) {
    preco = preco + 2.50
}else {

    preco = preco - 2.50
}
exibirpreco()

}


function somarbacon() {
    //se mudou de "estado"
if(ckbacon.checked) {
    preco = preco + 3.00

}else {

    preco = preco - 3.00
}
exibirpreco()

}


function somarcebola() {
    //se mudou de "estado"
if(ckcebola.checked) {
    preco = preco + 2.00
}else {

    preco = preco - 2.00
}
exibirpreco()

}


function somarmaioneseextra() {
    //se mudou de "estado"
if(ckmaioneseextra.checked) {
    preco = preco + 1.50
}else {

    preco = preco - 1.50
}
exibirpreco()

}



//cria 'ouvintes' de evento para os elementos da página
//que quando ocorrem chama uma função

rbhamburger.addEventListener('change', trocarfoto)
rbtorrada.addEventListener('change', trocarfoto)
rbcachorroquente.addEventListener('change', trocarfoto)


ckovo.addEventListener("change", somarovo)
ckbacon.addEventListener("change", somarbacon)
ckcebola.addEventListener("change", somarcebola)
ckmaioneseextra.addEventListener("change", somarmaioneseextra)