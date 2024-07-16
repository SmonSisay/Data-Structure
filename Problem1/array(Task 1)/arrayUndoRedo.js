class UndoRedo {
  constructor() {
    this.undoStack = [];
    this.redoStack = [];
  }

  doAction(write) {
    this.undoStack.push(write);
    this.redoStack = [];
    console.log(`written: ${write}`);
  }

  undo() {
    if (this.undoStack.length === 0) return;

    const action = this.undoStack.pop();
    this.redoStack.push(action);

    console.log(`> Undo (Ctrl + Z): ${action}`);
  }

  redo() {
    if (this.redoStack.length === 0) return;

    const action = this.redoStack.pop();
    this.undoStack.push(action);

    console.log(`> Redo (Ctrl + Y): ${action}`);
  }

  printCurrent() {
    console.log('------------------------------------');
    console.log(`# Current: ${this.undoStack.toString()}`);
    console.log('------------------------------------');
  }

  getEl(index) {
    if (this.undoStack.length === 0 || this.undoStack.length - 1 < index) {
      console.log('Nothing to get here...:(');
      return;
    }

    console.log(`GOT A MATCH: '${this.undoStack[index]}' at index ${index}`);
  }
}

const undoRedo = new UndoRedo();
undoRedo.doAction('i');
undoRedo.doAction(' ');
undoRedo.doAction('w');
undoRedo.doAction('i');
undoRedo.doAction('l');
undoRedo.doAction('l');

undoRedo.printCurrent();

undoRedo.undo();
undoRedo.undo();

undoRedo.printCurrent();

undoRedo.redo();
undoRedo.redo();

undoRedo.printCurrent();

undoRedo.getEl(4);
