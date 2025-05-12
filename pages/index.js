import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { initialTodos, validationConfig } from "../utils/constants.js";
import {Section} from "../utils/Section.js";
import { Todo } from "../components/Todo.js";
import { FormValidator } from "../components/FormValidator.js";
import { PopupWithForm } from "../utils/PopupWithForm.js";


// temp export, delete later
export const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = document.querySelector("#add-todo-popup");
// temp export, delete later
export const addTodoForm = document.forms["add-todo-form"];
const addTodoCloseBtn = addTodoPopup.querySelector(".popup__close");
// temp export delete later
export const todoTemplate = document.querySelector("#todo-template");
const todosList = document.querySelector(".todos__list");

// delete this later after initializing Popup Classes
const openModal = (modal) => {
  modal.classList.add("popup_visible");
};

// delete this later after initializing Popup Classes
const closeModal = (modal) => {
  modal.classList.remove("popup_visible");
};

// 
// 
// TEST TO SEE IF TESTTEST works WHEN WITH THIS EVENT LISTENER
// import {TestTest} from "../utils/PopupWithForm.js";
// open() method must be used from Popup Class or its child
// 
// addTodoButton.addEventListener("click", () => {
//   openModal(addTodoPopup);
// });

// close() method must be used from Popup Class or its child
// addTodoCloseBtn.addEventListener("click", () => {
//   closeModal(addTodoPopup);
// });

// 
// 
// 
// This is to add new Custom task with the Add Todo button
// delete later?????
// addTodoForm.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   const name = evt.target.name.value;

//   const dateInput = evt.target.date.value;

//   // Create a date object and adjust for timezone
//   const date = new Date(dateInput);
//   date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

//   const values = { name, date };
//   renderTodo(values);
//   // Reset form fields after submission v
//   validateAddTodoForm.resetValidation();
//   closeModal(addTodoPopup);
// });
// 
// 
// 
// 

// create func to add to renderer: parameter when making new Todo items so i dont repeate myself
// temp export????
export const rendererNewTodo = (cardItem) => {
  const todo = new Todo(cardItem, todoTemplate, uuidv4());
  const readyTodoEl = todo.getView();
  // TEMP LINE BELOW
  todosList.append(readyTodoEl);
  // TEMP LINE ABOVE
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


// 
// 
// 
// Initiating AddTodo PopopWithForm class - calling its various methods below
const AddTodoPopupFormClass = new PopupWithForm("#add-todo-popup", {callbackFunction: rendererNewTodo});

AddTodoPopupFormClass.setEventListeners();

addTodoButton.addEventListener("click", () => {
  AddTodoPopupFormClass.open();
});

