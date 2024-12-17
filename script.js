    var typed = new Typed('#element', {
        strings: ['PYTHON', 'SCRATCH', 'WEB FRONTEND', 'THUNKABLE'],
        typeSpeed: 140,
        backSpeed:100,
        loop:true
    });

    var qualtext = document.getElementById("element");
    function py() {
        qualtext.style.color = "green";
    }
    function sc() {
        qualtext.style.color = "orange";
    }
    function web() {
        qualtext.style.color = "blue";
    }
    function thunk() {
        qualtext.style.color = "red";
    }
    function nameText() { 
        setTimeout(py,0);
        setTimeout(sc,3050);
        setTimeout(web, 6300);
        setTimeout(thunk,10990);
    }
    nameText();
    setInterval(nameText,14900);



    // making the christmas countdown

    var timerText = document.getElementById("CHRISTMAS-counter");

    const Counter = new Date(`December 25 2024 00:00:00`);

    function countdown() {
        var nowTime = new Date();
        var dif = Counter - nowTime;
        var d = Math.floor(dif / 1000 / 60 / 60 / 24);
        var h = Math.floor(dif / 1000 / 60 / 60) % 24;
        var m = Math.floor(dif / 1000 / 60) % 60;
        var s = Math.floor(dif / 1000) % 60;
        var h = h < 10 ? "0" + h : h;
        var m = m < 10 ? "0" + m : m;
        var s = s < 10 ? "0" + s : s;
        timerText.innerHTML = d + " DAYS " + h + " HOURS " + m + " MINUTES " + s + " SECONDS TO GO FOR CHRISTMAS!";
        if (dif == 0){
            clearInterval(counter);
            timerText.innerHTML = "CHRISTMAS HAS FINISHED!";
        } 
    }

    var counter = setInterval(countdown,1000);