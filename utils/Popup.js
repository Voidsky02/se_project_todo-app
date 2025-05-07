class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
    }

    open() {
        // open the popup 
        /* The open() method should be called in the preexisting event
        handlers in index.js. */

        this._popupSelector.classList.add("popup_visible");
    }

    close() {
        // close the popup
        this._popupSelector.classList.remove("popup_visible");
    }

    _handleEscapeClose() {
        /* stores the logic for closing the popup by pressing 
        the Escape key. */
        this._popupSelector.addEventListner("keydown", (event) => {
            if (event.key === "Escape") {
                this.close();
            }
        })
    }

    setEventListeners() {
        /* adds a click event listener to the close icon of the popup. 
        The modal window should also close when users click on the 
        shaded area around the form. */
        
        // below might not work because this._popupSelector is probably a string (will fix later)
        this._popupSelector.querySelector(".popup__close").addEventListner("click", this.close);
    }
}

export default Popup;