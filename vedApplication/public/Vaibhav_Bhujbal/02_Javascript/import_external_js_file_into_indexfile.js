var abc ={};

var getstudendetails =()=>{
    abc.ename   = document.querySelector("#ename").value;
    abc.bsalary = document.querySelector("#bsalary").value;
    abc.gender  = document.querySelector("input[name=gender]:checked");
    console.log(abc);
}

