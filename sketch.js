function setup() {
  createCanvas(1000, 500);
  loadJSON("https://api.citybik.es/v2/networks/citi-bike-nyc", drawData)


}

function drawData(data) { 
  console.log(data);
  ellipse(100,150,20,20); 
  color(0);
  var stations = object.network.stations;
  console.log(stations);
  background(40,90,200);
  fill(0, 255, 255, stations); // use the humidity value to set the alpha

}
