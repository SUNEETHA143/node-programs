class Dequeue {
    // Array is used to implement a DeQueue
    constructor() {
        this.items = [];
    }
    addFront(element) {
        // adding element to the Dequeue at front
        this.items.unshift(element);
    }

    addBack(element) {
        // adding element to the Dequeue at last
        this.items.push(element);
    }

    removeFront() {
        
        if (this.isEmpty())
            return "Underflow";
        return this.items.shift();
    }

    removeBack() {
        
        if (this.items.length == 0)
            return "Underflow";
        return this.items.pop();
    }

    getElement(index) {
        // returns the element present in index from
        // the Dequeue without removing it.
        if (this.isEmpty())
            return "No elements in Queue";
        return this.items[index];
    }
    // isEmpty function
    isEmpty() {
        // return true if the Dequeue is empty.
        return this.items.length == 0;
    }
    // print DeQueue function
    printDequeue() {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }


}

module.exports = Dequeue;