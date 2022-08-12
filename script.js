/* .js files add interaction to your website */

var facts = [
"Neskanta first nation has a boil advisory that has lasted for over 20 years",
"July 2010, the UN declared water and sanitation human rights, acknowledging that they are essential to the realization of all other rights",
"73% of first nations water systems are at high or medium risk of contamination",
"There are currently 31 long-term drinking water advisories in effect in 27 communities",
"The completion of a new water treatment system can take 3-4 years to complete.",
"A 2016 budget provided 1.8B over 5 years to improve First Nation water and wastewater systems",
"In December 2020, the federal government announced over 1.5B in addition to the 2016 budget for funding"
            ];

counter = 0; 

var Btn = document.getElementById("factBtn");
var factDisplay = document.getElementById("factDisplay");

addEventListener("click", display);

function display(){
  factDisplay.innerHTML = facts[counter];
   counter++;
   if(counter == facts.length) {
    counter = 0; 
  }
  
}

var displayScript = document.getElementById("scriptReturn");
var scriptBtn = document.getElementById("scriptBtn");

if(scriptBtn){
  scriptBtn.addEventListener("click", generateScript);
}

function generateScript(){

  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;
  var cause = document.getElementById("cause").value;
  displayScript.innerHTML = "Hello, my name is " + name + " and I live in " + location + ". I am writing to you to express my acknowledgement of the struggles you and your community have faced. I have learned about the various struggles you all have faced, especially  " + cause + ". Let me know how I can do my part in helping indigenous communities attain clean drinking water."
}


