class PriorityQueue {
 #list = [];
 #capacity;

 constructor(capacity) {
  this.#capacity = Math.max(Number(capacity), 0) || null;
 }

 get size() {
  return this.#list.length;
 }

 get isEmpty() {
  return this.size === 0;
 }

 get isFull() {
  return this.#capacity !== null && this.size === this.#capacity;
 }

 enqueue(item, priority = 0) {
  priority = Math.max(Number(priority), 0);

  const element = { item, priority };

  if(this.isEmpty || element.priority >= this.#list[this.size - 1].priority) {
   return this.#list.push(element);
  }
  else {
   for(let index in this.#list) {
    if(this.#list[index].priority > element.priority) {
     this.#list.splice(index, 0, element);
     break;
    }
   }
  }

  return this.size;
 }

 dequeue() {
  return this.#list.shift();
 }

 peek() {
  return this.#list[0];
 }

 print() {
  console.log(this.#list);
 }
}
