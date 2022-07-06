for(var i=0;i<=6;i++)
document.querySelectorAll("button")[i].addEventListener("click",clickedMe);

function clickedMe() {
   var alpha=this.innerHTML;
   
   
   keyboardSound(alpha);
}
document.addEventListener("keypress",function(event){ keyboardSound(event.key);});

 

function keyboardSound(key)
{
    switch(key)
    {
     case "w":
         var music = new Audio("sounds/tom-1.mp3");
         music.play();
         break;
         case "a":
             var music = new Audio("sounds/tom-2.mp3");
             music.play();
             break;
             case "s":
                 var music = new Audio("sounds/tom-3.mp3");
                 music.play();
                 break;
                 case "d":
                     var music = new Audio("sounds/tom-4.mp3");
                     music.play();
                     break;
                     case "j":
                         var music = new Audio("sounds/snare.mp3");
                         music.play();
                         break;
                         case "k":
                             var music = new Audio("sounds/crash.mp3");
                             music.play();
                             break;
                             case "l":
                                 var music = new Audio("sounds/kick-bass.mp3");
                                 music.play();
                                 break;
                                                                                             
    }
}