var i = 0;
var txt = 'This is my portfolio website that I\'ve designed to showcase my proficiency with HTML and CSS'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter(txt) {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}