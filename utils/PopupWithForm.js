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

        const inputValues = this._popupSelector.querySelectorAll(".popup__input");

        let valuesObject = {};

        inputValues.forEach((input) => {
            valuesObject[input.name] = input.value;
        })
    }

    setEventListeners() {
        // we will override the parents method v
        super.setEventListeners();

        /* The setEventListeners() method of the PopupWithForm class 
        should add a submit event listener to the form and call the 
        setEventListeners() method of the parent class. */
        this._popupSelector.addEventListener("submit", (event) => {
            event.preventDefault();
            callbackFunction;
        })
    }
}