// Write here the code challenge solution

/* //Input: 

Parameter: value:   "A"  


Output:
```python
    ["A", "C", "E", "B", "F", "G", "D", "I", "H", "K"]
``` */


function breadthFirst(graph, root) {

    let nodeLength = {};

    for (let i = 0; i < graph.length; i++) {
        nodeLength[i] = Infinity;
    }
    nodeLength[root] = 0;

    let queue = [root];
    let curr;

    while (queue.length != 0) {
        curr = queue.shift();

        let connection = graph[curr];
        let aside = [];
        let idx = connection.indexOf(1);
        while (idx != -1) {
            aside.push(idx);
            idx = connection.indexOf(1, idx + 1);
        }

        for (let j = 0; j < aside.length; j++) {
            if (nodeLength[aside[j]] == Infinity) {
                nodeLength[aside[j]] = nodeLength[curr] + 1;
                queue.push(aside[j]);
            }
        }
    }
    return nodeLength;
}

module.exports = breadthFirst;

