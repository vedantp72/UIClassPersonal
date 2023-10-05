var count = 1;
var loadBlocks = ()=>{
    setInterval(() => {
        var divTag = document.createElement("div");
        // divTag.setAttribute("class", "block");
        divTag.classList.add("block");
        divTag.innerHTML = "Block " + count;
        document.querySelector(".container").append(divTag);
        count++
    }, 1000);
    
}
document.addEventListener("DOMContentLoaded", ()=>{
    var myworker = new Worker("dateWorkers.js");
    loadBlocks();
    showDate();
});

var showDate = ()=>{
    var cdate = new Date();
    document.querySelector(".dateContainer").innerHTML=cdate;
}

