var validateUserData = (event) => {
    console.log(event);
}

var validateData = (event) => {
    console.log(event);
}

var upperCaseChar = ['A', 'B', 'C', 'D', 'E', 'F']

var capthcaValue = '';

/*
// Lengthy process through array of char
var getRandomUpperCaseChar = () => {
    var randomChar = '';
    var randomIndex = Math.random() * upperCaseChar.length;
    randomIndex = Math.floor(randomIndex);
    console.log(upperCaseChar[randomIndex])
    return upperCaseChar[randomIndex];

} */


var getRandomNumber = () => {
    var randomNumber = Math.random() * 9;
    randomNumber = Math.floor(randomNumber);
    return randomNumber;
}




var getRandomNumberBetweenGivenRange = (min, max) => {
    var randomNumber = Math.floor(Math.random() * (max - min)) + min;
    return randomNumber;
    


}

var getRandomUpperCaseChar = () => {
    var randomNumber = getRandomNumberBetweenGivenRange(65, 90);
    var randomUpperCaseChar = String.fromCharCode(randomNumber);
    return randomUpperCaseChar;
}

var getRandomLowerCaseChar = () => {
    var randomNumber = getRandomNumberBetweenGivenRange(97, 122);
    var randomLowerCaseChar = String.fromCharCode(randomNumber);
    return randomLowerCaseChar;
}



var getCapchaValue = () => {
    var captchaValue = '';
    captchaValue = getRandomUpperCaseChar() + getRandomUpperCaseChar() + getRandomNumber() + getRandomLowerCaseChar() + getRandomNumber();
    document.querySelector("#otpText").innerHTML = captchaValue;


    html2canvas(document.getElementById('otpText'), {
        onrendered: function (canvas) {
        var screenshot = canvas.toDataURL('image/png');
        document.getElementById('otpImage').setAttribute('src', screenshot);
        document.querySelector("#otpText").innerHTML = '';
    },
    
});
    

}