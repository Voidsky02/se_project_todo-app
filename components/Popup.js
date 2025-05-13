class Popup {
    constructor(popupSelector) {
        this._popupSelector = document.querySelector(popupSelector);
    }

    open() {
        // open the popup 
        this._popupSelector.classList.add("popup_visible");

        // use handleEscapeClose() to add escape key func
        this._handleEscapeClose();
    }

    close() {
        // close the popup
        this._popupSelector.classList.remove("popup_visible");

        // remove handleEscapeKey so it isnt checking keys all the time
    }

    _handleEscapeClose() {
        /* stores the logic for closing the popup by pressing 
        the Escape key. */

        // func for checking if key is Escape and what to do with it
        const isKeyEscape = (event) => {
            if (event.key === "Escape") {
                this.close();
                console.log("test");
                removeEscapeKeyListener();
            }
        }

        // create func for removing Escape key event listener, put 
        // this in the isKeyEscape func
        const removeEscapeKeyListener = () => {
            document.removeEventListener("keydown", isKeyEscape);
        }

        // going to call this on opening modals
        document.addEventListener("keydown", isKeyEscape);

    }

    setEventListeners() {
        /* adds a click event listener to the close icon of the popup. 
        The modal window should also close when users click on the 
        shaded area around the form. */

        // Add Event Listener to close icon
        this._popupSelector.querySelector(".popup__close").addEventListener("click", () => {
            this.close();
        });

        // Code for closing modal when outside area is clicked
        this._popupSelector.addEventListener("mousedown", (event) => {
            if (event.target.classList.contains("popup")) {
                this.close();
            }
        })
    }
}

export default Popup;