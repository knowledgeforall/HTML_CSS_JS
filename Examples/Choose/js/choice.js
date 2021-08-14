<!--choice.js-->
//create the function for the HTML button:
function choose() {
//create variables:
var text;
//create prompt with default answer:
var favPlanet = prompt("Which is your favorite inner rocky planet?", "Earth");
//convert answer to lowercase:
var input = favPlanet.toLowerCase();
//input normalized answer to switch/case:
 switch(input) {
    case "mercury":
      text = "You choose Mercury! Mercury is the closest planet to the sun!";
      document.getElementById("hiddenMercury1").style.display = "block";
      break;
    case "venus":
      text = "You Choose Venus! Venus is the hottest planet, and spins opposite of all the other planets!";
      document.getElementById("hiddenVenus1").style.display = "block";
      break;
    case "earth":
      text = "You choose Earth! Earth is beautiful and a safe choice!";
      document.getElementById("hiddenEarth1").style.display = "block";
      break;
    case "mars":
      text = "You choose Mars! Mars used to have a thicker atmosphere and oceans";
      document.getElementById("hiddenMars1").style.display = "block";
      break;
      
    default:
      text = "That is not an inner rocky planet.";
  }
//access HTML element to input response (var text):
  document.getElementById("choice").innerHTML = text;
}