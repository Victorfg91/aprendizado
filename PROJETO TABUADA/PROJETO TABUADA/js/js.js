let form  = document.querySelector("form");

let num1 = document.querySelector("#number1");
let num2 = document.querySelector("#number2");

let table = document.querySelector(".table");

const h2 = document.querySelector("h2");

table.innerHTML = `<span class="table-empty-message">Informe um número para calcular uma tabuada...</span>`;

function handleSubmit(event) {

    table.innerHTML = "";
    event.preventDefault();

    let valorOne = parseInt(num1.value);
    let valorTwo = parseInt(num2.value);

    
    

    if(valorOne == null || isNaN(valorOne) || valorOne == 0){
        table.innerHTML = ""
        table.innerHTML = `<span class="table-empty-message">Informe um número para calcular uma tabuada...</span>`;
        h2.textContent = `Tabuada do número:`;
        
    }else if(valorTwo == null || isNaN(valorTwo) || valorTwo == 0){
        table.innerHTML = ""
        table.innerHTML = `<span class="table-empty-message">Informe um número para calcular uma tabuada...</span>`;
        h2.textContent = `Tabuada do número:`;

    }else{
        for (let index = 1; index <= valorTwo; index++) {

            h2.textContent = `Tabuada do número: ${valorOne}`;
            const li = document.createElement("li");
    
            li.classList.add("operation-item");
    
            li.innerHTML = `<span class="result-base">${valorOne}</span><span> x </span><span>${index}</span><span> = </span><span>${valorOne * index}</span>`;
            
            table.appendChild(li);
    
            
        }
    }

    
    
}

form.addEventListener("submit", handleSubmit);








