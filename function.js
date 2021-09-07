// Write a JavaScript function that takes an array and a value and search that value in the given array. Write a function which takes two arguments - an array and a value. If the value provided in the argument is found in the array, the function should return the position of the element in an array. If the element is not -found, the function should return "-1".

var subject_array = ['English','Hindi','Punjabi','Maths']
var find_value = 'Punjabiiiis'

function searchElement(array,value) {

if(array.indexOf(value) == -1) {
    return "value not found" + " " + array.indexOf(value)
   // return "value not found -1"
}
else{
    return "value found at position" + " " + array.indexOf(value)
}
return ;
}
//searchElement(subject_array,find_value)

console.log(searchElement(subject_array,find_value))


//Create 2 div elements one having id=”root” and another having class=”blue-white” and have some header elements inside. create 2 tags one having no attributes to it and another having class=”blue-white” and have some text inside. I) change the text color of the element with id=”root” to red on mouseover event. ii) for the class=”blue-white” set the CSS properties as background color blue and text color white on mouseover event. iii) for p tag which doesn't have any attributes, change the font size to 50px on mouseover event;

//-------Div 1 Func------//
function mouseoverFunc() {
    let firstDiv = document.getElementById("root");
    firstDiv.style.color = " red ";

}

function mouseleaveFunc() {
    let firstDiv = document.getElementById("root");
    firstDiv.style.color = " black";
}

//-------Div 2 Func-------//
function divTwoFunc() {
    let divTwo = document.getElementsByClassName("blue-white");
    for(let i=0; i<divTwo.length; i++){
      divTwo[i].style.backgroundColor = "blue";
        divTwo[i].style.color = "white";
        divTwo[i].style.padding = "20px";
    }
}

function mouseleaveFunc2() {
let divTwo = document.getElementsByClassName("blue-white");
for(let i=0; i<divTwo.length; i++) {
   divTwo[i].style.backgroundColor = "white";
    divTwo[i].style.color = "black";

}
}

function pTagMouseover() {
    let pTag = document.getElementsByTagName("p")[0];
    pTag.style.fontSize = "50px";
}







