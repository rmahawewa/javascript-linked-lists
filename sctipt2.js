class node{
    constructor(value = null, next = null){
        this.value = value;
        this.next = next;
    }
}

class linkedList{
    constructor(head = null){
        this.head = head;
    }

    append(v) {
        if(this.head == null){
            this.head = new node(v,null);
        }else if(this.head.next == null){
            this.head.next = node(v, null);
        }else{
            let n = this.head.next;
            while(n.next !== null){
                n = n.next;
            }
            n.next = node(v, null);
        }
        
    }
}

let l1 = new linkedList();
console.log(l1);

let l2 = l1.append("abcdefghijkl");
console.log(l2);