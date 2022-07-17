// alert("hello")
// document.querySelector("button").addEventListener("click",handleclick)
// function handleclick()
// {
//     alert("I got Clicked");
// }


// ````````````````````````````````````````````````````````````````````
// DETECTING BUTTON PRESS
//`````````````````````````````````````````````````````````````````````
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function handleclick() {
          //     var audio=new Audio("sounds/tom-1.mp3");
          //     audio.play()
          this.style.color="#DA0463"
          var ButtonInnerHtml = this.innerHTML;

            switch(ButtonInnerHtml){
                case "w":
                    var audio=new Audio("sounds/tom-1.mp3");
                    audio.play();
                    
                    // this.style.color.transitionDelay = "10s";
                    // this.style.color="#DA0463";
                    
                  break;
                case "a":
                    var audio=new Audio("sounds/tom-2.mp3");
                    audio.play();
                    
                    
                  break;
                case "s":
                    var audio=new Audio("sounds/tom-3.mp3");
                    audio.play();
                    
                  break;
                case "d":
                    var audio=new Audio("sounds/tom-4.mp3");
                    audio.play();
                    
                  break;
                case "j":
                    var audio=new Audio("sounds/snare.mp3");
                    audio.play();
                    
                  break;
                case "k":
                    var audio=new Audio("sounds/crash.mp3");
                    audio.play();
                    
                  break;
                case "l":
                    var audio=new Audio("sounds/kick-bass.mp3");
                    audio.play();
                    
                  break;

                default:console.log("ButtonInnerHtml");
              }
              
    makesound(ButtonInnerHtml);
    buttonAnimation(ButtonInnerHtml )

    });
}

 // ```````````````````````````````````````````````````````````````````````
// DETECTING KEYBOARD PRESS
//``````````````````````````````````````````````````````````````````
document.addEventListener("keypress",function(event){
    // alert("A key is pressed");
    // console.log(event);
    makesound(event.key);
    buttonAnimation(event.key);
}); 


function makesound(key){
    switch(key){
        case "w":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
                       
          break;
        case "a":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            
            
          break;
        case "s":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            
          break;
        case "d":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            
          break;
        case "j":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
          
          break;
        case "k":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
          
          break;
        case "l":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            
          break;

        default:console.log("key");
      }
}

function buttonAnimation(currentKey)
{
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  },200);
}