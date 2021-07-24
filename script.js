var apple = 1;
var countElement = document.querySelector("#count");
var secondCount= document.querySelector('#counts');
var thirdCount= document.querySelector('#countt');


function add1(){
  apple++;
  countElement.innerText =apple + " like(s)";
  secondCount.innerText =apple + " like(s)";
  thirdCount.innerText =apple + " like(s)";
}