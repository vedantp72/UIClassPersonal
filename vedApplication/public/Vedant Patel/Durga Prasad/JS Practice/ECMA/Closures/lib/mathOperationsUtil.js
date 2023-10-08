 
var mathUtils = (()  => { 

    var count = 0;

    var addValues = (a1, a2) => {
        count++;
        var sum = 0; 
        sum = a1 + a2;
        return sum;
    }

    var mulValues = (a1, a2) => {
        count++;
        var sum = 0; 
        sum = a1 * a2;
        return sum;
    }

    var divValues = (a1, a2) => {
        count++;
        var sum = 0; 
        sum = a1 / a2;
        return sum;
    }
    
    var subValues = (a1, a2) => {
        count++;
        var sum = 0; 
        sum = a1 - a2;
        return sum;
    }



var sample = () => {
    console.log("am from sample");
}


// count, sample, Student, dateobj

return {
    getAddition: (a1, a2) => {
        var result = addValues(a1, a2);
        return result;
        
    },
    subValues: (a1, a2) => {
        var result = subValues(a1, a2);
        return result;
//         count++;
//         var sum = 0; 
//         sum = a1 - a2;
//         return sum;
    },
    mulValues: (a1, a2) => {
        var result = mulValues(a1, a2);
        return result;
        
    },
    divValues: (a1, a2) => {
        var result = divValues(a1, a2);
        return result;
    }
}

})();