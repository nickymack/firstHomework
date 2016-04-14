$( document ).ready(function() {

var userInput = [];
 
function addTo() {
   userInupt.push(document.getElementById("number").value);
   console.log(userInput);
}
$("submit").onClick(addTo());
});