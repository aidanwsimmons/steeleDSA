class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class Stack {
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }
    push(val){
        var newNode = new Node(val)
        if (this.size === 0){
            this.first = newNode
            this.last = newNode
        }
        else {
            let temp = this.first
            this.first = newNode
            newNode.next = temp
        }
        this.size++
        return this
    }

    pop(){
        if(this.size === 0){
            return null
        }
        let temp = this.first
        if(this.size === 1){
            this.first = null
            this.last = null
        }
        else{
            this.first = temp.next
        }
        this.size--
        return temp.val
    }
}