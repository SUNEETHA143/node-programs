
/*
 * Linked List node with item object and next pointer to another node
 */

class StackNode {
    // constructor
    constructor() {
        this.item = null;
	this.next = null;
    }
}



class LinkedStack {

    
    constructor() {
        this.head = null;
        this.size = null;
    }
	
push(item) {
		var node = new StackNode();
		node.item = item;
		node.next = null;
		if(this.size < 1 && this.head === null){
			this.head = node;
			this.head.next = null;
			this.size = 1;
		}else{
			var current = this.head;
			while(current.next !== null){
				current = current.next;
			}
			current.next = node;
			this.size += 1;
		}
	}
	
	pop(){
		var current = this.head;
		if(this.size === 0){
			return;
		}
		if(this.size === 1){
			this.head = null;
			this.size = 0;
			return current;
		}
		var prev = current;  // 543
		while(current.next !== null){
				prev = current;
				current = current.next;
		}
		prev.next = null;
		this.size -= 1;
		return current;
    }
    
    indexOf(element) {
        var count = 0;
        var current = this.head;

        // iterae over the list
        while (current != null) {
            // compare each element of the list
            // with given element
            if (current.element === element)
                return count;
            count++;
            current = current.next;
        }

        // not found
        return -1;
    }

    removeFrom(index) {
        if (index > 0 && index > this.size)
            return -1;
        else {
            var curr, prev, it = 0;
            curr = this.head;
            prev = curr;

            // deleting first element
            if (index === 0) {
                this.head = curr.next;
            } else {
                // iterate over the list to the
                // position to removce an element
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                // remove the element
                prev.next = curr.next;
            }
            this.size--;

            // return the remove element
            return curr.element;
        }
    }
	
	// Function to check if stack is empty
	isStackEmpty (){
		return (this.size < 1) ? true : false;
	}
	
	// Function to get top item of the stack
	stackTop (){
		var current = this.head;
		if(this.size > 0 && this.head !== null){
			while(current.next !== null){
				current = current.next;
			}
            //return current.item;
            
            console.log(current.item);
        }
        else{
			console.log("There is no item in the stack");
			
		}
	}
	
	printStack(){
		var current = this.head;
		while(current.next !== null){
			console.log("Item "+current.item + " is on the stack.");
			current = current.next;
		}
		console.log("Item "+current.item + " is on the stack.");
	}
	
}


/*
var stack = new LinkedStack();
console.log(stack.isStackEmpty());
/*var top = stack.stackTop();
console.log(top.item);
stack.stackTop()
stack.pushToStack("Test1");
//console.log(stack.stackTop().item);
stack.stackTop()
stack.pushToStack("Test2");
stack.pushToStack("Test3");
stack.printStack();
var poped = stack.popFromStack();
console.log("Popped item is: " + poped.item);
stack.printStack();*/

module.exports = LinkedStack;