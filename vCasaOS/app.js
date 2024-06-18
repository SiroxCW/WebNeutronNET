
function throttle(fn, wait) {
    let lastTime = 0;
    return function(...args) {
        const now = new Date().getTime();
        if (now - lastTime >= wait) {
            lastTime = now;
            return fn(...args);
        }
    };
}

window.addEventListener('scroll', throttle(function() {
    const scrollTop = window.scrollY;
    const dot1 = document.querySelector('.dot1');
    const dot2 = document.querySelector('.dot2');
    const dot3 = document.querySelector('.dot3');

    // Adjust these values as needed to control how the dots move
    dot1.style.top = `${20 - scrollTop * 0.175}%`;
    dot1.style.left = `${40 - scrollTop * 0.0175}%`;
    dot2.style.top = `${85 + scrollTop * 0.1}%`;
    dot2.style.left = `${95 + scrollTop * 0.1}%`;
    dot3.style.top = `${110 + scrollTop * 0.075}%`;
    dot3.style.left = `${20 - scrollTop * 0.05}%`;
}, 50)); // Adjust the throttle wait time as needed


window.onload = function() {
    setTimeout(typeWriterFirst, 150);
}

var i = 0;
var fullTxt = 'NeutronNET';
var txt = fullTxt;
var first= true;
var speed = 50;
function typeWriterFirst() {
    if (first) {
        first = false;
        document.getElementById("titleTxt").innerHTML = '';
    }
    if (i < txt.length) {
        document.getElementById("titleTxt").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriterFirst, speed);
    } else {
        setTimeout(reverseTypeWriter, 1000);
    }
}

function reverseTypeWriter() {
    speed = 100;
    if (i > 7) {
        i--;
        document.getElementById("titleTxt").innerHTML = txt.substring(0, i);
        setTimeout(reverseTypeWriter, speed);
    } else {
        int = 0;
        setTimeout(typeWriterFirst, 1000);
    }
}
