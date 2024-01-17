const Queue = require('./Queue')

function sortDescending(queue) {
  const secondQueue = new Queue()

  while (!queue.isEmpty()) {
    let currentMax = queue.dequeue()

    // Find the maximum element
    for (let i = 0; i < queue.size(); i++) {
      let current = queue.dequeue()
      if (current > currentMax) {
        queue.enqueue(currentMax)
        currentMax = current
      } else {
        queue.enqueue(current)
      }
    }

    // Store maximum into second queue
    secondQueue.enqueue(currentMax)
  }

  // Transfer elements from second queue to main queue
  while (!secondQueue.isEmpty()) {
    let current = secondQueue.dequeue()
    queue.enqueue(current)
  }
}

const queue = new Queue()
queue.enqueue(5)
queue.enqueue(8)
queue.enqueue(9)
queue.enqueue(1)
queue.enqueue(3)
queue.enqueue(6)
queue.enqueue(20)

console.log(`Qriginal queue: ${queue.printQueue()}`)
sortDescending(queue)
console.log(`Descending order: ${queue.printQueue()}`)