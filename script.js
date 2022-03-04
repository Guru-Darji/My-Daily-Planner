$(document).ready(function () {

    
    $("#currentDay").text(moment().format("LLL")); 
    
    $(".saveButton").on("click", function () {
        
        console.log(this);
        var userDescription = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id"); 
        localStorage.setItem(time, userDescription);
    })


    $("#8 .description").val(localStorage.getItem("8"));
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
    $("#18 .description").val(localStorage.getItem("18"));
    $("#19 .description").val(localStorage.getItem("19"));
    $("#20 .description").val(localStorage.getItem("20"));
    $("#21 .description").val(localStorage.getItem("21"));

    function trackingHour(){
    var currentHour = moment().hour(); 

        
        $(".time-block").each(function () {
            var hourBlock = parseInt($(this).attr("id")); //prior knowleadge on pasreInt
            console.log( hourBlock, currentHour)

            
            if (hourBlock < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (hourBlock === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");-
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    trackingHour(); 
})



































