var count = 0;
// var mathUtils = 40;
var ShowResult = (type) => {

    count++;
    var a1 = document.querySelector("#fav1").value;
    var a2 = document.querySelector("#fav2").value;
    a1 = parseInt(a1);
    a2 = parseInt(a2);
    var result;
    switch(type) {
        case 'add':
            result = mathUtils.getAddition(a1, a2);
            break;
        case 'mul':
            result = mathUtils.mulValues(a1, a2);
            break;
        case 'sub':
            result = mathUtils.subValues(a1, a2);
            break;

        case 'div':
            result = mathUtils.divValues(a1, a2);
            break;
    }

    document.querySelector("#result").innerHTML = `The ${type} is ${result}`;
    document.querySelector("#count").innerText = 'Count value is ' + count;

    sample();
}

var sample = () => {
    console.log("hurrey my job is done");
}