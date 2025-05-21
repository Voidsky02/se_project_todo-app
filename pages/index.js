import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { initialTodos, validationConfig } from "../utils/constants.js";
import {Section} from "../components/Section.js";
import { Todo } from "../components/Todo.js";
import { FormValidator } from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from "../components/TodoCounter.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = "#add-todo-popup";
const addTodoForm = document.forms["add-todo-form"];
const todoTemplate = document.querySelector("#todo-template");
const todosList = document.querySelector(".todos__list");

// TodoCounter Callback Function
function handleCheck(completed) {
  todoCounter.updateCompleted(completed);
}

// TodoCounter delete btns total updater
function handleDelete(completed) {
  if (completed) {
    todoCounter.updateCompleted(false);
  }
  todoCounter.updateTotal(false);
}

// TodoCounter submit events total todo's updater
function handleSubmit() {
    todoCounter.updateTotal(true);
}

// create func to add to renderer: parameter when making new Todo items so i dont repeate myself
const rendererNewTodo = (cardItem) => {
  const todo = new Todo(cardItem, todoTemplate, uuidv4(), handleCheck, handleDelete);
  const readyTodoEl = todo.getView();
  return readyTodoEl;
}

/* This sets up the initial default Todo's.
   Renderer is defined when creating a new Section instance, not when defining
   the Section class itself. */
const initialTodosSection = new Section({items: initialTodos, renderer: rendererNewTodo, containerSelector: ".todos__list"})

initialTodosSection.renderItems()

// Create an instance of the FormValidator class and call its
// enableValidation() method.
const validateAddTodoForm = new FormValidator(validationConfig, addTodoForm);

validateAddTodoForm.enableValidation();

// Initiating AddTodo PopopWithForm class - calling its various methods below
const addTodoPopupWithForm = new PopupWithForm(addTodoPopup, {callbackFunction: (inputList) => {
  let newTodoMarkup = rendererNewTodo(inputList);
  let addTodoFormSection = new Section({items: newTodoMarkup, renderer: "", containerSelector: ".todos__list"});
  addTodoFormSection.addItem(newTodoMarkup);
}}, handleSubmit);

addTodoPopupWithForm.setEventListeners();


addTodoButton.addEventListener("click", () => {
  addTodoPopupWithForm.open();
});

// initiate new todo counter, call _update text
const todoCounter = new TodoCounter(initialTodos, ".counter__text");

todoCounter._updateText();