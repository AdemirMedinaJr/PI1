// cria referência aos elementos da página
var ourFrutas = document.getElementById('outFrutas')

var mensaOk = document.getElementById('mensaOk')
var mensaErro = document.getElementById('mensaErro')


var imgBanana = document.getElementById('imgBanana')
var imgKiwi = document.getElementById('imgKiwi')
var imgLaranja = document.getElementById('imgLaranja')
var imgMaca = document.getElementById('imgMaca')
var imgUva = document.getElementById('imgUva')

var divJogo = document.getElementById('divJogo')

var btVerificar = document.getElementById('btVerificar')
var btNovamente = document.getElementById('btNovamente')


var num = 0

function adicionaFruta(fruta) {
    // cria um novo elemento na página
    var novaImagem = document.createElement('img')
    //muda propriedades do elemento
    novaImagem.src = 'img/' + fruta + '.png'
    novaImagem.textAlt = 'Imagem de ' + fruta
    novaImagem.className = 'img-' + fruta

    num++
    var idImg = 'img' + num
    novaImagem.id = idImg

    novaImagem.onclick = function () { removerFruta(idImg) }


    // indica que o elemento criado é filho de divJogo
    divJogo.appendChild(novaImagem)

    if (num == 1) {
        btVerificar.className = 'btn btn-primary btn-lg px-4 float-right mr-3 d-inline'
    }

}

imgBanana.addEventListener('click', function () {
    adicionaFruta('banana')
})
imgKiwi.addEventListener('click', function () {
    adicionaFruta('kiwi')
})
imgLaranja.addEventListener('click', function () {
    adicionaFruta('laranja')
})
imgMaca.addEventListener('click', function () {
    adicionaFruta('maca')
})
imgUva.addEventListener('click', function () {
    adicionaFruta('uva')
})

function removerFruta(idFruta) {
    var retirar = document.getElementById(idFruta)
    divJogo.removeChild(retirar)
}


// cria variáveis globais
var numBananas
var numKiwis
var numLaranjas
var numMacas
var numUvas

function sorteiaFrutas() {
    // gera um valor aleatório entre 1 e 5 para cada fruta
    numBananas = Math.ceil(Math.random() * 5)
    numKiwis = Math.ceil(Math.random() * 5)
    numLaranjas = Math.ceil(Math.random() * 5)
    numMacas = Math.ceil(Math.random() * 5)
    numUvas = Math.ceil(Math.random() * 5)


    outFrutas.textContent = numBananas + ' Banana(s) :: ' +
        numKiwis + ' Kiwi(s) :: ' +
        numLaranjas + ' Laranja(s) :: ' +
        numMacas + ' Maca(s) :: ' +
        numUvas + ' Uva(s)'
}

// evento que ocorre quando a página é carregada
window.addEventListener('load', sorteiaFrutas)

function verificarResultado() {
    //captura todos os elementos img (imagens) filha de divJogo
    //cria um vetor em imagens

    var imagens = divJogo.getElementsByTagName('img')

    var contaBanana = 0
    var contaKiwi = 0
    var contaLaranja = 0
    var contaMaca = 0
    var contaUva = 0

    // percorrer o vetor e verifica a classe de cada imagem capturada

    for (var i = 0; i < imagens.length; i++) {
        if (imagens[i].className == 'img-banana') {
            contaBanana++
        } else if (imagens[i].className == 'img-kiwi') {
            contaKiwi++
        } else if (imagens[i].className == 'img-laranja') {
            contaLaranja++
        } else if (imagens[i].className == 'img-maca') {
            contaMaca++
        } else {
            contaUva++
        }
    }

    var misturado = true

    for (var i = 0; i < imagens.length - 1; i++) {
        if (imagens[i].className == imagens[i + 1].className) {
            misturado = false
            break
        }
    }

    if (numBananas == contaBanana &&
        numKiwis == contaKiwi &&
        numLaranjas == contaLaranja &&
        numMacas == contaMaca &&
        numUvas == contaUva &&
        misturado) {
        mensaOk.className = 'display-2 text-primary d-inline'
        } else {
        mensaErro.className = 'display-4 text-danger d-inline'
    }
    btNovamente.className = 'btn btn-danger btn-lg px-4 float-right mr-3 d-inline'
}
btVerificar.addEventListener('click', verificarResultado)

function jogarNovamente() {
    window.location.reload()
}
btNovamente.addEventListener('click', jogarNovamente)