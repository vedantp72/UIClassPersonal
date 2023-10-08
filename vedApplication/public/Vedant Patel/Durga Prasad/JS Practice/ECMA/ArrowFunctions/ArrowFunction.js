showData();
function showData(){
    console.log("I am from normal function");
}


showData = function(){
    console.log("I am from another function");
}
showData();


showData = () => {
    console.log("I am from arrow function");
}
showData();

class Demo{
    constructor(){
    console.log("I am from constructor");
    this.name = "vedant";
}
displayInfo(){
        console.log(`I am ${this.name}`);
        setTimeout(function(){
            console.log(`I am ${this.name}`);
          }, 3000);
        setTimeout(() => {
            console.log(`I am ${this.name}`);
        },3000);
    }
}
let p = new Demo();
p.displayInfo();
