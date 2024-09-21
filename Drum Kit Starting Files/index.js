

var noOfButtons = document.querySelectorAll(".drum").length;


for (var i = 0; i < noOfButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
         
        // var content = document.querySelectorAll(".drum")[i].innerHTML;

        var content = this.innerHTML;
        makeSound(content);
        buttonAnimation(content);

       
        
});
}

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
} )

function makeSound(key) {


     switch (key) {
            case ("w"):
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play(tom1);
                break;
            
             case ("a"):
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play(tom1);
                break;
            
             case ("s"):
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play(tom1);
                break;
            
             case ("d"):
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play(tom1);
                break;
            
             case ("j"):
                var crash = new Audio("sounds/crash.mp3");
                crash.play(tom1);
                break;
            
             case ("k"):
                var bass = new Audio("sounds/kick-bass.mp3");
                bass.play(tom1);
                break;
            
             case ("l"):
                var snare = new Audio("sounds/snare.mp3");
                snare.play(tom1);
                break;
        }

}

function buttonAnimation(currentKey) {

    var activeKey = document.querySelector("." + currentKey);

    activeKey.classList.add("pressed");
    
    setTimeout(function(){
        activeKey.classList.remove("pressed")
    },100)


    
}


