/**
 * Drum Kit - Interactive web drum kit that responds to both mouse clicks and keyboard input.
 * Keys: w, a, s, d (toms), j (snare), k (crash), l (kick-bass).
 */

// Attach click handlers to all drum buttons
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
   
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

// Listen for keyboard input to trigger drum sounds
document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});


/**
 * Plays the drum sound associated with the given key.
 * @param {string} key - The key pressed (w, a, s, d, j, k, or l).
 */
function makeSound(key) {
    switch (key) {
            
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;
        
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;
        
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;
        
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;
        
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;
        
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;
        
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;

        default:
            console.log(key);
    }
}

/**
 * Applies a brief "pressed" visual effect to the drum button.
 * @param {string} currentKey - The key/letter of the button to animate.
 */
function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    if (!activeButton) {
        return;
    }
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}