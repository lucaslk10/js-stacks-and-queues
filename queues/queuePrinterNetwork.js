class Queue {
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

 enqueue(item) {
  if(!this.isFull)
   return this.#list.push(item);

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


class Printer extends Queue {
 #printing = false; 

 constructor() {
  super(10);

  this.id = Math.floor(Math.random() * 10000);
 }

 print(doc) {
  return new Promise((res,rej) => {

    if(this.isFull) {
     rej("Printer is Full")
    }
    else {
     this.enqueue(() => res(doc)); 

     if(!this.#printing) {
      this.#printDocs();
     }

    }

  })
 }

 #printDocs = () => {
  this.#printing = true;

  setTimeout(() => {
    const docCall = this.dequeue();
    docCall();

    if(this.isEmpty) {
     this.#printing = false;
    }
    else {
     this.#printDocs();
    }

  }, Math.floor(Math.random() * 2000))
 }

}

// const printer = new Printer();

// Array.from({length: 11}, (_,i) => (i+1)).forEach((n) => {
//   printer.print(n)
//    .then((doc) => console.log(doc, 'printed'))
//    .catch((msg) => console.log(n,msg))
// })


class PrinterNetwork extends Queue {
 #printers = [
  new Printer(),
  new Printer(),
  new Printer(),
 ];

 print(doc) {
  return new Promise((res) => {
    const freePrinter = this.#printers.reduce((acc, printer) => {
     if(printer.size < acc.size) {
      acc = printer;
     }

     return acc;
    }, this.#printers[0])

    if(freePrinter.isFull) {
     this.enqueue(() => this.print(doc).then(id => res(id)))
    }
    else {
     freePrinter.print(doc).then(() => {
       res(freePrinter.id);

       if(this.size) {
        const nextDoc = this.dequeue();
        nextDoc();
       }
     })
    }
  })
 }
}


const pn = new PrinterNetwork();

Array.from({length: 3}, (_,i) => (i+1))
 .forEach(n => {
   pn.print(n)
    .then(id => console.log(n, 'printed by', id))
 })