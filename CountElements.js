const Queue = require('./Queue')

function countElements(queue) {
  let counter = 0
  const secondQueue = new Queue()

  // Transfer from original queue to second queue
  while (!queue.isEmpty()) {
    let current = queue.dequeue()
    secondQueue.enqueue(current)
    counter++
  }

  // Transfer from second queue back to original queue
  while (!secondQueue.isEmpty()) {
    let current = secondQueue.dequeue()
    queue.enqueue(current)
  }

  return counter
}

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)

console.log(`The total number of elements in the queue: ${countElements(queue)}`)