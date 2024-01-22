class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("what's")
// first.next.next.next = new Node("up?")



class SinglyLinkedList {
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        }
        else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop(){
        if(!head){
            return undefined
        }
        let current = this.head
        let newTail = current
        while(current.next){
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return current
    }

    shift(){
        if(!head){
            return undefined
        }
        let temp = this.head
        this.head = temp.next
        this.length--
        if(this.length === 0){
            this.tail = null
        }
        return temp
    }

    unshift(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }
        else{
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    get(index){
        if(index < 0 || index >= this.length){
            return null
        }
        let counter = 0
        let current = this.head
        while(counter < index){
            current = current.next
            counter++
        }
        return current
    }

    set(index, val){
        let foundNode = this.get(index)
        if(foundNode){
            foundNode.val = val
            return true
        }
        return false
    }

    insert(index, val){
        if(index < 0 || index > this.length){
            return false
        }
        if(index === this.length){
            return !!this.push(val)
        }
        else if(index === 0){
            return !!this.unshift(val)
        }
        let newNode = new Node(val)
        let prevNode = this.get(index - 1)
        let nextNode = prevNode.next
        prevNode.next = newNode
        newNode.next = nextNode
        this.length++
        return true
    }

    remove(index){
        if(index < 0 || index >= this.length){
            return undefined
        }
        if(index = this.length - 1){
            return !!this.pop()
        }
        if(index === 0){
            return !!this.shift()
        }

        let prev = this.get(index - 1)
        let removed = this.get(index)
        prev.next = removed.next
        this.length--
        return removed

    }

    reverse(){
        let node = this.head
        this.head = this.tail
        this.tail = node

        let prev = null
        let next;

        for(let i = 0; i < this.length; i++){
            next = node.next
            node.next = prev
            prev = node
            node = next
        }
    }
    
}