const Queue = require('./Queue')

function maxAndMin(queue) {
  const secondQueue = new Queue()
  let max = queue.peek()
  let min = queue.peek()

  while (!queue.isEmpty()) {
    let current = queue.dequeue()
    max = Math.max(max, current)
    min = Math.min(min, current)
    secondQueue.enqueue(current)
  }

  while (!secondQueue.isEmpty()) {
    let current = secondQueue.dequeue()
    queue.enqueue(current)
  }

  return { max, min }
}

const queue = new Queue()
queue.enqueue(5)
queue.enqueue(10)
queue.enqueue(7)
queue.enqueue(2)
queue.enqueue(1)

const { max, min } = maxAndMin(queue)
console.log(`Max: ${max}, Min: ${min}`)