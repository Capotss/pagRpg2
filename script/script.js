// TYLER
let tkd1 = document.getElementsByClassName("tkd")[0]
function borda1() {
    tkd1.style.border = "2px solid rgba(255,0,0,1)"
    tkd1.style.backgroundColor = "rgba(37, 0, 0, 0.4)"
    tkd1.style.transition = "1s"
    tkd1.style.borderRadius = "10px"
}
function lborda1() {
    tkd1.style.border = "2px solid rgba(255,0,0,0)"
    tkd1.style.backgroundColor = "rgba(37, 0, 0, 0)"
    tkd1.style.borderRadius = "0px"
}
// LYT 
let tkd2 = document.getElementsByClassName("tkd")[1]
function borda2() {
    tkd2.style.border = "2px solid rgba(0, 247, 255,1)"
    tkd2.style.backgroundColor = "rgba(0, 34, 34, 0.4)"
    tkd2.style.transition = "1s"
    tkd2.style.borderRadius = "10px"
}
function lborda2() {
    tkd2.style.border = "2px solid rgba(0, 247, 255,0)"
    tkd2.style.backgroundColor = "rgba(0, 34, 34, 0)"
    tkd2.style.borderRadius = "0px"
}

// THELIEL
let tkd3 = document.getElementsByClassName("tkd")[2]
function borda3() {
    tkd3.style.border = "2px solid rgba(255, 0, 140,1)"
    tkd3.style.backgroundColor = "rgba(48, 0, 36, 0.4)"
    tkd3.style.transition = "1s"
    tkd3.style.borderRadius = "10px"
}
function lborda3() {
    tkd3.style.border = "2px solid rgba(255, 0, 140,0)"
    tkd3.style.backgroundColor = "rgba(48, 0, 36, 0)"
    tkd3.style.borderRadius = "0px"
}
// HEX
let tkd4 = document.getElementsByClassName("tkd")[3]
function borda4() {
    tkd4.style.border = "2px solid rgba(255, 0, 0,1)"
    tkd4.style.backgroundColor = "rgba(63, 4, 0, 0.4)"
    tkd4.style.transition = "1s"
    tkd4.style.borderRadius = "10px"
}
function lborda4() {
    tkd4.style.border = "2px solid rgba(255, 0, 0,0)"
    tkd4.style.backgroundColor = "rgba(63, 4, 0, 0)"
    tkd4.style.borderRadius = "0px"
}


// PESQUISA
let input = document.getElementById("pesquisa")
input.addEventListener("keyup", enter);

function enter() {
    if (event.keyCode === 13) {
        document.getElementById("btn1").click();
    }
}

function search() {
    if (input.value == "") {
        alert("Por favor, insira uma pesquisa válida!")
    } else {
        let search = document.getElementById("pesquisa").value
        window.open(`https://wiki.runarcana.org/index.php?search=${search}&title=Especial%3ABusca&go=Ir`, "_blank")
    }
    input.value = ""
}

// LOCAIS

let nashamarae = "Esta cidade costeira do norte, atualmente administrada por Hagyett Sabja. O povo de Nashramae é dedicado a preservar os caminhos do passado, celebrando seus ancestrais e os Ascensionados. Realiza um festival anual que celebra Rammus Rammus, onde milhares se reúnem para rolar e dar cambalhotas pela cidade. Suas principais exportações são produtos tecidos, como esteiras e rolos de tecido."
let belzhun = "Esta cidade do norte é atualmente controlada por Noxus, mas tem uma grande insurgência rebelde contra Noxus. Conhecidos como os Sóis de Bel'Zhun, o grupo frequentemente troca armas com o Clã Medarda de Piltover."
let demacia = "Capital Demaciana: A maior cidade do Reino, a capital é o principal centro político, cultural, religioso, militar, econômico e educacional do país. Demacia é um farol luminoso de esperança para a humanidade, e como tal a nação e sua Capital são as representações visuais deste conceito. Há uma sensação de limpeza e intocada ao olhar par suas cidades. Torres altas riscam os céus. Pedras brancas e mármore são os materiais de escolha na construção de edifícios Demacianos. Majestosas bandeiras voam alto ao longo dos parapeitos da cidade. As muralhas da cidade praticamente brilham com poder e nobreza. As casas nobres que residem dentro da cidade são os Buvelle, Casa de Sona; Crownguard, Casa de Garen e Luxanna; Laurent, Casa da Fiora; e Vayne, Casa de Vayne."
function local() {
    console.log(document.getElementById("caixaS").value)
    let caixaS = document.getElementById("caixaS").value
    let historia = document.getElementById("text1")
    if (caixaS == "op1") {
        historia.innerText = ""
        historia.innerText += " " + nashamarae
    }
    if (caixaS == "op2") {
        historia.innerText = ""
        historia.innerText += " " + belzhun
    }
    if (caixaS == "op3") {
        historia.innerText = ""
        historia.innerText += " " + demacia
    }

}

// QUEST OBJS

let inp = document.getElementById("inp2")
let list = document.getElementById("list")
let array = []

onload = function () {
    array = JSON.parse(localStorage.getItem('cache')) || []
    updateScreen()
    let historia = document.getElementById("text1")
    historia.innerText += " " + nashamarae

}


function addObj() {
    if (inp.value == "") {
        alert("insira um objetivo válido")
    } else {
        let obj = {
            feito: inp.value,
            id: Date.now(),
            recompensa: Number(prompt("Quantos PO de recompensa?"))
        }
        array.push(obj)
        updateScreen()
        inp.value = ""
    }
}
function updateScreen() {
    var poT = document.getElementById("poT")
    list.innerHTML = ""
    array.forEach(obj => {
        let li = document.createElement("li")
        li.appendChild(document.createTextNode(obj.feito))
        let textin = " " + "| Recompensa: " + obj.recompensa + " PO"
        li.appendChild(document.createTextNode(textin))
        li.setAttribute("class", "litem")
        li.setAttribute("rec", obj.recompensa)
        li.id = obj.id

        let delbtn = document.createElement("button")
        delbtn.textContent = "Remover"
        delbtn.onclick = function () { delTask(obj.id) }
        delbtn.setAttribute('class', 'btn del')
        li.appendChild(delbtn)
        list.appendChild(li)

    })
    localStorage.setItem("cache", JSON.stringify(array))
}

function delTask(id) {
    array = array.filter(obj => obj.id != id)
    updateScreen()
}

inp2.addEventListener("keyup", enter2);

function enter2() {
    if (event.keyCode === 13) {
        document.getElementById("btn3").click();
    }
}

// DIÁRIO e CAÇADORES

function abrirD() {
    window.open("./diario/diário.html")
}
function abrirI() {
    window.open("./cacadores/cacadores.html")
}