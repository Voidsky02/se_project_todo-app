// child to Popup Class...

import Popup from './Popup.js';

class PopupWithForm extends Popup {
    constructor(popupSelector, {callbackFunction}) {
        super(popupSelector);
        this._callbackFunction = callbackFunction;
        // make this a property? instead of inside _getInputValues method
        this._inputValues = this._popupSelector.querySelectorAll(".popup__input");
    }

    _getInputValues() {
        /* collects data from all the input fields and returns it as an 
        object. This data should then be passed to the 
        submission handler as an argument. */


        // create empy object, have forEach create new object with data

        let emptyObject = {};

        // I think the issue is this forEach method is not creating m
        this._inputValues.forEach((input) => {
            if (input.name === "date") {
                const date = new Date(input.value);
                date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
                emptyObject[input.name] = date;
            } else {
                emptyObject[input.name] = input.value;
            }
        })

        return emptyObject;
    }

    setEventListeners() {
        // we will override the parents method v
        super.setEventListeners();

        /* The setEventListeners() method of the PopupWithForm class 
        should add a submit event listener to the form and call the 
        setEventListeners() method of the parent class. */
        this._popupSelector.addEventListener("submit", (event) => {
            event.preventDefault();

            // pass the valuesObject to submission handler as argument (we will define _callbackFunction)
            // when declaring our first actual PopupWithForm Class, and we weill cater the func 
            // to specifically making new Todo items.
            this._callbackFunction(this._getInputValues());

            this.close();

        })
    }
}


// 
// 
/* Testing Below, transfer to appropiate place once confirmed working */

import { addTodoForm, rendererNewTodo, todoTemplate, addTodoButton } from '../pages/index.js';
import {Section} from "../utils/Section.js";
import {Todo} from "../components/Todo.js";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";


// had to make the 'popupSelector' for the PopupWithForm class and ID selector temp but will look into fixing
// 
// problem is Section renderers by iterating over an ARRAY of OBJECTS but our PopupWithForms '_getInputValues'
// method only returns a SINGLE OBJECT with all the data to create ONE Todo. So we need to figure out
// how to fix this
export const TestTest = new PopupWithForm("#add-todo-popup", {callbackFunction: rendererNewTodo});

// I think the problem is NewTodosData is not defined anywhere
// TestTest._callbackFunction();
// TestTest._getInputValues();

TestTest.setEventListeners();


