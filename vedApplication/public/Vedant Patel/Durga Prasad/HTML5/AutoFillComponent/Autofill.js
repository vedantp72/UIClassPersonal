let bookNames = [
    "The Alchemist",
    "The Wings of Fire",
    "Rich Dad Poor Daddy",
    "Untamed",
    "Beloved",
    "Principles",
    "Man's Search for Meaning" ,
    "Mindset",
    "My Dream Project",
    "My Travel in India",
    "The Ship of Adventure",
    "The Techno Man",
    "The Mummy",
    "The Traveller"
    ];

    addSelectedItemToSearchBox = (event) => {
        let itemText = event.target.innerText;
        document.querySelector("#userSearchBar").value = itemText;

    }
    let filterBookData = () => {
        let searchText = document.querySelector("#userSearchBar").value;
        let filterdBookList = [];
        /*for (let i = 0; i<bookNames.length; i++) {
            let subStr = bookNames[i].slice(0, searchText.length);
            if (subStr == searchText){
            filterdBookList.push(bookNames[i]);
            }
        }*/
        filterdBookList = bookNames.filter((bookName) => {
            if (searchText.length == 0){

            }else{
            let subStr = bookName.slice(0, searchText.length);
            if (subStr.toLowerCase() == searchText.toLowerCase()){
                return bookName;
            }
        }
        })

        console.log(filterdBookList);
        addAutoFillContainer(filterdBookList);

    }
    let addAutoFillContainer = (filterdBookList) => {
        // <div onclick="addSelectedItemToSearchBox(event)" Item3</div>
        document.querySelector(".filterList").innerHTML = "";

       /* for (let i = 0; i <filterdBookList.length; i++) {
            let dTag = document.createElement("div");
             dTag.innerText = filterdBookList[i];
             dTag.addEventListener("click",(event) => {
                let itemText = event.target.innerText;
                document.querySelector("#userSearchBar").value = itemText;
                document.querySelector(".filterList").innerHTML = "";

             });
             document.querySelector(".filterList").append(dTag);
            }*/
            
        filterdBookList.map((bookName) => {
            
            let dTag = document.createElement("div");
             dTag.innerText = bookName;
             dTag.addEventListener("click",(event) => {
                let itemText = event.target.innerText;
                document.querySelector("#userSearchBar").value = itemText;
                document.querySelector(".filterList").innerHTML = "";

             });
             document.querySelector(".filterList").append(dTag);
            })
        }