const Queue = require('./Queue')

function sortAscending() {
  const secondQueue = new Queue()

  while (!queue.isEmpty()) {
    let currentMin = queue.dequeue()

    // Find the minimum
    for (let i = 0; i < queue.size(); i++) {
      let current = queue.dequeue()
      if (current < currentMin) {
        queue.enqueue(currentMin)
        currentMin = current
      } else {
        queue.enqueue(current)
      }
    }

    // Store current min into second queue
    secondQueue.enqueue(currentMin)
  }

  // Transfer elements from our second queue to main queue
  while (!secondQueue.isEmpty()) {
    let current = secondQueue.dequeue()
    queue.enqueue(current)
  }
}

const queue = new Queue()
queue.enqueue(5)
queue.enqueue(3)
queue.enqueue(1)
queue.enqueue(4)
queue.enqueue(10)
queue.enqueue(8)

console.log(`Original queue: ${queue.printQueue()}`)
sortAscending(queue)
console.log(`Ascending order: ${queue.printQueue()}`)