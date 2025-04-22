// data: an object containing the data for an individual
// to-do item. You can see the shape of this data by
// referring to the initialTodos array.
//
// &
//
// selector: a selector string for the corresponding
// <template> element
class Todo {
  constructor(data, selector) {
    this.id = data.id;
    this.name = data.name;
    this.completed = data.completed;
    this.date = data.date;
  }

  _setEventListeners(deleteBtn, checkbox) {
    // sets the necessary event listeners for the
    // delete button and the checkbox
    //
    // this method is private which means i probably will have
    // to use it in my 'getView' method but it wont be used in any other
    // parts of my code outside of the class, because i was confused
    // how if it was called without the "getView" method it would know what
    // they buttons were but thats when i realized its only supposed to be
    // used inside the getView method cause thats what creates the new template
    // for the new todo
    deleteBtn.addEventListener("click", () => {
      todoElement.remove();
    });

    checkbox.addEventListener("click", "");
  }

  getView() {
    // adds handles generating the markup from a template
    // and adding the necessary data to the element.
    // This method should then return the finished to-do element
    const todoElement = selector.content.querySelector(".todo").cloneNode(true);
    const todoNameEl = todoElement.querySelector(".todo__name");
    const todoCheckboxEl = todoElement.querySelector(".todo__completed");
    const todoLabel = todoElement.querySelector(".todo__label");
    const todoDate = todoElement.querySelector(".todo__date");
    const todoDeleteBtn = todoElement.querySelector(".todo__delete-btn");

    todoNameEl.textContent = data.name;
    todoCheckboxEl.checked = data.completed;

    // Apply id and for attributes.
    // The id will initially be undefined for new todos.
    todoCheckboxEl.id = `todo-${data.id}`;
    todoLabel.setAttribute("for", `todo-${data.id}`);

    // If a due date has been set, parsing this it with `new Date` will return a
    // number. If so, we display a string version of the due date in the todo.
    const dueDate = new Date(data.date);
    if (!isNaN(dueDate)) {
      todoDate.textContent = `Due: ${dueDate.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}`;
    }

    this._setEventListeners(todoDeleteBtn, todoCheckboxEl);

    return todoElement;
  }
}
