// child to Popup Class...

import Popup from './Popup.js';

class PopupWithForm extends Popup {
    constructor(popupSelector, {callbackFunction}) {
        super(popupSelector);
        this._callbackFunction = callbackFunction;
        // List of all input methods as a property of the object for ease of access
        this._inputValues = this._popupSelector.querySelectorAll(".popup__input");
    }

    _getInputValues() {
        /* collects data from all the input fields and returns it as an 
        object. This data should then be passed to the 
        submission handler as an argument. */


        // create empy object, have forEach create new object with data

        let emptyObject = {};

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
        // we will override the parents method
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

export default PopupWithForm;