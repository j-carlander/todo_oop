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
}
