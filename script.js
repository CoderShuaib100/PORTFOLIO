    var typed = new Typed('#element', {
        strings: ['PYTHON', 'SCRATCH', 'WEB FRONTEND', 'THUNKABLE'],
        typeSpeed: 140,
        backSpeed:100,
        loop:true
    });

// creating the motherboard for the digital clock



const monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const dayNames = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function setTime(){
    var date = new Date();
    var h = date.getHours();
    var min = date.getMinutes();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();
    var day = date.getDay();
    var text = document.getElementById("timetext");
    var s = date.getSeconds();
    session = "AM";
    if (h > 12) { 
        h = h - 12; session = "PM"; 
    } 
    else if (h === 12) { 
        session = "PM"; 
    } 
    else if (h === 0) { 
        h = 12;
    }
    min = min < 10 ? "0" + min : min; 
    h = h < 10 ? "0" + h : h;
    s = s < 10 ? "0" + s : s;
    m = monthNames[m];
    day = dayNames[day];

    text.innerHTML = h + ":" + min + " " + session + "<br>" + d + "/" + m + "/" + y + "<br>" + day + "<br>" + s + " seconds";
    
}   
setInterval(setTime,1000);
setTime();

var dis = "";
var expression = "";

function calc(id) {
    var value = document.getElementById(id).innerText;
    console.log("Button Clicked is: " + value);

    if (value === "=") {
        calculate();
    } 
    else if (value === "AC") {
        document.getElementById("screen").innerHTML = "";
        dis = "";
        expression = "";
    }
    else if (value === "+") {
        expression += value;
        dis = "";
        console.log(expression);
    }
    else if (value === "-") {
        expression += value;
        dis = "";
        console.log(expression);
    } 
    else if (value === "X") {
        value = "*";
        expression += value;
        dis = "";
        console.log(expression);
    } 
    else if (value === "÷") {
        value = "/";
        expression += value;
        dis = "";
        console.log(expression);
    }  
    else {
        dis += value;
        expression += value;
        document.getElementById("screen").innerHTML = expression;
        console.log(expression);
    }
}

function calculate() {
    var screenText = document.getElementById("screen").innerText;     
    var result = eval(expression);
    dis = result.toString();
    document.getElementById("screen").innerHTML = dis;
    expression = result.toString();
    console.log(expression);       
}



