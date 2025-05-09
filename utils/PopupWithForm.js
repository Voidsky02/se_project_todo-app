// child to Popup Class...

import Popup from './Popup.js';

class PopupWithForm extends Popup {
    constructor(popupSelector, callbackFunction) {
        super(popupSelector);
        this._callbackFunction = callbackFunction;
    }

    _getInputValues() {
        /* collects data from all the input fields and returns it as an 
        object. This data should then be passed to the 
        submission handler as an argument. */

        let valuesObject = {};

        const inputValues = this._popupSelector.querySelectorAll(".popup__input");

        inputValues.forEach((input) => {
            // add the func of transforming date to the method
            if (input.name === "date") {
                const date = new Date(input.date.value);
                date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
                valuesObject[input.name] = date;
            }

            valuesObject[input.name] = input.value;
        })

        return valuesObject;
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
            this._callbackFunction(this._getInputValues);
        })
    }
}


// 
// 
/* Testing Below, transfer to appropiate place once confirmed working */

import { addTodoForm } from '../pages/index.js';

const TestTest = new PopupWithForm()