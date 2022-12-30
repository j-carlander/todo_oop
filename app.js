const listContainer = document.querySelector(".todo-list-container");
const searchResultContainer = document.querySelector(
  ".search-result-container"
);
const searchResultList = document.querySelector(".search-result-list");
const dialogContainer = document.querySelector(".create-todo-dialog");

const todoTitle = dialogContainer.querySelector("#title");
const todoContent = dialogContainer.querySelector("#content");
const todoDeadline = dialogContainer.querySelector("#deadline");

const showButton = document.querySelector("#showDialog");

const todoSubmitBtn = dialogContainer.querySelector(".todo-submit-btn");
const todoCancelBtn = dialogContainer.querySelector(".todo-cancel-btn");

const searchField = document.querySelector(".search-field");

const deadlineBtn = document.querySelector(".deadline-btn");

let todoList = new TodoList();
todoList.retrieveFromLocalStorage();
todoList.listToHTML(listContainer);

// functions for eventhandlers

function handleSubmitBtnClick(e) {
  let deadlineValue = todoDeadline.value;
  deadlineValue = deadlineValue.replace("T", " ") + ":00";
  todoList.addTodoItem(
    new TodoItem(todoTitle.value, todoContent.value, deadlineValue)
  );

  dialogContainer.classList.add("hide");
  todoList.listToHTML(listContainer);
  todoList.saveToLocalStorage();

  todoTitle.value = "";
  todoContent.value = "";
  todoDeadline.value = "";
}

function handleCancelBtnClick() {
  dialogContainer.classList.add("hide");
  todoTitle.value = "";
  todoContent.value = "";
  todoDeadline.value = "";
}

function handleSearch(e) {
  if (e.key === "Enter") {
    let searchValue = e.target.value;
    let searchResult = todoList.getTodosByTitle(searchValue);
    let resultList = new TodoList();
    searchResult.forEach((result) => resultList.addTodoItem(result));
    resultList.listToHTML(searchResultList);
    searchResultContainer.classList.remove("hide");
  }
}

// eventhandlers

showButton.addEventListener("click", () => {
  dialogContainer.classList.remove("hide");
});

todoSubmitBtn.addEventListener("click", handleSubmitBtnClick);

todoCancelBtn.addEventListener("click", handleCancelBtnClick);

searchField.addEventListener("keypress", handleSearch);

searchResultContainer.addEventListener("click", (event) => {
  if (event.currentTarget != event.target) {
    return false;
  }
  searchResultContainer.classList.add("hide");
});

deadlineBtn.addEventListener("click", () => {
  todoList.orderByEndDate();
});

// todoList.printTitles();
// todoList.getUrgentTodos();

function addDummyContent() {
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

  todoList.listToHTML(listContainer);
  todoList.saveToLocalStorage();
}
