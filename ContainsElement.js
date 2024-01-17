const Queue = require('./Queue')

function containsElement(queue, targetElement) {
  let found = false
  const secondQueue = new Queue()
 
  while (!queue.isEmpty()) {
    let current = queue.dequeue() // Removes first element from main queue
    if (current === targetElement) {
      found = true
    }
    secondQueue.enqueue(current)
  }

  while (!secondQueue.isEmpty()) {
    let current = secondQueue.dequeue()
    queue.enqueue(current)
  }

  return found
}

const queue = new Queue()
queue.enqueue('cat')
queue.enqueue('dog')
queue.enqueue('bird')
queue.enqueue('turtle')
queue.enqueue('fish')

let result = containsElement(queue, 'dog')

console.log(`Does dog exist in queue? ${result}`)