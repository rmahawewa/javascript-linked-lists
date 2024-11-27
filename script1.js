function linkedList(){
    let list = node();
    let append = (value) => {
        let list_value = list.value;
        let next = list.nextNode;

        if(next == null){
            next = node();
            next.set_value(value);
        }

        while(next !== null){
            let temp = next;
            next = temp.nextNode;
        }
        next = node();
        next.set_value(value);

        return list;
    }

    return {list, append};
}

function node(){
    let value = null;
    let nextNode = null;

    let set_value = (v) => {
        value = v;
        return value;
    }

    let set_next = (n) => {
        nextNode = n;
        return nextNode;
    }

    return {value, nextNode, set_value, set_next};
}

