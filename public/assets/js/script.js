"use strict";
//import gallery module
import { gallery } from './gallery.mjs';

// output variable
let output = '';
// select gallrey-section and set it to gallreySection
const gallreySection = document.querySelector('.gallrey-section');

// forEach to bulid the gallrey from the gallery array
gallery.forEach(function (carImg) {
  // add the vlaues from the array and set it to output
  output +=
    `<figure>
      <img src='${carImg.pathURL}' alt='${carImg.title}' width='${carImg.width}' height='${carImg.height}'>
      <figcaption>
      <a href='${carImg.linkURL}' target='_blank'>${carImg.title}</a>
      <p class ="author">
      <a href='${carImg.creditURL}' target='_blank'>${carImg.credit}</a>
      </p>
      </figcaption>
      <p>${carImg.description}</p>
    </figure>`
});

// print output and bulid the gallrey
gallreySection.innerHTML += output;