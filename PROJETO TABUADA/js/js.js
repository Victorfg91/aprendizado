let form = document.querySelector("form");

let num1 = document.querySelector("#number1");
let num2 = document.querySelector("#number2");

let table = document.querySelector(".table");

function handleSubmit(event) {
  event.preventDefault();

  const numberOne = parseInt(num1.value);
  const numberTwo = parseInt(num2.value);

  if (!numberOne || !numberTwo) {
    return;
  }

  table.innerHTML = `<span class="table-empty-message">Informe um número para calcular uma tabuada...</span>`;

  for (let index = 1; index <= numberTwo; index++) {
    const li = document.createElement("li");

    li.classList.add("operation-item");

    li.innerHTML = `<span class="result-base">${numberOne}</span><span>*</span><span>${index}</span><span>=</span><span>${
      numberOne * index
    }</span>`;

    table.appendChild(li);
  }
}

form.addEventListener("submit", handleSubmit);
