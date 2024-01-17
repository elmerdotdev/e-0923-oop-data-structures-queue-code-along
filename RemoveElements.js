const Queue = require('./Queue')

function removeElements(queue) {
  while (!queue.isEmpty()) {
    queue.dequeue() 
  }
}

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

console.log(`Queue before removal: ${queue.printQueue()}`)
removeElements(queue)
console.log(`Queue after removal: ${queue.printQueue()}`)