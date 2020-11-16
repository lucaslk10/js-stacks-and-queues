class Stack {
 #list = new Map(); //private properties #
 #maxSize = null;

 constructor(maxSize) {
  this.#maxSize = Number(maxSize) || null;
 }

 get size() {
  return this.#list.size;
 }

 push(item) {
  if(!this.#maxSize || this.size < this.#maxSize)
  this.#list.set(this.size, item);

  return this.size;
 }

 pop() {
  if(this.size) {
   const lastItem = this.#list.get(this.size - 1);
   this.#list.delete(this.size - 1);
   return lastItem;
  }

  return null;
 }

 peek() {
  return this.#list.get(this.size - 1) || null;
 }

 clear() {
  this.#list = new Map();
 }

 print() {
  console.log(Array.from(this.#list.values()))
 }
}

const myStack = new Stack();

myStack.push('first');
myStack.push(12);
myStack.push('third');

myStack.print();

myStack.pop();
myStack.pop();

myStack.peek();
myStack.print();