var booklists = [
    "The love story",
    "The man in forest",
    "The right person",
    "The frog on ground",
    "Toss me up",
    "Legend The Terror",
    "puspa Jhukega Nahi Sala",
    "Raody Rathore"
]
var getElementintoSearchBar = (event)=>{ // here we take that child div event and build a logic for that
   /*var  getInnerText = event.target.innerText;
   document.querySelector("#userSearchBar").value = getInnerText;
   we cut this and putted below 
   */
  // by using this method we can access any content into our container
}
// when user input some text into input box then we have to find character of that input text so 
// we want to put filterBookData( ) this method in input type text

var filterBookData = ()=>{
    var serachText = document.querySelector("#userSearchBar").value;

    console.log(serachText);

// now we want to match that serachText to booklist 

// we create an array 
var filteredBooklist = [];
/*for(var i=0; i<booklists.length; i++){
    var subStr = booklists[i].slice(0, serachText.length);
    // here we take for loop for get bookname from user inputed character in search box

    // console.log(subStr);

    // result : when we enter character into search box then that range of character of books comes 
    if(subStr == serachText){
        filteredBooklist.push(booklists[i]);
    }
// we have to match that substr to booklist items
}*/
/////////////////for above code we can replace it with 
filteredBooklist = booklists.filter((bookName)=>{
    var subStr = bookName.slice(0, serachText.length);
    if(subStr==serachText){
        return bookName;
    }
});

console.log(filteredBooklist);
addAutoFillContainer(filteredBooklist); // pass parameter to outside function
}

// now we want to add child div tag dynamically so that we can so we can autofill content in filterList

var addAutoFillContainer = (filteredBooklist)=>{
    // <div onclick="getElementintoSearchBar(event)"> Item 1 </div>  
    // we want this as dynamically
document.querySelector(".filterList").innerHTML = "";
for(var i = 0; i<filteredBooklist.length; i++){
    var dTag = document.createElement("div");
    dTag.innerText = filteredBooklist[i];
    dTag.addEventListener("click", (event)=>{
        var  getInnerText = event.target.innerText;
        document.querySelector(".filterList").innerHTML = "";
   document.querySelector("#userSearchBar").value = getInnerText;
    });
    document.querySelector(".filterList").append(dTag);
}

}