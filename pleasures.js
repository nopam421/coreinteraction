var startTime; 
var endTime; 

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
$(this).css("opacity",(counter*0.01 + 0.07));

counter++;

});

var data = ["Long showers", "Watching daily vlogs on YouTube", "Laying in bed all Day watching Netflix","French fries","Stalking people on the Internet", "Singing in the shower" , "McDonalds" , "Watching senseless movies" , "Thrift shopping","Going to events just to grab free food" , "Peeling glue off my hands" , "Climbing on roofs" , "Eating Flaming Hot Cheetos 24x7","Admiring myself all day" , "Watching Disney and cartoons" , "Watching reality TV shows" , "Googling myself" , "Biting my nails" ,"Farting" , "Burping" , "Sleeping naked" , "Rewatching chick flicks like Clueless and The Clique" , "Eating cold pizza" , "Flirting" , "Watching make-up videos on YouTube" , "Smoking up" , "Stalking myself on Instagram" , "Stealing wifi" , "Sighing loudly behind slow walkers" , "Listening to Taylor Swift’s songs" , "Skinny dipping" , "Sitting in the shower" , "Rolling in sand" , "Listening to old school Miley Cyrus" , "Listening to Britney Spears" , "Watching Pretty Little Liars" , "Watching The Real Housewifes" , "Watching Keeping Up with the Kardashians" , "Day drinking" , "Eating from other people’s plate" , "Rolling a tight joint" , "Putting M&Ms in my popcorn" , "Eavesdropping" , "Dancing in the shower" , "Re-gifting" , "Eating cheese (I’m lactose intolerant)" , "Rummaging through the lost and found at the laundromat" , "Masturbation", "Hardcore cuddling", "Sexting", "Stalking my ex-boyfriend on Facebook", "Talking to myself", "Playing air guitar" , "Wearing the same pants for more than 3 times a week ", "Peeling the skin near my fingernails", "Popping pimples", "Porn", "Looking at my boobs" , "Looking at myself naked in the mirror" , "Peeing in the shower" , "Listening to Disney music" , "Binge watching Naruto", "RuPaul’s Drag Race (TV SHOW)", "Listening to nickleback", "Burning things", "Smelling unusual things", "Smelling my fart", "Secretly eating my roommates food" , "Watching strangers on dates", "Writing aggressive Yelp reviews", "Peeling sunburnt skin", "Picking ingrown hair","Picking my nose","Leading guys on", "Plucking my eyelashes out with mascara","Sex in public places", "Playing Club Penguin", "Turning my underwear inside out to repeat it", "Reading Fifty Shades of Gray", "BDSM", "Smelling car keys","Driving with my knees","Eating cereal in the shower","Appreciating my dump after taking it","Rummaging through people’s trash", "Licking my cat", "Watching videos of people popping pimples", "Playing Kim Kardashian’s Hollywood game", "Public urination", "Eating food that fell on the ground", "Biting my toe nails", "Eating my own boogers", "Rubbing my crotch and smelling it", "Shoplifting", "Fantasizing about my family members", "Cocaine", "Voting for Donald Trump"]; 

window.addEventListener('keypress', function (event) {
  if (event.key = 32) { 
    console.log('down');

    startTime = Date.now();
    console.log(startTime);

  } 

});

window.addEventListener('keyup', function (event) {
  if (event.key = 32) { 
    console.log('up');

    endTime = Date.now();
    console.log(endTime);

    var deltaTime = endTime - startTime; 
    console.log(deltaTime);

  } 

});

var selected;
var loop;
var string; 

window.addEventListener('keypress', function (event){
  selected = 0;

setInterval(function(){ 
  $("circle_" + selected);}, 50);


loop = setInterval(function(){}, 50); 

clearInterval(loop); 

string = data[selected];

if (keypress = true) { 
   $(".text").html('Long showers');
}

});


