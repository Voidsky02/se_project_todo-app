export class FormValidator {
  constructor(settings, formElement) {
    this.settings = settings;
    this.formElement = formElement;
  }

  _showInputError(inputElement) {
    const errorElementId = `#${inputElement.id}-error`;
    const errorElement = this.formElement.querySelector(errorElementId);
    inputElement.classList.add(this.settings.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this.settings.errorClass);
  }

  _hideInputError(inputElement) {
    const errorElementId = `#${inputElement.id}-error`;
    const errorElement = this.formElement.querySelector(errorElementId);
    inputElement.classList.remove(this.settings.inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this.settings.errorClass);
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput() {
    const inputList = this.formElement.querySelectorAll(
      this.settings.inputSelector
    );
    const inputArray = Array.from(inputList);

    return inputArray.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState() {
    const buttonElement = this.formElement.querySelector(
      this.settings.submitButtonSelector
    );
    if (this._hasInvalidInput()) {
      buttonElement.classList.add(this.settings.inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(this.settings.inactiveButtonClass);
      buttonElement.disabled = false;
    }
  }

  _setEventListeners() {
    const inputList = Array.from(
      this.formElement.querySelectorAll(this.settings.inputSelector)
    );
    const buttonElement = this.formElement.querySelector(
      this.settings.submitButtonSelector
    );
    this._toggleButtonState();
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this.formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    this._setEventListeners();
  }

  resetValidation() {
    this.formElement.reset();

    this._toggleButtonState();
  }
}
