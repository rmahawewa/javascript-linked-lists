// // let l1 = linkedList().list;
// // console.log(l1.head);
// // l1 = linkedList(l1).append("abcdefg");
// // console.log(l1);
// // l1 = linkedList(l1).append("hijklmn");
// // l1 = linkedList(l1).append("jjjfgjrf");
// // l1 = linkedList(l1).append("jjjfgjrfirijgdeug");
// // l1 = linkedList(l1).prepend("prepend value");
// // l1 = linkedList(l1).prepend("prepend value1");
// // console.log(l1);

// // console.log(linkedList().list);
// // console.log(linkedList().append("abc123"));
// // console.log(linkedList().append("abcdefg1234567"));

// function linkedList(list = null){
//     let head = node();
//     let tail = node();
    
//     if(list === null){
//         list = node();
//         head = list;
//         tail = list;
//     }else{
//         head = list.head;
//         tail = list.tail;
//     }
    
//     let append = (v) => {

//         if(head == tail == list){
//             console.log(head);
//             // return;
//             head.value = v;
//             tail = node();
//             head.nextNode = tail;
//             list.head = head;
//             list.tail = tail;

//             return list;
//         }
//         if(tail.value == null && tail.nextNode == null){
//             tail.value = v;
//             tail.nextNode = node();
//             list.tail = tail.nextNode;

//             return list;
//         }
//         if(tail.value !== null && tail.nextNode == null){
//             tail.nextNode = node();
//             tail.nextNode.value = v;
//             list.tail = tail.nextNode;

//             return list;
//         }



//         // console.log("test12345");

//         // if(list.value == null && list.nextNode == null){
//         //     list.value = v;
//         //     return list;
//         // }

//         // if(list.value !== null && list.nextNode == null){
//         //     // debugger;
//         //     list.nextNode = node();
//         //     list.nextNode.value = v;
//         //     list.nextNode.nextNode = node();
//         //     return list;
//         // }

//         // if(list.value !== null && list.nextNode !== null){
//         //     let next = list.nextNode;
//         //     while(next !== null){
//         //         console.log(next.value);
//         //         next = next.nextNode;
//         //         console.log(next);
//         //     }
//         //     console.log(next);
//         //     // next = node();
//         //     next.value = v;
//         //     console.log(next);
//         //     return list;
//         // }        

//         return ;
//     }

//     let prepend = (value) => {
//         let new_node = node();
//         new_node.value = value;
//         new_node.nextNode = list;
//         return new_node;
//     }

//     return {list, append, prepend};
// }

// function node(){
//     let value = null;
//     let nextNode = null;

//     return {value, nextNode};
// }


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
            this.head.next = new node(v, null);
        }else{
            let n = this.head.next;
            while(n.next !== null){
                n = n.next;
            }
            n.next = new node(v, null);
        }
        return this.head;      
    }

    prepend(v){
        if(this.head == null){
            this.head = new node(v, null);
        }else{
            let new_node = new node(v, this.head);
            this.head = new_node;
        }
        return this.head;
    }

    size(){
        let n = this.head;
        let count = 0;

        while(n != null){
            count++;
            n = n.next;
        }
        
        return count;
    }

    view_head(){
        return this.head;
    }

    view_tail(){
        let n = this.head;
        while(n.next !== null){
            n = n.next;
        }
        return n;
    }

    at_index(i){
        let n = this.head;
        let count = 0;
        while(n !== null){
            if(i == count){
                return n;
            }
            n = n.next;
            count++;
        }
        return null;
    }

    pop(){
        let n = this.head;
        while(n.next.next !== null){
            n = n.next;
        }
        let pop_node = n.next;
        n.next = null;
        console.log(this.head);
        console.log(pop_node);
        return pop_node;
    }

    contains(v){
        let n = this.head;
        while(n !== null){
            if(n.value == v){
                return true;
            }
            n = n.next;
        }
        return false;
    }

    find(v){
        let n = this.head;
        let count = 0;
        while(n !== null){
            if(n.value == v){
                return count;
            }
            n = n.next;
            count++;
        }
        return null;
    }

    to_string(){
        let n = this.head;
        let sentence = "";
        while(n != null){
            sentence += "(" + n.value + ") -> ";
            n = n.next;
        }
        sentence += null;
        
        return sentence;
    }

    insertAt(v,i){
        let n = this.head;
        let count = 0;
        while(n !== null){
            if(count == i){
                let new_node = node(v, n.next);
                n = new_node;
                return this.head;
            }
            n = n.next;
            count++;
        }
        return this.head;
    }

    removeAt(i){
        let n = this.head;
        let count = 0;
        while(n !== null){
            if(count == i){
                
            }
        }
    }
}

let l1 = new linkedList();
console.log(l1);
console.log(l1.size());

let l2 = l1.append("abcdefghijkl");
console.log(l1.size());

let l3 = l1.append("jnfjghjfb");
console.log(l1.size());

let l4 = l1.append("l4");

l1.append("l5");

// console.log(l1);

l1.prepend("prepend1");
l1.prepend("prepend2");
// console.log(l1);
console.log(l1.size());
console.log(l1.view_head());
console.log(l1.view_tail());
console.log(l1.at_index(0));
console.log(l1.at_index(1));
console.log(l1.at_index(2));
console.log(l1.at_index(20));
l1.pop();
console.log(l1.contains("l4"));
console.log(l1.contains("prepend2"));
console.log(l1.contains("fhfbhdgbhjdbh"));
console.log(l1.find("prepend2"));
console.log(l1.find("l4"));
console.log(l1.find("jdgjdngjdngdgbjdgjdgdsgnjsjbfbn"));
console.log(l1.to_string());
let l22222 = new linkedList();
console.log(l22222.to_string());
