var username = prompt("Enter username");
var role = prompt("Enter role");
// var productName = prompt("Enter product name");
class Product
{
    _productName;
    get ProductName() {
         return this._productName; 
        }

set ProductName(newName) {
    if (role == "admin"){
        this._productName = newName;
    } else {
        document.write(`hello ${username} your role ${role} is not authorised`);
}
}
}
let obj = new Product();
obj.ProductName = productName;
if (obj.ProductName){
    document.write(`Product Name = ${obj.ProductName}`);
}