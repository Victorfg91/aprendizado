const box = document.querySelector(".container");
const clean = document.querySelector("button")


const matriz = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
] 



let jogadorAtual = "O"

function updatePlayer(){
    
    if(jogadorAtual == "O"){
        jogadorAtual = "X"
    }else if(jogadorAtual == "X"){
        jogadorAtual = "O"
    }
}

function render (){
    for (let i = 0; i < matriz.length; i++) {
        const rows = document.createElement("div")
        rows.classList.add("row")
        box.appendChild(rows);

        for (let j = 0; j < matriz[i].length; j++) {
            const columns = document.createElement("div")
            columns.classList.add("column")
            rows.appendChild(columns);

            columns.addEventListener("click", (e)=>{
                columns.innerHTML = jogadorAtual
                updatePlayer()                
            })

            clean.addEventListener("click", ()=>{
                columns.innerHTML = ""
                jogadorAtual = "O"
            })
        }
    }

    
}
render();
