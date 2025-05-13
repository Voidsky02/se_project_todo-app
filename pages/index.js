import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { initialTodos, validationConfig } from "../utils/constants.js";
import {Section} from "../utils/Section.js";
import { Todo } from "../components/Todo.js";
import { FormValidator } from "../components/FormValidator.js";
import PopupWithForm from "../utils/PopupWithForm.js";
import TodoCounter from "../utils/TodoCounter.js";

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
  todosList.append(readyTodoEl);
  return readyTodoEl;
}

/* This sets up the initial default Todo's.
   Renderer is defined when creating a new Section instance, not when defining
   the Section class itself. */
const testRun = new Section({items: initialTodos, renderer: rendererNewTodo, containerSelector: ".todos__list"})
testRun.renderItems()

// Create an instance of the FormValidator class and call its
// enableValidation() method.
const validateAddTodoForm = new FormValidator(validationConfig, addTodoForm);
validateAddTodoForm.enableValidation();

// Initiating AddTodo PopopWithForm class - calling its various methods below
const AddTodoPopupWithForm = new PopupWithForm(addTodoPopup, {callbackFunction: rendererNewTodo}, handleSubmit);
AddTodoPopupWithForm.setEventListeners();
addTodoButton.addEventListener("click", () => {
  AddTodoPopupWithForm.open();
});

// initiate new todo counter, call _update text
const todoCounter = new TodoCounter(initialTodos, ".counter__text");
todoCounter._updateText();