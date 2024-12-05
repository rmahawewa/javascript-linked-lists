import { linkedList } from './script1';

let l1 = new linkedList();
console.log(l1.size());

l1.append("abcdefghijkl");
console.log(l1.size());

l1.append("jnfjghjfb");
console.log(l1.size());

l1.append("l4");

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
l1.removeAt(1);
console.log(l1.to_string());
l1.removeAt(0);
console.log(l1.to_string());
