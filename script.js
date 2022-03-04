$(document).start(function () {

    
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




































//var today = moment();

// var current = moment().add(1, "hours").hour();

// $("#currentDay").text(moment().format("LLL"));

// $(".time-block").each(function(){
//     var hour = $(this).data("hour");
//     var addMessage = localStorage.getItem(hour);
//     $(this).find(".description").text(addMessage);
//     $(this).addClass(hour > current ? 'future' : hour < current ? 'past' : 'present');
// });

// $(".time-block").on("click", "saveButton", function(){
//     var result = $(this).parent().find(".description").val();
//     localStorage.setItem($(this).parent().data("hour"),result);
// });

// var textArea = document.querySelector(".description")
// var saveButton = document.querySelector(".saveButton")


// saveButton.addEventListener("click",function(event){
//             event.preventDefault()
//             localStorage.setItem("inputValue", JSON.stringify(textArea.value));
//         })

// var curr = moment().add(1, "hours").hour();
// moment().format("MMM Do YY");
// var currentDay = document.getElementById("currentDay");
// var currentTime = moment().format("LLL");
// currentDay.textContent += currentTime;
// $("currentDay").text(moment().format("LLL"));
// $(".row").each(function(){
//     var hour = $(this).data("hour");
//     var message = localStorage.getItem(hour);
//     $(this).find(".description").text(message)
//     $(this).addClass(hour > current ? 'future' : hour < current ? 'past' : 'present');
// })
// $(".row").on("click", "saveButton", function(){
//     var result = $(this).parent().find(".description").val();
//     localStorage.setItem($(this).parent().data("hour"),result);

//     saveButton.addEventListener("click",function(event){
//         event.preventDefault()
//         localStorage.setItem("inputValue", JSON.stringify(textArea.value));
//     })
// })