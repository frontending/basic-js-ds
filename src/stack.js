const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
    constructor() {
        this.array = []
    }

    push(el) {
        this.array[this.array.length] = el
    }

    pop() {
        let temp = this.array[this.array.length - 1]
        this.array.splice(this.array.length - 1, 1)
        return temp
    }

    peek() {
        return this.array[this.array.length - 1]
    }
}

module.exports = {
    Stack,
}
