// carne 400g por pessoa - mais de 6h 650g
// cerveja 1200ml por pessoa - mais de 6h 2000ml
// bebidas 1000ml por pessoa - mais de 6h 1500ml

// crianças valem por 0.5

let ad = document.getElementById("adultos")
let cr = document.getElementById("criancas")
let du = document.getElementById("duracao")
let resultado = document.getElementById("resultado")

function calc(){
    let adultos = ad.value;
    let criancas = cr.value;
    let duracao = du.value;

    let totalCarne = adultos*qtdeCarne(duracao) + criancas*qtdeCarne(duracao)/2;
    let totalCerveja = adultos*litrosCerveja(duracao)
    let totalBebidas = adultos*qtdeBebida(duracao) + criancas*qtdeBebida(duracao)/2;

    let calculado=[totalCarne,totalCerveja,totalBebidas]
    return calculado

}

function qtdeCarne(duracao){
    if (duracao >= 6){
        return 650
    }
    else{
        return 400
    }
}

function litrosCerveja(duracao){
    if (duracao >= 6){
        return 2000
    }
    else{
        return 1500
    }
}

function qtdeBebida(duracao){
    if (duracao >= 6){
        return 1500
    }
    else{
        return 1000
    }
}

function main(){
    
    let calculado = calc()
    let carne = calculado[0]
    let cerveja = calculado[1]
    let bebidas = calculado[2]

    resultado.innerHTML = `<p>Seu churrasco precisará de:</p>`
    resultado.innerHTML += `<p class="itens">${Math.ceil(carne/1000)} Kg de carne.</p>`
    resultado.innerHTML += `<p class="itens">${Math.ceil(cerveja/355)} latas de cerveja.</p>`
    resultado.innerHTML += `<p class="itens">${Math.ceil(bebidas/2000)} pet 2l de bebidas.</p>`
}