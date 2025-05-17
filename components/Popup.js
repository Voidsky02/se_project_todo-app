class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
    }

    open() {
        // open the popup 
        this._popupElement.classList.add("popup_visible");

        // add escape close func on opening
        document.addEventListener('keydown', this._handleEscapeClose);
    }

    close() {
        // close the popup
        this._popupElement.classList.remove("popup_visible");

        // remove escape func when closing, no matter the method
        document.removeEventListener('keydown', this._handleEscapeClose);
    }

    _handleEscapeClose = (event) => {
        if (event.key === "Escape") {
            this.close();
        }
    }

    setEventListeners() {
        /* adds a click event listener to the close icon of the popup. 
        The modal window should also close when users click on the 
        shaded area around the form. */

        // Combined close icon & overlay event listeners into one event listener as code reviewer suggested
        this._popupElement.addEventListener("mousedown", (event) => {
            if (event.target.classList.contains("popup") || event.target.classList.contains("popup__close")) {
                this.close();
            }
        })
    }
}

export default Popup;