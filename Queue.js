// FIRST IN, FIRST OUT PRINCIPLE
class Queue {
  constructor () {
    this.items = []
  }

  // Add an element to the queue
  enqueue(element) {
    this.items.push(element)
  }

  get items() {
    return this._items
  }

  set items(newValue) {
    this._items = newValue
  }

  // Removing an element from the queue and return it
  dequeue() {
    return this.items.shift()
  }

  // Look at the first element
  peek() {
    return this.items[0]
  }

  // Return the number of items
  size() {
    return this.items.length
  }

  // Check if queue is empty
  isEmpty() {
    return this.size() === 0
  }

  // Output the items in a queue
  printQueue() {
    let str = ''
    for (let i = 0; i < this.size(); i++) {
      str += this.items[i] + ' '
    }
    return str
  }
}

module.exports = Queue