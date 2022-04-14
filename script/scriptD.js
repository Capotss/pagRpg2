
let inp = document.getElementById("inpD")
let list = document.getElementById("listD")
let arrayD = []

onload = function () {
    arrayD = JSON.parse(localStorage.getItem('cacheD')) || []
    updateScreen()    
}

let d = new Date()
console.log(d.getDate(), d.getMonth()+1)
function addObjD() {
    if (inp.value == "") {
        alert("insira um objetivo válido")
    } else {

        let obj = {
            feito: inp.value,
            id: Date.now(),
            dia: `${d.getDate()}/${d.getMonth()} -- ${d.getHours()}h:${d.getMinutes()}m`
        }
        console.log(obj)
        arrayD.push(obj)
        updateScreen()
        inp.value =""
    }
}
function updateScreen(){
    list.innerHTML=""
    arrayD.forEach(obj => {
        let li = document.createElement("li")
        li.appendChild(document.createTextNode(obj.feito))
        li.appendChild(document.createTextNode(obj.dia))
        li.setAttribute("class", "litem")
        li.id = obj.id
        li.innerText = `${obj.feito} | ${obj.dia}`

        let delbtn = document.createElement("button")
        delbtn.textContent = "Remover"
        delbtn.onclick = function () { delTask(obj.id) }
        delbtn.setAttribute('class', 'btn del')
        li.appendChild(delbtn)
        list.appendChild(li)
    })
    localStorage.setItem("cacheD", JSON.stringify(arrayD))
}

function delTask(id) {
    arrayD = arrayD.filter(obj => obj.id != id)
    updateScreen()
}

inpD.addEventListener("keyup", enter2);

function enter2() {
    if (event.keyCode === 13) {
        document.getElementById("btnD").click();
    }
}