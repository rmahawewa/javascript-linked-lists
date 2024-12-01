let l1 = linkedList().list;
console.log(l1);
l1 = linkedList(l1).append("abcdefg");
l1 = linkedList(l1).append("hijklmn");
l1 = linkedList(l1).append("hijklmnopqrstuvw");
l1 = linkedList(l1).prepend("prepend value");
console.log(l1);

// console.log(linkedList().list);
// console.log(linkedList().append("abc123"));
// console.log(linkedList().append("abcdefg1234567"));

function linkedList(list = null){
    if(list == null){
        list = node();
    }    
    
    let append = (value) => {
        let list_value = list.value;
        let next = list.nextNode;

        if(list_value == null && next == null){
            list.value = value;
        }

        if(list_value !== null && next == null){
            next = node();
            next.value = value;
            list.nextNode = next;
        }

        if(list_value !== null && next !== null){
            while(next !== null){
                let temp = next;
                next = temp.nextNode;
            }
            next = node();
            next.value = value;
        }        

        return list;
    }

    let prepend = (value) => {
        let new_node = node();
        new_node.value = value;
        new_node.nextNode = list;
        return new_node;
    }

    return {list, append, prepend};
}

function node(){
    let value = null;
    let nextNode = null;

    return {value, nextNode};
}



