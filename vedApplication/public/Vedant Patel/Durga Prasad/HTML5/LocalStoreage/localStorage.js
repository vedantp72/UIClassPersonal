let userData = {};
let colorChoosen;

let addColorToBody = (colorName) => {
    document.querySelector("body").style.background = colorName;
}
document.addEventListener("DOMContentLoaded",() => {
    if (localStorage.getItem("userSelectedTheme") != null){
        addColorToBody(localStorage.getItem("userSelectedTheme"));
    }
    if (localStorage.getItem("userDetails") != null){
        let userDetails =JSON.parse(localStorage.getItem("userDetails"));
        document.querySelector("#userAcountId").value = userDetails.accountId;
        document.querySelector("#acountPwd").value = userDetails. accountPwd;
        document.querySelector("#useroption").checked = true;
    }
})

let loginUser = () => {
    userData.accountId = document.querySelector("#userAcountId").value;
    userData.accountPwd = document.querySelector("#acountPwd").value;
    
    if (document.querySelector("#useroption").checked ) { // store user pref in storage
        localStorage.setItem("userDetails", JSON.stringify(userData));
    } else { // clear user pref from storage
        localStorage.removeItem("userDetails");
    }

    if (userData.accountId == 'ved' && userData.accountPwd == 'jsk') {
        // document.querySelector(".invalidCredentials").style.display = 'none';
        $(".invalidCredentials").hide();
        $(".loginBlock").hide();
        // $(".detailsBlock").show();

        document.querySelector(".detailsBlock").style.display = 'block';
    } else {
        $(".invalidCredentials").show();
    }

} 

let applyTheme = () => {
    let colorChoosen = $("#userTheme").val();
    localStorage.setItem("userSelectedTheme", colorChoosen);
    addColorToBody(colorChoosen);

}
    
