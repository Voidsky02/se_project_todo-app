import { Todo } from "../components/Todo.js";
import { initialTodos } from "../utils/constants.js";

class TodoCounter {
  // todos should be the array of initial todos
  // selector is the selector for the counter text element
  constructor(todos, selector) {
    this._todos = todos;
    this._selector = selector;
    // select the appropriate element
    this._element = 
    // number of completed todos
    this._completed = this._todos.filter((object) => {object.completed});
    // the total number of todos  document
    this._total = this._todos.length;
  }
  
  // Call this when a checkbox is clicked, and when a completed
  // to-do is deleted.
    updateCompleted = (increment) => {
    // if increment is true, add 1 to this._completed. Otherwise,  
    // subtract 1. In either case, call the method to update   
    // the text content.
    if (increment) {
        this._completed += 1;
    } else {
        this._completed -= 1;
    }

  };

  // Call this when a to-do is deleted, or when a to-do is   
  // created via the form. 
  updateTotal = (increment) => {
    // if increment is true, add 1 to this._total. Otherwise, 
    // subtract 1. In either case, call the method to update the  
    // text content.  
    if (increment) {
        this._total += 1;
    } else {
        this._total -= 1;
    }

  };

  // Call the method to update the text content
  _updateText() {
    // Sets the text content of corresponding text element.  
    // Call this in the constructor, and whenever the counts get updated.
    this._element.textContent = `Showing ${this._completed} out of ${this._total} completed`;
  }
}

export default TodoCounter;

// TESTING BELOW, DELETE LATER:
const experiment = new TodoCounter(initialTodos, ".counter__text");

// console.log(experiment._completed);