export default function Deque() {
  this.queue = new Array ();

  this.popFront = function() { 
    this.queue.shift(); 
  }

  this.pushToEnd = function(valueToPush) {
    this.queue.push(valueToPush); 
  }

  this.popEnd = function() {
    this.queue.pop(); 
  }

  this.pushToFront = function(valueToPush) {
    this.queue.unshift(valueToPush);
  }
}