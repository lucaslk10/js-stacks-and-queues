class Stack {
 #list = [];
 #maxSize = null;

 constructor(maxSize) {
  this.#maxSize = Number(maxSize) || null;
 }

 get size() {
  return this.#list.length;
 }

 push(item) {
  if(!this.#maxSize || this.size < this.#maxSize)
   this.#list.push(item);

  return this.size;
 }

 pop() {
  this.#list.pop();

  return pop;
 }

 peek() {
  return this.#list[this.size - 1] || null;
 }

 clear() {
  this.#list = [];
 }

 print() {
  console.log(this.#list)
 }
}