import { validationConfig } from "../utils/constants";

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
  constructor(config, formElement) {
    this.formElement = formElement;
    // validationConfig below
    this.formSelector = config.formSelector;
    this.inputSelector = config.inputSelector;
    this.SubmitButtonSelector = config.submitButtonSelector;
    this.errorClass = config.errorClass;
    this.inputErrorClass = config.inputErrorClass;
    this.inactiveButtonClass = config.inactiveButtonClass;
  }

  _checkInputValidity() {
    // const checkInputValidity = (formElement, inputElement, settings) => {
    //   if (!inputElement.validity.valid) {
    //     showInputError(
    //       formElement,
    //       inputElement,
    //       inputElement.validationMessage,
    //       settings
    //     );
    //   } else {
    //     hideInputError(formElement, inputElement, settings);
    //   }
    // };
  }

  _toggleButtonState() {
    // const toggleButtonState = (inputList, buttonElement, settings) => {
    //   if (hasInvalidInput(inputList)) {
    //     buttonElement.classList.add(settings.inactiveButtonClass);
    //     buttonElement.disabled = true;
    //   } else {
    //     buttonElement.classList.remove(settings.inactiveButtonClass);
    //     buttonElement.disabled = false;
    //   }
    // };
  }

  _setEventListeners() {
    // const setEventListeners = (formElement, settings) => {
    //   const inputList = Array.from(
    //     formElement.querySelectorAll(settings.inputSelector)
    //   );
    //   const buttonElement = formElement.querySelector(
    //     settings.submitButtonSelector
    //   );
    //   toggleButtonState(inputList, buttonElement, settings);
    //   inputList.forEach((inputElement) => {
    //     inputElement.addEventListener("input", () => {
    //       checkInputValidity(formElement, inputElement, settings);
    //       toggleButtonState(inputList, buttonElement, settings);
    //     });
    //   });
    // };
  }

  enableValidation() {
    // const enableValidation = (settings) => {
    //   const formElement = document.querySelector(settings.formSelector);
    //   formElement.addEventListener("submit", (evt) => {
    //     evt.preventDefault();
    //   });
    //   setEventListeners(formElement, settings);
    // };
  }
}
