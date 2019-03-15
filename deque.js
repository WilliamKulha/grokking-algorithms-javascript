export default deque = () => {
  this.queue = new Array ();

  this.popFront = () => { this.queue.shift(); }

  this.pushToEnd = (valueToPush) => { this.queue.push(valueToPush); }

  this.popEnd = () => { this.queue.pop(); }

  this.pushToFront = (valueToPush) => { this.queue.unshift(valueToPush); }
}