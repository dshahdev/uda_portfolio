
'use strict';


   var menu = document.querySelector("#menu");

   var section = document.querySelector("section");
   var drawer = document.querySelector('#drawer');

  menu.addEventListener("click", function(e){
        drawer.classList.toggle('open');
        e.stopPropagation();
    });


   section.addEventListener("click", function(){
    drawer.classList.remove('open');
   })


