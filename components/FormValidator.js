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
  }
}
