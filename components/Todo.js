// data: an object containing the data for an individual
// to-do item. You can see the shape of this data by
// referring to the initialTodos array.
//
// &
//
// selector: a selector string for the corresponding
// <template> element
export class Todo {
  constructor(data, selector) {
    this.id = data.id;
    this.name = data.name;
    this.completed = data.completed;
    this.date = data.date;
    this.selector = selector;
  }

  _setEventListeners() {
    // Set event listeners for 'Delete Button' and 'Checkbox'
    this.deleteBtn.addEventListener("click", () => {
      this.todoEl.remove();
    });

    this.checkboxEl.addEventListener("click", () => {});
  }

  getView() {
    // use class instances
    const todoElement = document
      .querySelector(this.selector)
      .content.cloneNode(true);
    const todoNameEl = todoElement.querySelector(".todo__name");
    const todoCheckboxEl = todoElement.querySelector(".todo__completed");
    const todoLabel = todoElement.querySelector(".todo__label");
    const todoDate = todoElement.querySelector(".todo__date");
    const todoDeleteBtn = todoElement.querySelector(".todo__delete-btn");

    // set certain elements as class properties for eventListener access
    this.todoEl = todoElement.querySelector(".todo");
    this.deleteBtn = todoDeleteBtn;
    this.checkboxEl = todoCheckboxEl;

    todoNameEl.textContent = this.name;
    todoCheckboxEl.checked = this.completed;

    todoCheckboxEl.id = `todo-${this.id}`;
    todoLabel.setAttribute("for", `todo-${this.id}`);

    const dueDate = new Date(this.date);
    if (!isNaN(dueDate)) {
      todoDate.textContent = `Due:     ${dueDate.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}`;
    }

    this._setEventListeners();

    return todoElement;
    // Testing only below
    // return todoDeleteBtn;
  }
}
