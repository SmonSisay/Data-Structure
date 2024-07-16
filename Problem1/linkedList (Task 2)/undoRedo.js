const LinkedList = require("./linkedList");

class UndoRedo {
  constructor() {
    this.undoStack = new LinkedList();
    this.redoStack = new LinkedList();
  }

  // Add an action to the undo stack
  doAction(write) {
    this.undoStack.add(write);
    this.redoStack = new LinkedList(); // Clear the redo stack
    console.log(`Written: ${write}`);
  }

  // Undo the last action
  undo() {
    const action = this.undoStack.remove();
    if (action) {
      this.redoStack.add(action);
      console.log(`> Undo (Ctrl + Z): ${action}`);
    } else {
      console.log("Nothing to undo.");
    }
  }

  // Redo the last undone action
  redo() {
    const action = this.redoStack.remove();
    if (action) {
      this.undoStack.add(action);
      console.log(`> Redo (Ctrl + Y): ${action}`);
    } else {
      console.log("Nothing to redo.");
    }
  }

  // Print the current state of the undo stack
  printCurrent() {
    console.log("------------------------------------");
    console.log(`# Current: ${this.undoStack.toString()}`);
    console.log("------------------------------------");
  }

  // Access an element at a specific index in the undo stack
  getEl(index) {
    const value = this.undoStack.get(index);
    if (value !== null) {
      console.log(`GOT A MATCH: '${value}' at index ${index}`);
    } else {
      console.log("Nothing to get here...:(");
    }
  }
}

// Example usage
const undoRedo = new UndoRedo();
undoRedo.doAction("i");
undoRedo.doAction(" ");
undoRedo.doAction("w");
undoRedo.doAction("i");
undoRedo.doAction("l");
undoRedo.doAction("l");

undoRedo.printCurrent(); // print: Current: i w i l l

undoRedo.undo(); 
undoRedo.undo();

undoRedo.printCurrent(); // Should print: Current: i w i

undoRedo.redo();

undoRedo.printCurrent(); // print: Current: i w i l

undoRedo.getEl(4); // Gets an element at index 4
