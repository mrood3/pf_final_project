var form = document.getElementById("plants_by_garden_type_form");

form.addEventListener("submit", function(event){
  event.preventDefault();
  // declare variables
  var userInput = document.getElementById("userInput").value;
  var keepLooping = true;
  var shadeGarden= ["hosta", "bleeding heart", "ferns", "coral bells", "lily of the valley", "solomon's seal"];
  var sunGarden= ["coneflower", "phlox", "asiatic lily", "salvia", "bee balm", "black-eyed susan", "coreopsis"];
  var output = "";
        
  while(keepLooping) {
    if(userInput === "done") {
      //entered done so stop
      keepLooping = false;
      output = "Happy Planting!";
    } else {
      if(userInput === "shade") {
      output = shadeGarden.join(", ");
      } else {
        if(userInput === "sun") {
        output = sunGarden.join(", ");
        } else {
          output = "Try Again.";
        }
      }  
    }
  
  break;
}
  var outputArea = document.getElementById("output");
  outputArea.innerHTML = output;
});
  

