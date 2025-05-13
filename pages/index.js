import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { initialTodos, validationConfig } from "../utils/constants.js";
import {Section} from "../utils/Section.js";
import { Todo } from "../components/Todo.js";
import { FormValidator } from "../components/FormValidator.js";
import PopupWithForm from "../utils/PopupWithForm.js";
import TodoCounter from "../utils/TodoCounter.js";


// temp export, delete later
export const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = document.querySelector("#add-todo-popup");
// temp export, delete later
export const addTodoForm = document.forms["add-todo-form"];
export const todoTemplate = document.querySelector("#todo-template");
const todosList = document.querySelector(".todos__list");

// TodoCounter Callback Function
function handleCheck(completed) {
  experiment.updateCompleted(completed);
}

// create func to add to renderer: parameter when making new Todo items so i dont repeate myself
// temp export????
const rendererNewTodo = (cardItem) => {
  const todo = new Todo(cardItem, todoTemplate, uuidv4(), handleCheck);
  const readyTodoEl = todo.getView();
  // TEMP LINE BELOW
  todosList.append(readyTodoEl);
  //
  return readyTodoEl;
}

// 
// 
/* This sets up the initial default Todo's.
   Renderer is defined when creating a new Section instance, not when defining
   the Section class itself. */
const testRun = new Section({items: initialTodos, renderer: rendererNewTodo, containerSelector: ".todos__list"})

testRun.renderItems()

// 
// 
// Create an instance of the FormValidator class and call its
// enableValidation() method.
const validateAddTodoForm = new FormValidator(validationConfig, addTodoForm);
validateAddTodoForm.enableValidation();


//
// 
// Initiating AddTodo PopopWithForm class - calling its various methods below
const AddTodoPopupWithForm = new PopupWithForm("#add-todo-popup", {callbackFunction: rendererNewTodo});

AddTodoPopupWithForm.setEventListeners();

addTodoButton.addEventListener("click", () => {
  AddTodoPopupWithForm.open();
});


// 
// 
// 
// testing for TodoCounter below
// import TodoCounter from "../utils/TodoCounter.js";

// experiment._todos.forEach((todo) => {
//   experiment.updateCompleted(todo);
// })

const experiment = new TodoCounter(initialTodos, ".counter__text");

// experiment._todos.forEach((todo) => {
//   experiment.updateCompleted(todo.completed === true);
// })

// create a function that takes all todo elements, adds eventListeners to every checkbox and delete button, 
// and calls experiment.updateCompleted for checkboxes, and 
// experiment.updateTotal for delete buttons

experiment._updateText();

console.log(experiment._completed);