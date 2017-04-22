for (var dots = 0; dots < 99; dots++) {
    $(".wrapper").append ("<div class='circle'></div>");
}


var counter = 0;

$(".circle").each(function(){

    $(this).css("border-radius","100%");
    $(this).css("opacity",(counter/100));
    $(this).css("height",(18));
    $(this).css("width",(18));
    $(this).css("display" , "inline-block");

    counter++;
    
});



