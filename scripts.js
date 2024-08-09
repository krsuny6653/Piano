// Select all necessary DOM elements
const keys = document.querySelectorAll(".key");
const note = document.querySelector(".nowplaying");
const hints = document.querySelectorAll(".hints");

// Function to play the note
function playNote (e) {
    const keyCode = e.keyCode || e.target.getAttribute("data-key");
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);

    if (!key) return;

    const keyNote = key.getAttribute("data-note");
    key.classList.add("playing");
    note.innerHTML = keyNote;

    audio.currentTime = 0;
    audio.play();
}

// Function to remove the transition class
function removeTransition (e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
}

// Function to add transition delay to hints
function hintsOn (e, index) {
    e.style.transitionDelay = `${index * 50}ms`;
}

// Apply transition delay to all hints
hints.forEach(hintsOn);

// Add event listener to remove transition class after it ends
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

// Add event listener to window to play note on keydown
window.addEventListener("keydown", playNote);

// Add click event listener to each key
keys.forEach(key => key.addEventListener("click", playNote));
