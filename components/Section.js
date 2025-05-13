export class Section {
    constructor({items, renderer, containerSelector}) {
        /* items = array of data to add to the page
           renderer = func that creates/adds single item to page
           containerSelector = CSS class selector for el where youll add 
           todo elements
        */
       this._items = items;
       this._renderer = renderer;
    //    believe making this an actual DOM element makes things easier
       this._containerSelector = document.querySelector(containerSelector);
    }

    renderItems() {
        /*renders all elements on the page. It should iterate through 
        the items array and call the renderer() function on each item.
        This method should be called once on page load. */


        /* This will not work with our PopupWithForm Classes _getInputValues method because this 
        iterates over an ARRAY of objects, not one SINGLE object like _getInputValues returns.
        So we have to figure out a way to render our single object of new todo data after we hit 
        the submit button on the form  */
        this._items.forEach((item) => {
            // believe i have to create var so i can add to dom w/ addItem
            const newElement = this._renderer(item);
            // This adds it to the dom?
            this.addItem(newElement);
        })
    }

    addItem(item) {
        /* takes a DOM element and adds it to the container. This method
         should be called when adding an individual card to the DOM */
        this._containerSelector.append(item);
    }
}

