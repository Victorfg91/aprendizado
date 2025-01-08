const container = document.querySelector(".container");
const btn = document.querySelector("button");
const input = document.querySelector("input");
const divCode = document.querySelector(".qr-code")
const img = document.createElement("img");

function qrCode(){


    const takeInput = input.value;
    if(!takeInput) return;

    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${takeInput}`

    if (!divCode.contains(img)) {
        btn.textContent = "Gerando código...";
        divCode.appendChild(img);

        img.addEventListener("load", () =>{
            container.classList.add("active")
            btn.textContent = "Código gerado!";
     
        });

    }else{
        btn.textContent = "Gerando novo código...";
        img.addEventListener("load", () => {
        btn.textContent = "Novo código gerado!";
    })}
}

btn.addEventListener("click", () =>{
    qrCode();
})

