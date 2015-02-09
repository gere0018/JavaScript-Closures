
//Using CLOSURES to solve two problems
document.addEventListener("DOMContentLoaded", function(){
//PART A
//Build 6 paragraphs with filler text inside #main. When you click on the paragraph
  //the index number of the paragraph becomes the innerHTML. Eg:  1, 2, 3, 4, 5, 6
  function clickPara ( ){
  for(var p=1; p <= 6; p++){
    var para = document.createElement("p");
    para.innerHTML = "I Love JavaScript " + p + " closure at a time";
    para.addEventListener("click", (function(j, k){
    // this function returns a function. We return a function to lock the value of P and para.
        return function(){
        k.innerHTML = j;
      }
    }) (p, para));// We need to use "immediately invoked function expression" so we can capture the value of p and para at the time it is clicked.

    var mainDiv =document.getElementById("main");
    mainDiv.appendChild(para);
  }
}
    clickPara();
  //PART B
  //after the user clicks on the heading inside #second, start adding list items to the
  //unordered list #theList. Use a for loop and a setTimeout. The delay for the first list item to appear
  //is one second, two second delay for the second one, three second delay for the third and so on.
  //Add a total of five list items to the ul.
    (function addItem ( ){
    var H = document.querySelector("#second h2");
    var list = document.querySelector("#theList");
    for(var i=1; i < 6; i++){
    var item = document.createElement("li");
    H.addEventListener("click", (function(i, item){
        return function( ){
            window.setTimeout(function() {
                item.innerHTML = "I am listItem #" + i;
                list.appendChild(item);
            }, (i*1000));
        }
    })(i, item) );
    }

   })();

});
