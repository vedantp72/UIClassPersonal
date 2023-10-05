let a = new Array();
let a2 = [];

a2.push(100); /*.push is the method that which can insert the value in array*/
a2.push(200);
a2.push(200);
a2.push(300);


let s1 = new Set(); /* Set is a DS which is does not support duplication*/
s1.add(230); /* add is the method that can insert the value in Set*/
s1.add(200);
s1.add(230);
s1.add(200);
s1.add(300);
s1.add(400);

// s1.clear(); /* clear the Set */
console.log(s1.size); /* give the Size of the Set */
s1.delete(200); /* delete the value*/
console.log(s1);
console.log(s1.has(300));
console.log(s1.values());


for (let value of s1) {
    console.log(value);
}