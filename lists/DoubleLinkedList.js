class LinkedList {
 head = null;
 size = 0;

 createNode = (element) => ({element, next: null});

 getNodeAt(index) {
  if(index < 0 || index > this.size - 1 || index === undefined) return null;

  if(index === 0) return this.head;

  let current = this.head;

  for(let i = 0; i < index; i++) {
   current = current.next
  }

  return current;
 }

 push(element) {
  let node = this.createNode(element);

  if(this.head == null) {
   this.head = node;
  } else {
   let current = this.getNodeAt(this.size - 1);
   current.next = node;
  }

  this.size++;
  return this.size;
 }

 insert(element, index = 0) {
  if(index < 0 || index > this.size - 1 || index === undefined) return false;

  let node = this.createNode(element);

  if(index === 0) {
   node.next = this.head;
   this.head = node;
  } else {
   let previous = this.getNodeAt(index - 1);
   node.next = previous.next;
   previous.next = node;
  }

  this.size++;
  return true;
 }

 remove(index = 0) {
  if(index < 0 || index > this.size - 1 || index === undefined) return false;

  let removedNode = this.head;

  if(index === 0) {
   this.head = removedNode.next;
  }
  else {
   let previous = this.getNodeAt(index - 1);
   removedNode = previous.next;
   previous.next = removedNode.next;
  }

  this.size--;
  return true;
 }

 print() {
  let arr = [];

  if(this.size) {
   let current = this.head;

   for(let i = 0; i < this.size; i++) {
    arr.push(current);
    current = current.next;
   }
  }

  return arr;
 }

 toString() {
  let str = '';

  if(this.size) {
   str += this.head.element;
   let current = this.head;

   for(let i = 0; i < this.size -1; i++) {
    current = current.next;
    str += `,${current.element}`
   }
  }

  return str;
 }
}

class DoubleLinkedList extends LinkedList {
 tail = null;

 createNode = (element) => ({element, next: null, prev: null});

 push(element) {
  let node = this.createNode(element);

  if(this.head == null) {
   this.head = node;
  } else {
   let current = this.getNodeAt(this.size - 1);
   current.next = node;
   node.prev = current;
  }

  this.tail = node;

  this.size++;
  return this.size;
 }

 insert(element, index = 0) {
  if(index < 0 || index > this.size - 1 || index === undefined) return false;

  let node = this.createNode(element);

  if(index === 0) {
   if(this.head) {
    this.head.prev = node;
    node.next = this.head;
   }
   else {
    this.tail = null;
   }
   this.head = node;
  } else if (index === this.size - 1) {
   this.tail.next = node;
   node.prev = this.tail;
   this.tail = node;
  } else {
   let current = this.getNodeAt(index);
   let prev = current.prev;

   current.prev = node;
   prev.next = node;

   node.next = current;
   node.prev = prev;
  }

  this.size++;
  return true;
 }

 remove(index = 0) {
  if(index < 0 || index > this.size - 1 || index === undefined) return false;

  let removedNode = this.head;

  if(index === 0) {
   this.head = removedNode.next;
   if(this.head === 1) {
    this.tail = null;
   } else {
    this.head.prev = null;
   }
  }
  else if(index === this.size -1) {
   this.tail = this.tail.prev;
   this.tail.next = null;
  }
  else {
   let current = this.getNodeAt(index);
   
   let prev = current.prev;
   let next = current.next;

   prev.next = next;
   next.prev = prev;
  }

  this.size--;
  return true;
 }
}

const list = new DoubleLinkedList();

list.push(12);
list.push(45);
list.push(50);
list.push(30);

list.insert(100);
list.insert(200,3);

// list.remove();
// list.remove(list.size - 1);
// list.remove();
// list.remove();
// list.remove();
// list.remove();



list.toString();
list.print();

