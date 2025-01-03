const btn  = document.querySelector("button");
let num1 = document.querySelector("#number1");
let num2 = document.querySelector("#number2");
let table = document.querySelector("#table");
const ul = document.createElement("ul");
const li = [document.createElement("li")]



btn.addEventListener("click", () => {

    let valor = parseInt(num1.value);
    let valor2 = parseInt(num2.value);
    
    let results = [];

    

    for(let i=1;i<=valor2;i++){
        
        const result = valor * i; // Calcula o resultado para o valor atual de i
        results +=`${valor} x ${i} = ${result}\n`;
        table.appendChild(ul);
        ul.appendChild(li);
        lis.textContent = results;

    }

    table.value = results.trim();

    const h2 = document.querySelector("h2");
    h2.textContent = `Tabuada do número: ${valor}`;

    console.log(valor, valor2);


})







