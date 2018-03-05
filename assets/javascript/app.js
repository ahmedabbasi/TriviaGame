/// Define Variables
// Define the on click functions on start div
// Start the Counter
// If the Questions answered is correct show correct answer(increment correct answers)
// If the Questions answered is wrong  show its wron and display the correct (increment wrong answer)
// If the all answers provided within time show the status
// If time is up show the status
window.onload = function () {
    $("#start-nav").click(timer.start);
    $("#content").hide();
    $("#done-nav").hide();
    $("#score-nav").hide();
    $("#start-bar").click(function () {
        $("#start-bar").hide();
        $("#content").show();
        $("#done-nav").show();
    });
    $("#done-bar").click(function () {
        $("#content").hide();
        $("#score-nav").show();
        $("#done-nav").hide();
        $("#time-display").hide();
    })
};

//var timerRunning = false;
var countCorrect = 0;
var countWrong = 0;
var unAnswered = 0;
var intervalId = 0;


function time0() {
    var selValue1 = $('input[name=q1]:checked').val();
    var selValue2 = $('input[name=q2]:checked').val();
    var selValue3 = $('input[name=q3]:checked').val();
    var selValue4 = $('input[name=q4]:checked').val();
    var selValue5 = $('input[name=q5]:checked').val();

    if (selValue1 === "answer 2 - q1") {
        countCorrect++;
        $("#correctAns").text("Correct Answers: " + countCorrect);
    } else if ((selValue1 === "answer 1 - q1") || (selValue1 === "answer 3 - q1")) {
        countWrong++;
        $("#wrongAns").text("Wrong Answers: " + countWrong);
    } else {
        unAnswered++;
        $("#UnAns").text("UnAnswered: " + unAnswered);
    }



    if (selValue2 === "answer 3 - q2") {
        countCorrect++;
        $("#correctAns").text("Correct Answers: " + countCorrect);
    } else if ((selValue2 === "answer 1 - q2") || (selValue2 === "answer 2 - q2")) {
        countWrong++;
        $("#wrongAns").text("Wrong Answers: " + countWrong);
    } else {
        unAnswered++;
        $("#UnAns").text("UnAnswered: " + unAnswered);
    }


    if (selValue3 === "answer 1 - q3") {
        countCorrect++;
        $("#correctAns").text("Correct Answers: " + countCorrect);
    } else if ((selValue3 === "answer 2 - q3") || (selValue3 === "answer 3 - q3")) {
        countWrong++;
        $("#wrongAns").text("Wrong Answers: " + countWrong);
    } else {
        unAnswered++;
        $("#UnAns").text("UnAnswered: " + unAnswered);
    }


    if (selValue4 === "answer 1 - q4") {
        countCorrect++;
        $("#correctAns").text("Correct Answers: " + countCorrect);
    } else if ((selValue4 === "answer 2 - q4") || (selValue4 === "answer 3 - q4")) {
        countWrong++;
        $("#wrongAns").text("Wrong Answers: " + countWrong);
    } else {
        unAnswered++;
        $("#UnAns").text("UnAnswered: " + unAnswered);
    }


    if (selValue5 === "answer 3 - q5") {
        countCorrect++;
        $("#correctAns").text("Correct Answers: " + countCorrect);
    } else if ((selValue5 === "answer 2 - q5") || (selValue5 === "answer 1 - q5")) {
        countWrong++;
        $("#wrongAns").text("Wrong Answers: " + countWrong);
    } else {
        unAnswered++;
        $("#UnAns").text("UnAnswered: " + unAnswered);
    }
}


var timer = {
    time: 10,



    start: function () {
        clearInterval(intervalId);
        intervalId = setInterval(timer.count, 1000);
        var currentTime = timer.timeConverter(timer.time);

    },

    count: function () {
        timer.time--;
        var currentTime = timer.timeConverter(timer.time);
        $("#time-display").text("Time Remaining: " + currentTime);
        if (timer.time === 0) {
            timer.stop();
            $("#content").hide();
            $("#score-nav").show();
            $("#done-nav").hide();
            time0();
            //event.preventDefault();

        }
    },

    stop: function () {
        timer.time === 0;
        clearInterval(intervalId);
        //timerRunning=false;
    },

    timeConverter: function (t) {

        //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (minutes === 0) {
            minutes = "00";
        } else if (minutes < 10) {
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    }
}

if (countCorrect === 0) {
    $("#correctAns").text("Correct Answers: " + 0);
}
if (countWrong === 0) {
    $("#wrongAns").text("Wrong Answers: " + 0);
}
if (unAnswered === 0) {
    $("#UnAns").text("UnAnswered: " + 0);
}



$("#done-bar").on('click', function (event) {
    // Prevent page from reloading
    event.preventDefault();
    timer.stop();
    time0();


})