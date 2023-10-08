var productTemplate = Handlebars.compile(document.querySelector("#product_Template").innerHTML);

var productList = [];

var getProductData = () => {
    var dataUrl  =  "http://localhost:8081/get/products";
    axios.get(dataUrl).then((response) => {
        console.log("response");
        console.log(response);
        productList = response.data.productInfo;
        for (var i = 0 ; i < productList.length; i++) {
            loadProductData(productList[i], i);
        }
    }).catch((error)=> {
        console.log("Error");
        console.log(error);
        $(".errorBlock").show();
    });
}

var loadProductData = (productData, index) => {
    productData.discountPrice = productData.price - (productData.price * productData.discountPercent) / 100;
    productData.index = index;
    
    var liTag = document.createElement("li");
    liTag.setAttribute('class', 'block');
    liTag.innerHTML = productTemplate(productData);
    
    document.querySelector("#productContainer").append(liTag);
    var id = '#rating_template_' + index;
    document.querySelector(id).append( getRatingTemplate(productData.rating));
}

var getRatingTemplate = (rating) => {
    var halfStarsCount = 0;
    var disabledStars =  0;
    var fullStarsCount = parseInt(rating);
    if (rating % 1 != 0) {
        halfStarsCount = 1;
    }
    disabledStars = 5 - (fullStarsCount + halfStarsCount);
    
    var divtag = document.createElement("div");
    divtag.setAttribute("class", 'ratingContainer');
    for (var i = 0; i < fullStarsCount; i++) {
        var div1 = document.createElement("div");
        divtag.append(div1);
    }
    if (halfStarsCount) {
        var div2 = document.createElement("div");
        div2.setAttribute("class", 'halfStar')
        divtag.append(div2);
    }
    for (var i = 0 ; i < disabledStars; i++) {
        var div3 = document.createElement("div");
        div3.setAttribute("class", 'disableStar')
        divtag.append(div3);
    }

    return divtag;
}
