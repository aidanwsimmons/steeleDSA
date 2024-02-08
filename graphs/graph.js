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
}