
//Using CLOSURES to solve two problems
document.addEventListener("DOMContentLoaded", function(){
//PART A
//Build 6 paragraphs with filler text inside #main. When you click on the paragraph
  //the index number of the paragraph becomes the innerHTML. Eg:  1, 2, 3, 4, 5, 6
  (function clickPara ( ){
  for(var p=1; p < 6; p++){
    var para = document.createElement("p");
    para.innerHTML = "I Love JavaScript " + p + " closure at a time";
    para.addEventListener("click", (function(j){
      return function( ){
        alert(j);
      }
    })(p) );
    var mainDiv =document.getElementById("main");
    mainDiv.appendChild(para);
  }
})();
  //PART B
  //after the user clicks on the heading inside #second, start adding list items to the
  //unordered list #theList. Use a for loop and a setTimeout. The delay for the first list item to appear
  //is one second, two second delay for the second one, three second delay for the third and so on.
  //Add a total of five list items to the ul.
    (function addItem ( ){
    var H = document.querySelector("#second h2");
    H.addEventListener("click", (function(a){
        var list = document.querySelector("#theList");
        var item = document.createElement("li");
        for(var i=1; i < 6; i++){
            setTimeout(function() {
                item.innerHTML = "I am listItem #" + i;
            }, i)
        }
      return function( ){
        alert(a);
      }
    })(i) );
    var UL =document.querySelector("#second ul");
    UL.appendChild(item);

});
