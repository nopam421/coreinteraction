$("#screen > div:gt(0)").hide();

setInterval(function() {
  $('#screen > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#screen');
}, 3000);

console.log("loaded");




