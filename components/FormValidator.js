import { validationConfig } from "../utils/constants.js";

// Delete later (I would like to see the classes & selectors)
// const validationConfig = {
//     formSelector: ".popup__form",
//     inputSelector: ".popup__input",
//     submitButtonSelector: ".popup__button",
//     errorClass: "popup__error_visible",
//     inputErrorClass: "popup__input_type_error",
//     inactiveButtonClass: "button_disabled",
// };

export class FormValidator {
  constructor(settings, formElement) {
    this.settings = settings;
    this.formElement = formElement;
  }

  _showInputError(inputElement) {
    // const showInputError = (inputElement, errorMessage) => {
    //   const errorElementId = `#${inputElement.id}-error`;
    //   const errorElement = this.formElement.querySelector(errorElementId);
    //   inputElement.classList.add(this.settings.inputErrorClass);
    //   errorElement.textContent = inputElement.validationMessage;
    //   errorElement.classList.add(this.settings.errorClass);
    // };
  }

  _hideInputError(inputElement) {
    // const showInputError = (inputElement, errorMessage) => {
    //   const errorElementId = `#${inputElement.id}-error`;
    //   const errorElement = this.formElement.querySelector(errorElementId);
    //   inputElement.classList.add(this.settings.inputErrorClass);
    //   errorElement.textContent = inputElement.validationMessage;
    //   errorElement.classList.add(this.settings.errorClass);
    // };
  }

  _checkInputValidity(inputElement) {
    // const checkInputValidity = (formElement, inputElement, settings) => {
    //   if (!inputElement.validity.valid) {
    //     showInputError(inputElement);
    //   } else {
    //     hideInputError(inputElement);
    //   }
    // };
  }

  // below may need work in my selector...
  _hasInvalidInput() {
    // const inputList = this.formElement.querySelectorAll(this.settings.inputSelector);
    //   return inputList.some((inputElement) => {
    //     return !inputElement.validity.valid;
    //   });
    // };
  }

  _toggleButtonState() {
    // const toggleButtonState = (inputList, buttonElement, settings) => {
    // delete above ^
    //
    // const buttonElement = this.formElement.querySelector(this.settings.submitButtonSelector);
    //   if (this._hasInvalidInput()) {
    //     buttonElement.classList.add(this.settings.inactiveButtonClass);
    //     buttonElement.disabled = true;
    //   } else {
    //     buttonElement.classList.remove(this.settings.inactiveButtonClass);
    //     buttonElement.disabled = false;
    //   }
    // };
  }

  _setEventListeners() {
    // const setEventListeners = (formElement, settings) => {
    // delete above ^
    //
    //   const inputList = Array.from(
    //     this.formElement.querySelectorAll(this.settings.inputSelector)
    //   );
    //   const buttonElement = this.formElement.querySelector(
    //     this.settings.submitButtonSelector
    //   );
    //   toggleButtonState();
    //   inputList.forEach((inputElement) => {
    //     inputElement.addEventListener("input", () => {
    //       checkInputValidity(inputElement);
    //       toggleButtonState();
    //     });
    //   });
    // };
  }

  enableValidation() {
    // const enableValidation = (settings) => {
    //   const formElement = document.querySelector(settings.formSelector);
    //
    // delete above ^ saving for now just in case
    //
    //   this.formElement.addEventListener("submit", (evt) => {
    //     evt.preventDefault();
    //   });
    //   setEventListeners();
    // };
  }
}
