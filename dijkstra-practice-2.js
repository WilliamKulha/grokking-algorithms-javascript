let processed = [];

const graph = {};
graph['start'] = {};
graph['start']['a'] = 10;

graph['a'] = {};
graph['a']['b'] = 20;

graph['b'] = {};
graph['b']['c'] = 1;
graph['b']['fin'] = 30;

graph['c'] = {};
graph['c']['a'] = 1;

graph['fin'] = {};

const costs = {};
costs['a'] = 10;
costs['b'] = Infinity;
costs['c'] = Infinity;
costs['fin'] = Infinity;

const parents = {};
parents['a'] = 'start';
parents['b'] = null;
parents['c'] = null;
parents['fin'] = null;

let findLCN = (costs) => {
  let lowestCost = Infinity;
  let lcn = null;
  for (let node in costs) {
    let cost = costs[node];
    if (cost < lowestCost && (processed.indexOf(node) === -1)) {
      lowestCost = cost;
      lcn = node;
    }
  }
  return lcn;
}

let node = findLCN(costs);

while(node !== null) {
  let cost = costs[node];
  let neighbors = graph[node];
  Object.keys(neighbors).forEach(function(neighbor) {
    let newCost = cost + neighbors[neighbor];
    if(costs[neighbor] > newCost) {
      costs[neighbor] = newCost;
      parents[neighbor] = node;
    }
  });
  processed = processed.concat(node);
  node = findLCN(costs);
}
console.log(findLCN(costs));