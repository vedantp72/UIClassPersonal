let object = new Object();
let obj = {};

let m1 = new Map();
m1.set("name", "Vedant");
m1.set("Gender", "male");
m1.set("age",20);
m1.set("location", "Pune");
console.log(m1);


for ([key, value]of m1){
    console.log(key);
    console.log(value);

}
// m1.clear
// m1.delete("age");

for (let key of m1.keys()){
    console.log(key);
} 
// console.log(m1);
