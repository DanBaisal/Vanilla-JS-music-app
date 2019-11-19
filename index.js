window.addEventListener('load', () => {
 const sounds = document.querySelectorAll('.sound');
 const pads = document.querySelectorAll(".pads div");
 const visual = document.querySelector('.visual');
 const colours = [
  "turquoise",
  "blue",
  "purple",
  "red",
  "yellow",
  "green"
 ];


// Implementing the sounds 

pads.forEach((pad, index) => {
  pad.addEventListener('click', function() {
    sounds[index].currentTime = 0;
    sounds[index].play();

    createBubble(index);

    });
  });

  // Make a function that plays bubbles
    const createBubble = (index) => {
      const bubble = document.createElement('div');
      visual.appendChild(bubble);
      bubble.style.backgroundColor = colours[index];
      bubble.style.animation = "jump 1s ease";
      bubble.addEventListener('animationEnd', function () {
        visual.removeChild()
      })
    }

});