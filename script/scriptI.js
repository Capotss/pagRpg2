let img = document.getElementById("image-swap");
let img2 = document.getElementById("image-swap2");
let opt = document.getElementById("item1")
let opt2 = document.getElementById("item2")
let divimg = document.getElementById("divimg")
let divimg2 = document.getElementById("divimg2")
let divDesc = document.getElementById("divDesc")
let divDesc2 = document.getElementById("divDesc2")


const objchalicar = {
    local: "Shurima?",
    nivelRecomendado: "15+",
    recompensa: "10000 PO e recompensa especial",
    localDeContato: "Ainda nao definido",
    quantidade: "1"
}
const obja = {
    local: "a",
    nivelRecomendado: "a",
    recompensa: "a",
    localDeContato: "a",
    quantidade: "1"
}
onload = function () {
    setImage()
    setImage2()
}
function setImage() {
    let optV = opt.value
    divimg.innerHTML = ""
    divimg.innerHTML += `<img src="${optV}" id="image-swap1">`
    document.getElementById("image-swap1").style.borderRadius = "10px"
    let text = opt.options[opt.selectedIndex].text
    if (text == "Chalicar") {
        var obj = objchalicar
        document.getElementById("div1").style.backgroundColor ="rgba(95, 86, 0, 0.8)"
    }
    if (text == "desconhecido") {
        var obj = obja
        document.getElementById("image-swap1").style.animationName = "changeColor2"
        document.getElementById("div1").style.backgroundColor ="rgba(54, 0, 104, 0.8)"
    }
    divDesc.innerHTML = `
    <p class="divDesc"> Local: ${obj.local}</p>
    <p class="divDesc"> Nível recomendado: ${obj.nivelRecomendado}</p>
    <p class="divDesc"> Recompensa: ${obj.recompensa}</p>
    <p class="divDesc"> Local de Contato: ${obj.localDeContato}</p>
    <p class="divDesc"> Quantidade: ${obj.quantidade}</p>`
}
const objb = {
    local:"desconhecido",
    nivelRecomendado:"10+",
    recompensa:"A ser negociado, valor > 3000PO",
    localDeContato:"ainda não definido",
    quantidade: "1"
}
const objc = {
    local:"Diversos",
    nivelRecomendado:"qualquer",
    recompensa:"trocarei em espada do divino",
    localDeContato:"c",
    quantidade: "4"
}

function setImage2() {
    let optV2= opt2.value
    divimg2.innerHTML = ""
    divimg2.innerHTML += `<img src="${optV2}" id="image-swap2">`
    document.getElementById("image-swap2").style.borderRadius = "10px"
    let text2 = opt2.options[opt2.selectedIndex].text
    if (text2 == "Ladrão de Almas de Mejai") {
        var obj2 = objb
        document.getElementById("image-swap2").style.animationName = "changeColor2"
        document.getElementById("div2").style.backgroundColor ="rgba(54, 0, 104, 0.8)"
    }
    if (text2 == "Pérola do Rejuvenescimento") {
        var obj2 = objc   
        document.getElementById("image-swap2").style.animationName = "changeColor3"
        document.getElementById("div2").style.backgroundColor ="rgba(0, 90, 0, 0.801)"
    }
    divDesc2.innerHTML = `
    <p class="divDesc"> Local: ${obj2.local}</p>
    <p class="divDesc"> Nível recomendado: ${obj2.nivelRecomendado}</p>
    <p class="divDesc"> Recompensa: ${obj2.recompensa}</p>
    <p class="divDesc"> Local de Contato: ${obj2.localDeContato}</p>
    <p class="divDesc"> Quantidade: ${obj2.quantidade}</p>`
}