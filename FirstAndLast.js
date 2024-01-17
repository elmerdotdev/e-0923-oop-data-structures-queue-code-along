const Queue = require('./Queue')

function firstAndLast(queue) {
  const firstItem = queue.peek() // Get first item
  const lastItem = queue.items[queue.size() - 1] // Get last item

  return { firstItem, lastItem }
}

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)

const { firstItem, lastItem } = firstAndLast(queue)
console.log(`The first item is ${firstItem} and the last item is ${lastItem}.`)