for (var dots=0 ; dots <99; dots++){
  $("#wrapper").append("<div class='circle'></div>");

  function addName() { 
    var add = document.getElementsByClassName("circle");
    for (n = 0, length = add.length; n < length; n++) { 
      add[n].id = "circle_" + (n+1); 
    }
  }

  addName();
};

var counter = 0; 

$(".circle").each(function(){
  $(this).css("border-radius", "100%");
  $(this).css("width",(18));
  $(this).css("height",(18));
  $(this).css("opacity",(counter/100));
  $(this).css("display", "inline-block");

  counter++;

});

var space = false; 
  $(function(){
    $(document).keyup(function(event){
      if (event.keyCode == 32) {
        space = false; 
      }
    }).keydown(function(event){
      if (event.keyCode == 32){ 
        space = true;
        console.log('space');
      }

    });
    
  });