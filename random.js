


let num;
num = Math.floor(Math.random()*3)
switch (num) {
  case 0:
    num = "1";
    break;
  case 1:
    num = "2";
    break;
  case 2:
    num = "3";
    break;
}
// document.getElementById("gene").innerHTML = "This is " + num;


let result;
let count = 0; 
let text = "❤" ;
let link = "<a href='pg3.html'>❤️</a>";
let linkf = "<a href='chance.html'>❤️</a>";


// function determine(){


//   let rando = Math.floor(Math.random()*2)
//   if 
// }

function displayResult() {
  if (num == 1 ){
    result = "<a href='pg2.html'>" + text + "</a>";
    localStorage.setItem("Choice","1");
    

  }

  if (num == 2 ){
    result = "<a href='pg2.html'>" + text + "</a>";
    localStorage.setItem("Choice","2");
    

  }

  if (num == 3 ){
    result = "<a href='pg3.html'>" + text + "</a>";
    localStorage.setItem("Choice","3");
    
  }

  document.getElementById("myHeader").innerHTML = result;

}




function second(){
if(typeof(Storage) !=="undefined"){
    if (localStorage.getItem("Choice") == 1){
      document.getElementById("display").innerHTML = localStorage.getItem("Choice");
    }

    if (localStorage.getItem("Choice") == 2){
      document.getElementById("display").innerHTML = localStorage.getItem("Choice");
    }

    if (localStorage.getItem("Choice") == 3){
      document.getElementById("display").innerHTML = localStorage.getItem("Choice");
    }

  }
 else{
       document.getElementById("display").innerHTML = "Sorry, your browser does not support web storage..."; 

    }
}



function btnone(){

localStorage.setItem("btnPressedOne","1");
document.getElementById("displayBtn").innerHTML = localStorage.getItem("btnPressedOne"); 

if (localStorage.clickcount < num) {
      localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else if(localStorage.clickcount = num){
      localStorage.clickcount=0
      document.getElementById("btn1").innerHTML = link;
      timeChange();

    } else {
      localStorage.clickcount = 1;
      
      document.getElementById("displayBtn2").innerHTML = localStorage.clickcount;
    }

    document.getElementById("displayBtn2").innerHTML = localStorage.clickcount;
}

function btntwo(){
localStorage.setItem("btnPressedTwo","2");
document.getElementById("displayBtn").innerHTML = localStorage.getItem("btnPressedTwo"); 

if (localStorage.clickcount < num) {
      localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else if(localStorage.clickcount = num){
      localStorage.clickcount=0
      document.getElementById("btn2").innerHTML = link;
      timeChange();

    } else {
      localStorage.clickcount = 1;
      
      document.getElementById("displayBtn2").innerHTML = localStorage.clickcount;
    }

    document.getElementById("displayBtn2").innerHTML = localStorage.clickcount;

}

function btnthree(){
localStorage.setItem("btnPressedThree","3");
document.getElementById("displayBtn").innerHTML = localStorage.getItem("btnPressedThree"); 

if (localStorage.clickcount < num) {
      localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else if(localStorage.clickcount = num){
      localStorage.clickcount=0
      document.getElementById("btn3").innerHTML = linkf;
      timeChange();

    } else {
      localStorage.clickcount = 1;
      
      document.getElementById("displayBtn2").innerHTML = localStorage.clickcount;
    }

    document.getElementById("displayBtn2").innerHTML = localStorage.clickcount;

}

function btnfour(){
localStorage.setItem("btnPressedFour","4");
document.getElementById("displayBtn").innerHTML = localStorage.getItem("btnPressedFour"); 

if (localStorage.clickcount < num) {
      localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else if(localStorage.clickcount = num){
      localStorage.clickcount=0
      document.getElementById("btn4").innerHTML = link;
      timeChange();

    } else {
      localStorage.clickcount = 1;
      
      document.getElementById("displayBtn2").innerHTML = localStorage.clickcount;
    }

    document.getElementById("displayBtn2").innerHTML = localStorage.clickcount;

}

function timeChange(){
localStorage.setItem("hr",h);
localStorage.setItem("min",m);
localStorage.setItem("sec",s);

}




