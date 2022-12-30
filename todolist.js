class TodoList {
  constructor() {
    this.todos = []; // empty array
  }

  addTodoItem(todoItem) {
    this.todos.push(todoItem);
  }

  printTitles() {
    console.log(`There are ${this.todos.length} entries in the todo list`);
    this.todos.forEach((todo) => console.log(todo.title));
  }

  getTodosByTitle(titleQuery) {
    // To-be implemented
    let result = this.todos.filter((todo) => todo.title.includes(titleQuery));
    return result;
  }

  listToHTML(container) {
    let list = document.createElement("ul");
    this.todos.forEach((todo) => {
      let item = document.createElement("li");
      item.innerHTML = todo.getHTMLTemplate();
      list.append(item);
    });
    container.innerHTML = list.innerHTML;
  }

  getUrgentTodos() {
    console.log("These Todos have deadlines within 4 hours");
    this.todos.forEach((todo) => {
      let now = new Date();
      let endDate = new Date(todo.endDate);
      if (endDate - now < 14400000) {
        // 14 400 000 milliseconds is 4 hours
        console.log(todo.title);
      }
    });
  }

  saveToLocalStorage() {
    localStorage.setItem("todoList", JSON.stringify(this.todos));
  }

  retrieveFromLocalStorage() {
    let result = JSON.parse(localStorage.getItem("todoList")) || [];
    for (let index in result) {
      this.addTodoItem(
        new TodoItem(
          result[index].title,
          result[index].content,
          result[index].endDate
        )
      );
    }
  }

  orderByEndDate() {
    this.todos.sort(function (a, b) {
      return new Date(a.endDate) - new Date(b.endDate);
    });
    this.listToHTML(listContainer);
  }
}
