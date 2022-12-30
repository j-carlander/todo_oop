const todoSubmitBtn = document.querySelector(".todo-submit-btn");

const listContainer = document.querySelector(".todo-list-container");

const showButton = document.querySelector("#showDialog");
const dialog = document.querySelector(".create-todo-dialog");
// const selectEl = favDialog.querySelector("select");
// const confirmBtn = favDialog.querySelector("#confirmBtn");

let todoList = new TodoList();

todoList.addTodoItem(
  new TodoItem(
    "Laundry",
    "On monday at 15:00 I have to do laundry before parents arrive",
    "2022-12-30 15:00:00"
  )
);

todoList.addTodoItem(
  new TodoItem(
    "Dishes",
    "On tuesday at 16:00 I have to do dishes before parents arrive",
    "2022-12-30 15:00:00"
  )
);

todoList.addTodoItem(
  new TodoItem(
    "Bake Panncakes",
    "Promised my younger brother to help him bake pancakes at 17:00 tomorrow",
    "2022-12-30 15:00:00"
  )
);

todoList.printTitles();

function handleSubmitBtnClick(e) {
  // let parent = e.target.parentNode;

  //   console.log(parent);

  const todoTitle = dialog.querySelector("#title");
  const todoContent = dialog.querySelector("#content");
  const todoDeadline = dialog.querySelector("#deadline");

  let deadlineValue = todoDeadline.value;
  deadlineValue = deadlineValue.replace("T", " ") + ":00";
  console.log(deadlineValue);
  todoList.addTodoItem(
    new TodoItem(todoTitle.value, todoContent.value, deadlineValue)
  );
  todoList.listToHTML(listContainer);
}

showButton.addEventListener("click", () => {
  dialog.showModal();
});

todoSubmitBtn.addEventListener("click", (e) => {
  handleSubmitBtnClick(e);
});

todoList.listToHTML(listContainer);

let todo = new TodoItem("Test", "Test if end date works");

console.log(todo.endDate);

todo.setDeadline("2022-12-31 12:00:00");
console.log(todo.endDate);

console.log(todoList.getTodosByTitle("clean"));
