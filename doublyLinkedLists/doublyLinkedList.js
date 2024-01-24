class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        }
        else {
            this.tail.next = newNode
            newNode.prev = this.tail 
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop(){
        if(!this.head){
            return undefined
        }
        let result = this.tail
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }
        else{
        this.tail = result.prev;
        result.prev = null;
        this.tail.next = null;
        }
        this.length--;
        return result
    }

    shift(){
        if(!this.head){
            return undefined
        }
        let result = this.head
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }
        else{
            this.head = result.next;
            result.next = null;
            this.head.prev = null;
            }
        this.length--;
        return result;
    }

    unshift(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }
        else{
            let oldHead = this.head
            this.head = newNode
            newNode.next = oldHead
            oldHead.prev = this.head
        }
        this.length++
        return this
    }

    get(index){
        if(index < 0 || index >= this.length){
            return null
        }
        if(index <= this.length / 2){
            let counter = 0
            let current = this.head
            while(counter < index){
                current = current.next
                counter++
            }
        }
        else {
            let counter = this.length - 1
            let current = this.tail
            while(counter > index){
                current = current.prev
                counter--
            }
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
        nextNode.prev = newNode
        newNode.next = nextNode
        newNode.prev = prevNode
        this.length++
        return true
    }

    remove(index){
        if(index < 0 || index >= this.length){
            return undefined
        }
        if(index = this.length - 1){
            return this.pop()
        }
        if(index === 0){
            return this.shift()
        }

        let prevNode = this.get(index - 1)
        let removed = this.get(index)
        let nextNode = removed.next
        prevNode.next = nextNode
        nextNode.prev = prevNode
        this.length--
        removed.next = null
        removed.prev = null
        return removed

    }
}