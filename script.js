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
var oldValue = "";
var operator = "";

function calc(id) {
    var value = document.getElementById(id).innerText;
    console.log("Button Clicked: " + value);
    if (value === "=") {
        calculate();
    } 
    else if (value === "+"){
        oldValue = dis;
        operator = value;
        dis = "";
        document.getElementById("screen").innerHTML = oldValue + " " + operator;
    }

    else if ( value === "-"){
        oldValue = dis;
        operator = value;
        dis = "";
        document.getElementById("screen").innerHTML = oldValue + " " + operator;
    }
    
    else if (value === "÷") {
        oldValue = dis;
        operator = value;
        dis = "";
        document.getElementById("screen").innerHTML = oldValue + " " + operator;
    }

    else if (value === "X"){
        oldValue = dis;
        operator = "X";
        dis = "";
        document.getElementById("screen").innerHTML = oldValue + " " + operator;
    }
    else if (value === "="){
        calculate();
    }
    else if (value === "AC"){
        document.getElementById("screen").innerHTML = "";
        dis = '';
        oldValue = "";
        operator = "";
    }
    else {
        dis += value;
        document.getElementById("screen").innerHTML = dis;
    }
}

function calculate(){
    var result;
    var currentValue = dis; 
    var previousValue = oldValue;
    expression = "";
    console.log(oldValue);
    console.log(dis);
    
    
    if (operator === "+"){
        expression = previousValue + "+" + currentValue;
        console.log(expression);
        result = eval(expression);
    }
    if (operator === "-"){
        expression = previousValue + "-" + currentValue;
        console.log(expression);
        result = eval(expression);
    }
    if (operator === "X"){
        expression = previousValue + "*" + currentValue;
        console.log(expression);
        result = eval(expression);
    }
    if (operator === "÷"){
        expression = previousValue + "/" + currentValue;
        console.log(expression);
        result = eval(expression);
    }
    console.log(result);
    document.getElementById("screen").innerHTML = result;
    
}


