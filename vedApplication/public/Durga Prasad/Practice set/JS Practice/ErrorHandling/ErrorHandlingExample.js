var taskList = [
    "Do the code reivew of all the modules",
    "Prepate the mockups for new module development",
    "Create new signup user page",
    "Workw ith support team, understand the requriements what they have",
    "Implement automation test cases"
];
var userName = '';
var createTaskContainer = () => {
    var divTag = document.createElement("div");
    divTag.setAttribute("class", "taskContainer");
    document.querySelector(".blockContainer").append(divTag);
}

var showTodaysTask = () => {
    var taskName = taskList[getRandomValue()];
    var task = `Mr. ${userName} today task is - ${taskName}`;
    try {
        document.querySelector('.taskContainer').innerText = task;
    } catch(error) {
        console.log(error)
        alert("you missed to create a task container");
    } finally {
        // Set of instructions, which for sure need to be executed, irrleveant of whether there is an exception or not
        showthanksMsg();
    }

    
}

var saveUserName = () => {
    userName = document.querySelector("#username").value;
}

var getRandomValue = () => {
    var randomIndex = Math.floor(Math.random() * taskList.length);
    return randomIndex;
}

var showthanksMsg = () => {
    setTimeout(() => {
        var msg = `Thanks Mr. ${userName} for using our webpage for taks assigning`;
        document.querySelector("#thanksBlock").innerText  = msg;
        document.querySelector("#thanksBlock").style.display = 'block';
    }, 3000);
    
}