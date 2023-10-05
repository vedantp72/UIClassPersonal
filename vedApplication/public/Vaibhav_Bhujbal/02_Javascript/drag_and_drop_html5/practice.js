var productId;
var elementDragStarted =(event)=>{
  console.log("drag event is started");
  productId =  "#"+  event.target.getAttribute("id");
}
var elementDropend = (event)=>{
  event.preventDefault();
  console.log("element Drop end");
  var getElement =document.querySelector(productId);
  var imgTag = document.createElement("img");
    imgTag.setAttribute("src", getElement.getAttribute("src"));
    // var dimensionOfDiv = event.target.css("");

   event.target.append(imgTag);
   event.target.setAttribute("class", "container");
}
var elementondropped = (event)=>{
  event.preventDefault();

  console.log("element dropped");
  event.target.setAttribute("class", "afterGettingImage container");
}









 