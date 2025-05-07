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
    }

    setEventListeners() {
        // we will override the parents method v
        super.setEventListeners();

        /* The setEventListeners() method of the PopupWithForm class 
        should add a submit event listener to the form and call the 
        setEventListeners() method of the parent class. */
    }
}