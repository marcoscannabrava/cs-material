class Node {
  constructor(value, index = null) {
    this.value = value;
    this.next = null;
  }
}

// ---------------------- STACKS ----------------------
class Stack {
  constructor(){
    this.storage = {};
    this.count = 0;
  }

  push(item) {
    this.storage[this.count] = new Node(item, this.count)
    this.count++;
  }

  pop() {
    const popped = this.storage[this.count - 1];
    delete this.storage[this.count - 1];
    this.count--;
    return popped;
  }
}


// ---------------------- LINKED LIST ----------------------
class LinkedList {
  constructor(){
    this.storage = {};
    this.length = 0;        // length - integer  - How many elements in the list
    this.head = this.tail = null;
  }
  
  // push   - function - accepts a value and adds to the end of the list
  push(item) {
    if (this.tail) {
      this.tail.next = new Node(item);
      this.tail = this.tail.next;
    } else {
      this.head = this.tail = new Node(item);
    }
    this.length++;
  }
  
  // pop    - function - removes the last value in the list and returns it
  pop() {
    const popped = this.tail;
    var prev = this.head;
    while (!prev.next === popped) prev = prev.next;
    this.tail = prev;
    this.length--;
    return popped;
  }
  
  // get    - function - accepts an index and returns the value at that position
  get(index) {
    var node = this.head;
    for (let i = 0; i < this.length; i++) {
      if (i === index) return node;
      node = node.next;
    }
  }
  
  // delete - function - accepts an index, removes value from list, collapses, and returns removed value
  delete(index) {
    if (index >= this.length) return undefined;

    var node = this.head;
    for (let i = 0; i < this.length; i++) {
      if ((i + 1) === index) {
        const deleted = node.next;
        node.next = node.next.next;
        this.length--;
        return deleted;
      }
      node = node.next;
    }
  }
}


// ---------------------- QUEUE ----------------------
class Queue extends LinkedList {
  enqueue(item) {
    this.push(item);
  }

  dequeue() {
    this.delete(head);
  }
}

// ----------- TESTING -------------
const dataStructure = new Queue;
console.log(dataStructure);
dataStructure.push('a');
console.log(dataStructure);
dataStructure.push('b');
dataStructure.push('c');
dataStructure.push('d');
console.log(dataStructure);
console.log(dataStructure.pop());
console.log(dataStructure);
