// Write your code here!
//Remove element using DOM
const element = document.getElementById("main");
element.remove();
//Create elements using DOM
const newHeader = document.createElement("h1");
newHeader.id = 'victory';
newHeader.innerHTML = 'YOUR-NAME is the champion';