//Set Current Date in Jumbotron
//var today = moment().format("dddd, MMMM Do YYYY");

//Display the Current Day
$("#currentDay").html(moment().format("dddd, MMMM Do YYYY"));

//Run a function to populate descriptions from local storage
localtoDisplay();

//Run a function to display styling based on the current time
currentTime();

//Capture input for 9AM
$("#9submit").on("click",function(){
    localStorage.setItem("9time", $("#9time").html());
    localStorage.setItem("9description", $("#9description").val());
})

//Capture input for 10AM
$("#10submit").on("click",function(){
    localStorage.setItem("10time", $("#10time").html());
    localStorage.setItem("10description", $("#10description").val());
})

//Capture input for 11AM
$("#11submit").on("click",function(){
    localStorage.setItem("11time", $("#11time").html());
    localStorage.setItem("11description", $("#11description").val());
})

//Capture input for 12PM
$("#12submit").on("click",function(){
    localStorage.setItem("12time", $("#12time").html());
    localStorage.setItem("12description", $("#12description").val());
})

//Capture input for 1PM
$("#1submit").on("click",function(){
    localStorage.setItem("1time", $("#1time").html());
    localStorage.setItem("1description", $("#1description").val());
})

//Capture input for 2PM
$("#2submit").on("click",function(){
    localStorage.setItem("2time", $("#2time").html());
    localStorage.setItem("2description", $("#2description").val());
})

//Capture input for 3PM
$("#3submit").on("click",function(){
    localStorage.setItem("3time", $("#3time").html());
    localStorage.setItem("3description", $("#3description").val());
})

//Capture input for 4PM
$("#4submit").on("click",function(){
    localStorage.setItem("4time", $("#4time").html());
    localStorage.setItem("4description", $("#4description").val());
})

//Capture input for 5PM
$("#5submit").on("click",function(){
    localStorage.setItem("5time", $("#5time").html());
    localStorage.setItem("5description", $("#5description").val());
})


//Function to pull input values from local storage and display
function localtoDisplay (){
var nineDescription = localStorage.getItem("9description")
$("#9description").val(nineDescription);

var nineDescription = localStorage.getItem("10description")
$("#10description").val(nineDescription);

var nineDescription = localStorage.getItem("11description")
$("#11description").val(nineDescription);

var nineDescription = localStorage.getItem("12description")
$("#12description").val(nineDescription);

var nineDescription = localStorage.getItem("1description")
$("#1description").val(nineDescription);

var nineDescription = localStorage.getItem("2description")
$("#2description").val(nineDescription);

var nineDescription = localStorage.getItem("3description")
$("#3description").val(nineDescription);

var nineDescription = localStorage.getItem("4description")
$("#4description").val(nineDescription);

var nineDescription = localStorage.getItem("5description")
$("#5description").val(nineDescription);
}

//console.log($("#9time").html())
//$(".rowOne").addClass("past");

//Function to capture the current date and alter styling
function currentTime (){
    now = moment().format("H");
    console.log(now);
        if (9 < now){
            $("#9block").addClass("past");

        }
        else if (9==now){
            $("#9block").addClass("present");
        }

        else if (9>now){
            $("#9block").addClass("future");
        }

        if (10 < now){
            $("#10block").addClass("past");

        }
        else if (10==now){
            $("#10block").addClass("present");
        }

        else if (10>now){
            $("#10block").addClass("future");
        }

        if (11 < now){
            $("#11block").addClass("past");

        }
        else if (11==now){
            $("#11block").addClass("present");
        }

        else if (11>now){
            $("#11block").addClass("future");
        }


        if (12 < now){
            $("#12block").addClass("past");

        }
        else if (12==now){
            $("#12block").addClass("present");
        }

        else if (12>now){
            $("#12block").addClass("future");
        }
    

        if (13 < now){
            $("#1block").addClass("past");

        }
        else if (13==now){
            $("#1block").addClass("present");
        }

        else if (13>now){
            $("#1block").addClass("future");
        }


        if (14 < now){
            $("#2block").addClass("past");

        }
        else if (14==now){
            $("#2block").addClass("present");
        }

        else if (14>now){
            $("#2block").addClass("future");
        }

        if (15 < now){
            $("#3block").addClass("past");

        }
        else if (15==now){
            $("#3block").addClass("present");
        }

        else if (15>now){
            $("#3block").addClass("future");
        }

        if (16 < now){
            $("#4block").addClass("past");

        }
        else if (16==now){
            $("#4block").addClass("present");
        }

        else if (16>now){
            $("#4block").addClass("future");
        }
        if (17 < now){
            $("#5block").addClass("past");

        }
        else if (17==now){
            $("#5block").addClass("present");
        }

        else if (17>now){
            $("#5block").addClass("future");
        }

}
