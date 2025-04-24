import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { initialTodos, validationConfig } from "../utils/constants.js";
import { Todo } from "../components/Todo.js";
import { FormValidator } from "../components/FormValidator.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopup.querySelector(".popup__form");
const addTodoCloseBtn = addTodoPopup.querySelector(".popup__close");
const todoTemplate = document.querySelector("#todo-template");
const todosList = document.querySelector(".todos__list");

const openModal = (modal) => {
  modal.classList.add("popup_visible");
};

const closeModal = (modal) => {
  modal.classList.remove("popup_visible");
};

addTodoButton.addEventListener("click", () => {
  openModal(addTodoPopup);
});

addTodoCloseBtn.addEventListener("click", () => {
  closeModal(addTodoPopup);
});

// This is to add new Custom task with the Add Todo button
addTodoForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = evt.target.name.value;

  const dateInput = evt.target.date.value;

  // Create a date object and adjust for timezone
  const date = new Date(dateInput);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

  const values = { name, date };
  const todo = new Todo(values, todoTemplate, uuidv4());
  const readyTodoElement = todo.getView();
  todosList.append(readyTodoElement);
  // Reset form fields after submission v
  validateAddTodoForm.resetValidation();
  closeModal(addTodoPopup);
});

// This sets up the initial default Todo's
initialTodos.forEach((item) => {
  const todo = new Todo(item, todoTemplate, uuidv4());
  const readyTodoEl = todo.getView();
  todosList.append(readyTodoEl);
});

// Create an instance of the FormValidator class and call its
// enableValidation() method.
const validateAddTodoForm = new FormValidator(validationConfig, addTodoForm);
validateAddTodoForm.enableValidation();
