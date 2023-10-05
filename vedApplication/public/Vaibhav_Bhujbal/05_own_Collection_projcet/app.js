var userData = {};
var colorChoosen;
// alert(colorChoosen);
var addColorToBody = (colorChoosen)=>{ // userDefined method addColorToBody 
    document.querySelector("body").style.background = colorChoosen;
}
document.addEventListener("DOMContentLoaded", ()=>{
    if(localStorage.getItem ("userSelectedTheme")!=null) // this localStorage.getItem is a method used to get the valuue of (inputed) key
{
    addColorToBody(localStorage.getItem ("userSelectedTheme"));

    // we put here data for to store password 
    if(localStorage.getItem("userDetails")!=null){
        var userDetails = JSON.parse(localStorage.getItem("userDetails"));
        $("#username").val() = userData.accountId;
        $("#userpassword").val() = userData.accountPwd;
    }
}
});
var loginUser = ()=>{
    userData.accountId = $("#username").val();
    userData.accountPwd = $("#userpassword").val();
    userData.userage  = $("#userAge").val();
    console.log(userData);
   // below we take a if user put valid data then this result been shown and not valid then elese has been shown 
   if(document.querySelector("#userOption").checked){
    // store user preferances in storage 
    localStorage.setItem("userDetails", JSON.stringify(userData)) // here we cannot store data as  a object so we can stringify them 
}else{
    // clear user preferance from the storage
}
   
    if(userData.accountId == "admin" &&  userData.accountPwd == "hello"){
        $(".loginBlock").hide();
        $(".detailsBlock").show();
    }else{
        $(".invalidData").show();
    }
}
// here we takes input as a color and process on it 
var applyTheme = ()=>{
     colorChoosen = $("#userTheme").val();
    // alert(colorChoosen);
    localStorage.setItem("userSelectedTheme", colorChoosen);
    $("ul").css("background-color", colorChoosen);
    addColorToBody(colorChoosen); // we pass here colorChoosen to the function addColorToBody function


}
 
// now what we want when user visit our webpage page loaded with the theme setting which he set last visit 

// so we take var colorChoose; on top
// 

// now we do the theme project succes but now we want to this for userid and password

// so what we can do 

