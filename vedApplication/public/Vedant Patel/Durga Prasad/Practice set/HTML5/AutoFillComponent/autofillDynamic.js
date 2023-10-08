let suggestedProducts = [];


    let filterBookData = () => {
        let searchText = document.querySelector("#userSearchBar").value;
        if (searchText.length < 3 ) {
            document.querySelector(".filterList").innerHTML = "";
            return;
        }
        
        let dataUrl =`https://completion.amazon.in/api/2017/suggestions?limit=11&prefix=${searchText}&suggestion-type=WIDGET&suggestion-type=KEYWORD&page-type=Gateway&alias=aps&site-variant=desktop&version=3&event=onkeypress&wc=&lop=en_IN&last-prefix=lapto&avg-ks-time=2276&fb=1&session-id=258-6755150-8126320&request-id=XJXSWHS6HZ0W2FGRQ42T&mid=A21TJRUUN4KGV&plain-mid=44571&client-info=amazon-search-ui`
          
        fetch(dataUrl)
        .then((response) => {
           return response.json();
        })
        .then((productData) => {
           console.log(productData);
           filterdBookList = productData.suggestions;
           addAutoFillContainer(filterdBookList);

        })
        // let filterdBookList = [];
        
        // filterdBookList = bookNames.filter((bookName) => {
        //     if (searchText.length == 0){

        //     }else{
        //     let subStr = bookName.slice(0, searchText.length);
        //     if (subStr.toLowerCase() == searchText.toLowerCase()){
        //         return bookName;
        //     }
        // }
        // })

        // console.log(filterdBookList);

    }
    let addAutoFillContainer = (filterdBookList) => {
        // <div onclick="addSelectedItemToSearchBox(event)" Item3</div>
        document.querySelector(".filterList").innerHTML = "";

       
            
        filterdBookList.map((element) => {
            
            let dTag = document.createElement("div");
             dTag.innerText = element.value;
             dTag.addEventListener("click",(event) => {
                let itemText = event.target.innerText;
                document.querySelector("#userSearchBar").value = itemText;
                document.querySelector(".filterList").innerHTML = "";

             });
             document.querySelector(".filterList").append(dTag);
            })
        }