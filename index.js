/**
 * Drum Kit — play samples via mouse or keyboard.
 *
 * HTML: each `.drum` button’s text is the key letter (w, a, s, d, j, k, l).
 * CSS: `.pressed` on `.<letter>` gives the short “key down” highlight (see styles.css).
 * Audio: files under `sounds/`; names are paired in `makeSound()` below.
 *
 * Flow: user input → `makeSound(key)` + `buttonAnimation(key)` (sound + visual in parallel).
 */

// ---------------------------------------------------------------------------
// Mouse: wire every drum button
// ---------------------------------------------------------------------------

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    // `this` is the clicked button; its label is the same letter we use for keys
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// ---------------------------------------------------------------------------
// Keyboard: same letters as the on-screen pads (case-sensitive: use lowercase)
// ---------------------------------------------------------------------------

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

// ---------------------------------------------------------------------------
// Audio: map each key to one MP3
// ---------------------------------------------------------------------------

/**
 * Plays the drum sample for a supported key; ignores anything else (logs in dev tools).
 *
 * @param {string} key - Single character: w, a, s, d, j, k, or l.
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
      // Not a drum key — handy when debugging unexpected `key` values
      console.log(key);
  }
}

// ---------------------------------------------------------------------------
// Visual feedback: brief `.pressed` class, then remove after a short delay
// ---------------------------------------------------------------------------

/**
 * Flashes the pad matching `currentKey` (selector `.<letter>` must exist in the DOM).
 *
 * @param {string} currentKey - Same letter as the button class, e.g. "w" for `.w`.
 */
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  if (!activeButton) {
    return;
  }
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100); // ms — keep in sync with the “snappy” feel in CSS if you tune it
}