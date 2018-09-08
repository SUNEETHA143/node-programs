class Node 
{ 

    constructor(element)
    {
        this.element = element;
        this.next = null
    }
    
} 
  
class LinkedList 
{ 
    constructor()
    {
        this.head = null;
        this.size = 0;
    }
  
    /* Takes index as argument and return data at index*/
     GetNth( index) 
    { 
        let current = this.head;  

        let count = 0; /* index of Node we are 
                          currently looking at */
        while (current != null) 
        { 
            if (count == index) 
                return current.element; 
            count++; 
            current = current.next; 
        } 
  
        /* if we get to this line, the caller was asking 
        for a non-existent element so we assert fail */
        //assert(false); 
        return 0; 
    } 
  
    /* Given a reference to the head of a list and an int, 
       inserts a new Node on the front of the list. */
     push( new_data) 
    { 
  
        /* 1. alloc the Node and put data*/
        let new_Node = new Node(new_data); 
  
        /* 2. Make next of new Node as head */
        new_Node.next = this.head; 
  
        /* 3. Move the head to point to new Node */
        this.head = new_Node; 
    } 
  
    
} 

/* Drier program to test above functions*/
function main() 
{ 
    /* Start with empty list */
    let llist = new LinkedList(); 

    /* Use push() to construct below list 
       1->12->1->4->1  */
    llist.push(1); 
    llist.push(4); 
    llist.push(1); 
    llist.push(12); 
    llist.push(1); 

    /* Check the count function */
    console.log("Element at index 1 is "+llist.GetNth(0)); 
} 

main();