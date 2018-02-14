const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets");

function solarSystem(array){
    
    array.forEach(function(item){
        planetEl.innerHTML += ` ${item}`;
    })
}

solarSystem(planets);

/*
    Use the map method to create a new array where the 
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
const planetDos = document.getElementById("planetsDos");
const planetsTres = document.getElementById("planetsTres");
var properPlanets = "";

// okay so this took no time at all
for (var i = 0; i < planets.length; i++){
    properPlanets += ` ${planets[i].charAt(0).toUpperCase() + planets[i].substr(1).toLowerCase()}`;
}

planetDos.innerHTML = properPlanets;
console.log("proper planets", properPlanets)


// and now for something a little different
const planetsMap = planets.map(w => w.charAt(0).toUpperCase() + w.slice(1));

planetsTres.innerHTML = planetsMap;
console.log("planets map", planetsMap);


/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/


// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]