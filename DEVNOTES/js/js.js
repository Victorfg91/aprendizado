//ELEMENTOS --------------------------------------------------------
const notesContainer = document.querySelector("#note-container");
const noteInput = document.querySelector("#note-content");
const addNoteBtn = document.querySelector(".add-note");

//FUNÇÕES -----------------------------------------------------------
function addNote(){
    const noteObject = {
        id: generateId(),
        content: noteInput.value,
        fixed: false,
    };

    const noteElement = createNote(noteObject.id, noteObject.content);

    notesContainer.appendChild(noteElement);
    console.log(noteObject);
}

function generateId(){
    return Math.floor(Math.random() * 5000);
}

function createNote(id, content, fixed){
    const element = document.createElement("div");

    element.classList.add("note");

    const textarea = document.createElement("textarea");

    textarea.value = content;

    textarea.placeholder = "Adicione algum texto...";

    element.appendChild(textarea);

    return element;
}


//EVENTOS -----------------------------------------------------------
addNoteBtn.addEventListener("click", ()=>addNote())
