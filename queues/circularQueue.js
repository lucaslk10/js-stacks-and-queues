class CircularQueue {
 #capacity;
 #list;
 #tail = -1;
 #head = -1;
 #size = 0;

 constructor(capacity) {
  this.#capacity = Math.max(Number(capacity), 0) || 10;
  this.#list = Array(this.#capacity).fill(null);
 }

 get size() {
  return this.#size;
 }

 get isFull() {
  return this.size === this.#capacity;
 }

 get isEmpty() {
  return this.size === 0;
 }

 get nextTail() {
  return (this.#tail + 1) % this.#capacity
 }

 get nextHead() {
  return (this.#head + 1) % this.#capacity
 }

 enqueue(item) {
  if(!this.isFull) {
   this.#tail = this.nextTail;
   this.#list[this.#tail] = item;
   this.#size += 1;

   if (this.#head == -1) {
    this.#head = this.#tail;
   }
  }

  return this.size;
 }

 dequeue() {
  let item = null;
  
  if(!this.isEmpty) {
   item = this.#list[this.#head];
   this.#list[this.#head] = null;
   this.#head = this.nextHead;
   this.#size -= 1;

   if(!this.size) {
    this.#head = -1;
    this.#tail = -1;
   }
  }

  return item;
 }

 print() {
  console.log(this.#list)
 }
}