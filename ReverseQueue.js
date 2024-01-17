const Queue = require('./Queue')

function reverseQueue(queue) {
  const secondQueue = []

  // Transfer main queue to second queue
  while (!queue.isEmpty()) {
    let current = queue.dequeue()
    secondQueue.push(current)
  }

  // Transfer from second queue to main queue
  while (secondQueue.length > 0) {
    let current = secondQueue.pop()
    queue.enqueue(current)
  }
}

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)

console.log(`Original queue: ${queue.printQueue()}`)
reverseQueue(queue)
console.log(`Reversed queue: ${queue.printQueue()}`)