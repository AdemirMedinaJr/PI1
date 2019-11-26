//cria referência aos elementos da página que irão ter o seu comportamento 'monitorado' pelo JavaScript

var rbBauru = document.getElementById('rbBauru')
var rbTorrada = document.getElementById('rbTorrada')
var rbCachorroQuente = document.getElementById('rbCachorro Quente')

var imgLanche = document.getElementById('imglanche')

var outpreco = document.getElementById('outpreco')

var ckBatataFrita = document.getElementById('ckBatata Frita')
var ckOvo = document.getElementById('ckOvo')


//variável global para o preço do veículo
// qua pode ser acessada em qualquer função

var preco = 45900

//Define uma função
//que irá trocar a foto quando acionada (chamada)
function trocarfoto() {
    //se o radio button(rbKA) estiver selecionado (checado)
    if (rbBauru.checked) {
        imgLanche.src = "img/Bauru.jpg"
        preco = 45900
    }else if (rbTorrada.checked) {
        imgLanche.src = "img/Torrada.png"
        preco = 49800
    }else {
        imgcarro.src = "img/focus.png"
        preco = 61200
    }


ckpintura.checked = false
ckalarme.checked = false


//chama a function, ou seja, vai exibir o preço formatado
exibirpreco()
}


function exibirpreco() {
    outpreco.textContent = preco.toLocaleString ('pt-br',
    {style: 'currency', currency: 'BRL'})

}

function somarpintura() {
    //se mudou de "estado"
if(ckpintura.checked) {
    preco = preco + 1200
}else {

//
    preco = preco - 1200
}
exibirpreco()

}


function somaralarme() {
    //se mudou de "estado"
if(ckalarme.checked) {
    preco = preco + 780
}else {

//
    preco = preco - 780
}
exibirpreco()

}

//cria 'ouvintes' de evento para os elementos da página
//que quando ocorrem chama uma função

rbka.addEventListener('change', trocarfoto)
rbfiesta.addEventListener('change', trocarfoto)
rbfocus.addEventListener('change', trocarfoto)


ckpintura.addEventListener("change", somarpintura)
ckalarme.addEventListener("change", somaralarme)