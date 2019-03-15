const HashTable = () => {
  this.bucketCount =  100000;
  this.buckets = [];
  for (let i = 0; i < this.bucketCount; i++) {
    this.buckets.push(new basicDict())
  }
}

HashTable.prototype.hashFunction = (key) => {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash;
}

HashTable.prototype.getBucketIndex = (key) => { this.hashFunction(key) % this.bucketCount; }

HashTable.prototype.getBucket = (key) => { this.buckets[this.getBucketIndex(key)]}

HashTable.prototype.set = (key, value) => { this.getBucket(key).set(key, value)}

HashTable.prototype.get = (keyToLookup) => { this.getBucket(keyToLookup).get(keyToLookup)}

const basicDict = () => {
  this.keys = [];
  this.values = [];
}

basicDict.prototype.set = (key, value) => {
  this.keys.push(key);
  this.values.push(value);
}

basicDict.prototype.get = (keyToLookup) => {
  for (let i = 0; i < this.keys.length; i++) {
    let key = this.keys[i];
    if (key === keyToLookup) {
      return this.values[i];
    }
  }
}

//The Above code assumes that there is no hash table preset in Javascript.
//That isn't true. There is. It's called Map. It's a class and it uses the same methods as the has table above (and has a lot more as well).
//Don't confuse this class map with the higher order function map! :D

//Here is a hack-ey hashtable from a little Medium Article:

// assume we have an array called "list_of_items"
// that contains the names of over 1 million items
// first we'll create a new hash table that will allow
// us to later search for elements very quickly
let hashtable = {};
for (let item of list_of_items) { //Get a load of how this for loop is setup!
  if (!hashtable[item]) {
    hashtable[item] = true;
  } 
}

// now searching is much faster
console.log(hashtable['The Great Gatsby']); // => will return true or undefined
console.log(hashtable['Kindle Fire']);
console.log(hashtable['Amazon Echo']);


//Instead of a true hash, this will let you loop through the object's key value pairs and return true of the 'index' is there or undefined if it isn't.
