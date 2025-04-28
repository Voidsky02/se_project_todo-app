export class Todo {
  constructor(data, selector, id) {
    this._id = id;
    this._name = data.name;
    this._completed = data.completed;
    this._date = data.date;
    this._selector = selector;
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
    const todoElement = this._selector.content.cloneNode(true);
    const todoNameEl = todoElement.querySelector(".todo__name");
    const todoCheckboxEl = todoElement.querySelector(".todo__completed");
    const todoLabel = todoElement.querySelector(".todo__label");
    const todoDate = todoElement.querySelector(".todo__date");
    const todoDeleteBtn = todoElement.querySelector(".todo__delete-btn");

    // set certain elements as class properties for eventListener access
    this.todoEl = todoElement.querySelector(".todo");
    this.deleteBtn = todoDeleteBtn;
    this.checkboxEl = todoCheckboxEl;

    todoNameEl.textContent = this._name;
    todoCheckboxEl.checked = this._completed;

    todoCheckboxEl.id = `todo-${this._id}`;
    todoLabel.setAttribute("for", `todo-${this._id}`);

    const dueDate = new Date(this._date);
    if (!isNaN(dueDate)) {
      todoDate.textContent = `Due:     ${dueDate.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}`;
    }

    this._setEventListeners();

    return todoElement;
  }
}
