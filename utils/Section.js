class Section {
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

// below will be used for testing the class functionality. 
// Delete Later!!!!!!!!!!!!!!!!!!!!

import {initialTodos} from "./constants.js";
import {todosList, todoTemplate} from "../pages/index.js";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import {Todo} from "../components/Todo.js";

/* Remember, you define what exactly the renderer will create (Cards vs some other thing)
when CREATING the new class, not when you define the Class outline */
const testRun = new Section({items: initialTodos, renderer: (cardItem) => {
    const todo = new Todo(cardItem, todoTemplate, uuidv4());
    const readyTodoEl = todo.getView();
    return readyTodoEl;
}, containerSelector: ".todos__list"})

testRun.renderItems()



// const todo = new Todo(cardItem, todoTemplate, uuidv4());
// const readyTodoEl = todo.getView();
// ABOVE ^ actually the todo.getView will be stored in newElement i think
// this.addItem(readyTodoEl);

// I think i must add above line of code to the renderer, but still thinking
