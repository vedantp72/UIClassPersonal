const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "myFiles");
console.log(dirPath);
// for(i=1; i<=5; i++){
//     fs.writeFileSync(dirPath+"/sample"+i+".txt", "This is sample file");
// }

fs.readdir(dirPath,(err, files)=>{
    files.forEach((item)=>{
console.log("File name is " + item);
    })
    
})