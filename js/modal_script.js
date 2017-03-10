var modal = document.getElementById('myModal1');

// Get the button that opens the modal
var contact = document.getElementById("contact");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
contact.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    modal.style.display = "none";
}

var modal2 = document.getElementById('myModal2');

// Get the button that opens the modal
var about = document.getElementById("about");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close")[1];

// When the user clicks the button, open the modal
about.onclick = function() {
    modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
    modal2.style.display = "none";
}




var modal3 = document.getElementById('myModal3');

// Get the button that opens the modal
var dance = document.getElementById("dancePic");
console.log("dance is: " + dance);
// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close")[2];

// When the user clicks the button, open the modal
dance.onclick = function() {
    console.log("dance is onclick event: " + dance);
    modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
    modal3.style.display = "none";
}


var modal4 = document.getElementById('myModal4');

// Get the button that opens the modal
var music = document.getElementById("musicPic");

// Get the <span> element that closes the modal
var span4 = document.getElementsByClassName("close")[3];

// When the user clicks the button, open the modal
music.onclick = function() {
    console.log("dance is onclick event: " + dance);
    modal4.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span4.onclick = function() {
    modal4.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {

     if (event.target == modal) {
        modal.style.display = "none";
    } else if(event.target == modal2) {
        modal2.style.display = "none";
    } else if(event.target == modal3) {
        modal3.style.display = "none";
    } else if(event.target == modal4) {
        modal4.style.display = "none";
    }
}
