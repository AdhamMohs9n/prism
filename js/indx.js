function HoverButton(){

document.getElementById("butt").style.backgroundColor ="#00d69d";


}
function Hover(){

    document.getElementById("butt").style.backgroundColor =" #00bc8a";
    
    
    }
    
//the first


// the dad started

function show()
{

    document.getElementById("click").style.visibility ="visible";

}

function hide()
{

    document.getElementById("click").style.visibility ="hidden"

}


// the end of  dad

// START OF THE THERD PART

var a = 0

function hover1(){

    a = a +1;
document.getElementById("img1").innerHTML = a;

}

var b = 0
function hover2(){

    b = b +1;
document.getElementById("img2").innerHTML = b;

}

var c = 0
function hover3(){

    c = c +1;
document.getElementById("img3").innerHTML = c;

}


// end OF THE THERD PART



function cli() 
{

    document.getElementById("clicks").style.color = "#0968b9";
   document.getElementById("clicks").style.textDecoration = "underline";


}



function cli1() 
{

    document.getElementById("clicks1").style.color = "#55acee";
   document.getElementById("clicks1").style.textDecoration = "underline";


}








function cli2() 
{

    document.getElementById("clicks2").style.color = "brown";
   document.getElementById("clicks2").style.textDecoration = "underline";


}



function cli3() 
{

    document.getElementById("clicks3").style.color = " #000";
   document.getElementById("clicks3").style.textDecoration = "underline";


}


function cli4() 
{

    document.getElementById("clicks4").style.color = "red";
   document.getElementById("clicks4").style.textDecoration = "underline";


}

// end OF THE ford PART

function vilo()
 {

    var t = prompt("Name . .");
    if(t=="adham")
    {
    window.location = "index.html"

}


}


/*
// cols rols conten by je

$(function(){
   
    "use strick";
    
    var max = 100 ;
    
    $('textarea').keyup(function(){
        
        
        
       var length = $(this).val().length ;
        
        var character = max - length ;
        
        $("#char").text(character);
        
        
    });
    
     
 })

*/
