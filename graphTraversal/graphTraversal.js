class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(vertex1, vertex2){
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            this.adjacencyList[vertex1].push(vertex2)
            this.adjacencyList[vertex2].push(vertex1)
        }
    }
    removeEdge(vertex1, vertex2){
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
             vertex => vertex !== vertex2
            )
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
                vertex => vertex !== vertex1
            )
        }
    }
    removeVertex(vertex){
        if(this.adjacencyList[vertex]){
            while(this.adjacencyList[vertex].length){
                 const adjacentVertex = this.adjacencyList[vertex].pop();
                 this.adjacencyList.removeEdge(vertex, adjacentVertex)
            }
            delete this.adjacencyList[vertex]
        }
    }

    depthFirstRecursive(start){
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    return dfs(neighbor)
                }
            })
        })(start)

        return result;
        
    }

    depthFirstIterative(start){
        let stack = [start];
        let result = [];
        let visited = {};
        let current;

        visited[start] = true;

        while(stack.length){
            current = stack.pop();
            result.push(current)

            this.adjacencyList[current].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    stack.push(neighbor)
                }
            })
        }
        return result;
    }

    breathFirst(start){
        let queue = [start];
        let result = [];
        let visited = {};
        let current;

        visited[start] = true;

        while(queue.length){
            current = queue.shift();
            result.push(current);

            this.adjacencyList[current].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor)
                }
            });
        }
        return result;
    }
}

let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")