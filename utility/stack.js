
class Stack {

    // Array is used to implement stack
    constructor() {
        this.items = [];
    }

    // push function
    push(element) {

        this.items.push(element);

    }
    // pop function
    pop() {

        if (this.items.length == 0)
            return "Underflow";
        return this.items.pop();
    }

    // isEmpty function
    isEmpty() {
        // return true if stack is empty
        return this.items.length == 0;
    }
    // peek function
    peek() {
        // return the top most element from the stack
        // but does'nt delete it.
        return this.items[this.items.length - 1];
    }
    // printStack function
    printStack() {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
}

module.exports = Stack;