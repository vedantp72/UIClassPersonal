let productList = 
[
  {
    Name: "laptop",
    Price:  45000,
    rating: 1,
    DiscountPercent: 10,
    Manufacturer: "Dell Inc.",
    Image:'https://static.toiimg.com/thumb/msid-84196313,width-400,resizemode-4/84196313.jpg'
  },
  {
    Name: "laptop2",
    Price: 45000,
    rating: 1.5,
    DiscountPercent: 10,
    Manufacturer: "Dell Inc.",
    Image:'https://static.toiimg.com/thumb/msid-84196313,width-400,resizemode-4/84196313.jpg'
  },
  {
    Name: "laptop",
    Price: 45000,
    rating: 2,
    DiscountPercent: 10,
    Manufacturer: "Dell Inc.",
    Image:'https://static.toiimg.com/thumb/msid-84196313,width-400,resizemode-4/84196313.jpg'
  },
  {
    Name: "laptop",
    Price:  45000,
    rating: 3.5,
    DiscountPercent: 10,
    Manufacturer: "Dell Inc.",
    Image:'https://static.toiimg.com/thumb/msid-84196313,width-400,resizemode-4/84196313.jpg'
  },
  {
    Name: "laptop",
    Price: 45000,
    rating: 2,
    DiscountPercent: 10,
    Manufacturer: "Dell Inc.",
    Image:'https://static.toiimg.com/thumb/msid-84196313,width-400,resizemode-4/84196313.jpg'
  },
  // {
  //   Name: "laptop",
  //   Price:  45000,
  //   rating: 3.5,
  //   DiscountPercent: 10,
  //   Manufacturer: "Dell Inc.",
  //   Image:'https://static.toiimg.com/thumb/msid-84196313,width-400,resizemode-4/84196313.jpg'
  // },
];





let loadProductData = (Product) => {
  let mainlitag = document.createElement("li");
  mainlitag.setAttribute("class", "block");

  
  let oltag = document.createElement("ol");

  let li1 = document.createElement("li");
  li1.innerText = "Product Name : " + Product.Name;
  oltag.append(li1);

  let li2 = document.createElement("li");
  li2.innerText = "Manufacturer : " + Product.Manufacturer;
  oltag.append(li2);

  let li3 = document.createElement("li");
  li3.innerText = "Price : ";
  let span1 = document.createElement("span");
  span1.setAttribute("class", "aprice");
  span1.innerText = Product.Price;

  let discountPrice = Product.Price - (Product.Price * Product.DiscountPercent) / 100;
  let span2 = document.createElement("span");
  span2.setAttribute("class", "dprice");
  span2.innerText = discountPrice;
  li3.append(span1);
  li3.append(span2);
  oltag.append(li3);

  let li4 = document.createElement("li");
  let ratingTemplete = getRatingTemplates(Product.rating);
  li4.append(ratingTemplete);

  oltag.append(li4);

  var li5 = document.createElement("li");
  var imgTag = document.createElement("img");
  imgTag.setAttribute("src", Product.Image);
  li5.append(imgTag);
  oltag.append(li5);
  
  mainlitag.append(oltag);
  
  document.querySelector("#ProductContainer").append(mainlitag);
};

let getRatingTemplates = (rating) => {
  var halfStarsCount = 0;
  var disabledStars = 0;
  var fullStarsCount = parseInt(rating);
  if (rating % 1 != 0) {
    halfStarsCount = 1;
  }
  disabledStars = 5 - (fullStarsCount + halfStarsCount);

  let divtag = document.createElement("div");
  divtag.setAttribute("class", "ratings");
  for (var i = 0; i < fullStarsCount; i++) {
    let div1 = document.createElement("div");
    divtag.append(div1);
  }
  if (halfStarsCount) {
    let div2 = document.createElement("div");
    div2.setAttribute("class", "halfStar");
    divtag.append(div2);
  }
  for (var i = 0; i < disabledStars; i++) {
    let div3 = document.createElement("div");
    div3.setAttribute("class", "disableStar");
    divtag.append(div3);
  }
  return divtag;
};
for (var i = 0; i < productList.length; i++) {
  loadProductData(productList[i]);
}
