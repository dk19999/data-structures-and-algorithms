class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  clear() {
    this.head = null;

    this.tail = null;

    this.length = 0;
    return this;
  }

  toArray() {
    const result = [];

    let currentNode = this.head;

    while (currentNode) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return result;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) {
      return null;
    }

    if (index === 0) {
      return this.prepend(value);
    }

    const newNode = new Node(value);

    let nodeBeforeIndex = this.head;

    for (let i = 0; i < index - 1; i++) {
      nodeBeforeIndex = nodeBeforeIndex.next;
    }

    newNode.next = nodeBeforeIndex.next;
    nodeBeforeIndex.next = newNode;

    if(index === this.length ){
      this.tail = newNode;      
    }

    this.length++;

    return this;
  }

}

const l1 = new LinkedList();

l1.append(1);

l1.append(2);

l1.insert(2, 10);

console.log(l1.toArray());
