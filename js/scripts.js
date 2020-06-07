$("document").ready(function(){ 
    // flips cards when clicked
    $(".whole-card").click(function(){
        $(this).toggleClass("flip");
    });
});