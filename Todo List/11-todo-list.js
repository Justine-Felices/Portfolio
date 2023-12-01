const todoList = [];

function renderTodoList() {
  let todoListHTML = "";

  todoList.forEach((todoObject, i) => {
    const { name, dueDate } = todoObject;
    console.log(todoObject);
    console.log(todoList);
    let html = `
    
        <div>${name}</div> 
        <div>${dueDate}</div>
        <div>
          <button class="js-delete-button">
        Delete
      </button>
        </div>
    
     `;
    todoListHTML += html;
  });

  // for (let i = 0; i < todoList.length; i++) {
  //   let todoObject = todoList[i];
  //   // const name = todoObject.name;
  //   // const dueDate = todoObject.dueDate;
  //   const { name, dueDate } = todoObject;
  //   console.log(todoObject);
  //   console.log(todoList);
  //   let html = `

  //       <div>${name}</div>
  //       <div>${dueDate}</div>
  //       <div>
  //         <button class="js-delete-button"
  //         onclick = "todoList.splice(${i}, 1);
  //         renderTodoList();">
  //       Delete
  //     </button>
  //       </div>

  //    `;
  //   todoListHTML += html;
  //   console.log(html);
  // }
  document.querySelector(".js-todo-container").innerHTML = todoListHTML;

  const deleteButtonEvent = document.querySelectorAll(".js-delete-button");

  deleteButtonEvent.forEach((deleteButton, i) => {
    deleteButton.addEventListener("click", () => {
      todoList.splice(i, 1);
      renderTodoList();
    });
  });
}

const addTodoEventListener = document.querySelector(".js-add-button");
addTodoEventListener.addEventListener("click", () => addTodo());

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  const dueDateElement = document.querySelector(".js-date");
  const dueDate = dueDateElement.value;

  todoList.push({
    // name: name,
    // dueDate: dueDate,
    name,
    dueDate,
  });
  console.log(todoList);

  inputElement.value = "";

  renderTodoList();
}
