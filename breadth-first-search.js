//Example graph
//This is that jenky/hack-ey graph structure again, but it makes working with the data a lot easier than 
//using the javascript Map object and a self implemented deque object. This is the fast and dirty way of making a hash table.
//The data isn't secure because there's literally no hash, but it has the same quick response time as a hash table...
//Maybe faster since there's no hashing algorithm being run :D. 
const graph = {};
graph['you'] = ['alice', 'bob', 'claire'];
graph['bob'] = ['anuj', 'peggy'];
graph['alice'] = ['peggy'];
graph['claire'] = ['thom', 'jonny'];
graph['anuj'] = [];
graph['peggy'] = [];
graph['thom'] = [];
graph['jonny'] = [];

//This structure of key value pairs using arrays in the hash table lets you set up a graph. It shows degrees of connection so it you can use it to find the shortest route,
// or if two things are connected.

checkIfSeller = (name) => { 
  return name[name.length-1] === 'm';
}

const search = (name) => {
  let searchQueue = [];
  searchQueue = searchQueue.concat(graph[name]);
  const searched = [];
  while (searchQueue.length) {
    let person = searchQueue.shift();
    if (searched.indexOf(person) === -1) {
      //Checking indexOf(whateverUrCheckin) will return -1 if that value doesn't occur in the array.
      if (checkIfSeller(person)) {
        console.log(`${person} is a mango seller!`);
        return true;
      } else {
        searchQueue = searchQueue.concat(graph[person]);
        searched.push(person);
      }
    }
  }
  return false;
}