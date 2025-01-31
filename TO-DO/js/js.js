const todoArray = ["Fazer tal coisa", "Fazer outra coisa"];

const todoForm = document.querySelector("#todo-form");
const editForm = document.querySelector("#edit-form");
const editButton = editForm.querySelector("#edit-button");
const editInput = editForm.querySelector("#edit-input");
const todoList = document.querySelector("#todo-list");

function toggleForms() {
  editForm.classList.toggle("hide");
  todoForm.classList.toggle("hide");
  todoList.classList.toggle("hide");
}

function fillEditForm(value, index) {
  editForm.setAttribute("data-index", index);

  editInput.value = value;

  editButton.addEventListener("click", updateTodo);
}

function createItem(title, index) {
  const itemElement = document.createElement("div");
  itemElement.classList.add("todo");
  itemElement.setAttribute("data-index", index);

  const titleElement = document.createElement("h3");
  titleElement.innerText = title;

  const finishButton = document.createElement("button");
  finishButton.type = "button";
  finishButton.classList.add("finish-todo");
  finishButton.innerHTML = `<i class="fa-solid fa-check"></i>`;

  const editButton = document.createElement("button");
  editButton.type = "button";
  editButton.classList.add("edit-todo");
  editButton.innerHTML = `<i class="fa-solid fa-pen"></i>`;
  editButton.addEventListener("click", () => {
    toggleForms();
    fillEditForm(title, index);
  });

  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.classList.add("remove-todo");
  removeButton.innerHTML = `<i class="fa-solid fa-xmark"></i>`;

  itemElement.appendChild(titleElement);
  itemElement.appendChild(finishButton);
  itemElement.appendChild(editButton);
  itemElement.appendChild(removeButton);

  return itemElement;
}

function renderItems() {
  todoList.innerHTML = "";

  todoArray.forEach((item, index) =>
    todoList.appendChild(createItem(item, index))
  );
}

function updateTodo(index) {
  const position = parseInt(editForm.getAttribute("data-index"));
  todoArray[position] = editInput.value;

  renderItems();
  toggleForms();

  editButton.removeEventListener("click", updateTodo);

  editForm.removeAttribute("data-index");
}

renderItems();
