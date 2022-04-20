let arrayCT = []
        let arrayCTes = []
        let arrayimgs = []
        let array = []
        let inp = document.getElementById("inpC")
        let btn = document.getElementById("btnC")
        let p = document.getElementById("tendC")
        let list = document.getElementById("list")
        let inp2 = document.getElementById("fp")
        let inp3 = document.getElementById("nomeT")
        let link = document.getElementById("spanT")
        let fundo = document.getElementById("doida")
        let tes = document.getElementById("tesouros")
        let img = document.getElementById("img")
        let spbtn = document.getElementById("spanBtn")
        let btnTes = document.getElementById("btnTes")

        inp.style.width = "10vw"
        inp.style.marginLeft = "1vw"

        onload = function () {
            // TENDENCIA
            arrayCT = JSON.parse(localStorage.getItem("cacheCTheliel")) || []
            p.innerHTML = arrayCT
            if (arrayCT != `TENDENCIA: `) {
                let delbtno = document.getElementsByClassName("del btn")[0]
                delbtno.addEventListener("click", deltask)
            }
            // FEITOS
            array = JSON.parse(localStorage.getItem('cacheC2Theliel')) || []
            updateScreen2()
            arrayCTes = JSON.parse(localStorage.getItem("cacheCTesTheliel")) || []
            link.innerHTML = arrayCTes
            if (arrayCTes != ``) {
                let delbtno2 = document.getElementById("delbtn2")
                delbtno2.addEventListener("click", deltask3)
            }
            arrayimgs = JSON.parse(localStorage.getItem("cacheCTimgTheliel")) || []
            img.innerHTML = arrayimgs
        }
        let deltask = function delTask() {
            p.innerText = `TENDENCIA: `
            arrayCT = [`TENDENCIA: `]
            localStorage.setItem("cacheCTheliel", JSON.stringify(arrayCT))
        }
        function addText(n) {
            if (n.value == "") {
                alert("Por favor insira uma tendencia válida!")
            }
            else {
                arrayCT = []
                let text = n.value
                p.innerText = `TENDENCIA: ${text}`
                let delbtn = document.createElement("button")
                delbtn.textContent = "Remover"
                delbtn.setAttribute("class", "del btn")
                p.appendChild(delbtn)
                delbtn.addEventListener("click", deltask)
                arrayCT.push(p.innerHTML)
                localStorage.setItem("cacheCTheliel", JSON.stringify(arrayCT))
                inp.value = ""
            }
        }
        // FEITOS

        function feitos() {

            if (inp2.value == "") {
                alert("insira um feito válido")
            } else {
                let obj2 = {
                    feito: inp2.value,
                    id: Date.now()
                }
                array.push(obj2)
                updateScreen2()
                inp2.value = ""
            }
        }
        function updateScreen2() {
            list.innerHTML = ""
            array.forEach(obj2 => {
                let li = document.createElement("li")
                li.appendChild(document.createTextNode(obj2.feito))
                li.setAttribute("class", "litem f")
                li.id = obj2.id
                let delbtn2 = document.createElement("button")
                delbtn2.textContent = "Remover"
                delbtn2.onclick = function () { delTask2(obj2.id) }
                console.log(delbtn2)
                delbtn2.setAttribute('class', 'btn del')
                li.appendChild(delbtn2)
                list.appendChild(li)
            })
            localStorage.setItem("cacheC2Theliel", JSON.stringify(array))
        }

        function delTask2(id) {
            array = array.filter(obj2 => obj2.id != id)
            updateScreen2()
        }

        // ENTERS

        inp.addEventListener("keyup", enter3);
        function enter3() {
            if (event.keyCode === 13) {
                document.getElementById("btnC").click();
            }
        }
        inp2.addEventListener("keyup", enter4);
        function enter4() {
            if (event.keyCode === 13) {
                document.getElementById("btn").click();
            }
        }

        // TESOURO

        let deltask3 = function delTask3() {
            link.innerText = ``
            arrayCTes = [``]
            arrayimgs = [``]
            img.innerHTML = ``
            spbtn.innerHTML = ``
            localStorage.setItem("cacheCTesTheliel", JSON.stringify(arrayCTes))
            localStorage.setItem("cacheCTimgTheliel", JSON.stringify(arrayimgs))
        }
        function addText2(n) {
            if (n.value == "") {
                alert("Por favor insira um nome válido!")
            }
            else {
                spbtn.innerHTML = ""
                arrayCTes = []
                let text = n.value
                link.innerHTML = `<span onclick="search()" id="spanT"><a href="https://wiki.runarcana.org/Itens_Mágicos#${text}" target="blank">${text}</a></span>`
                let delbtn3 = document.createElement("button")
                delbtn3.textContent = "Remover"
                delbtn3.setAttribute("id", "delbtn2")
                spbtn.appendChild(delbtn3)
                delbtn3.addEventListener("click", deltask3)
                arrayCTes.push(divspans.innerHTML)
                inp3.value = ""
                img.innerHTML = ""
                img.innerHTML += `<input type="text" placeholder="Adicione o link da imagem do item" name="" id="inpTes"><button
                    id="btnTes" onclick="changeImg()">OK</button>
                    <img src="../assets/150px-The_Collector_item_HD.png" alt="">`
                localStorage.setItem("cacheCTesTheliel", JSON.stringify(arrayCTes))
                arrayimgs = []
                arrayimgs.push(img.innerHTML)
                localStorage.setItem("cacheCTimgTheliel", JSON.stringify(arrayimgs))

            }
        }
        function changeImg() {
            let inpTes = document.getElementById("inpTes")
            arrayimgs = []
            let text2 = inpTes.value
            img.innerHTML = `<img src="${text2}" id="itemImg"><br><br><br><input type="text" placeholder="Adicione o link da imagem do item" name="" id="inpTes"><button
                id="btnTes" onclick="changeImg()">OK</button>
                <img src="../assets/150px-The_Collector_item_HD.png" alt="">`
            arrayimgs.push(img.innerHTML)
            localStorage.setItem("cacheCTimgTheliel", JSON.stringify(arrayimgs))
            inpTes.value = ""
        } 
        