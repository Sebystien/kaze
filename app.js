'use strict';

console.log('Test');

const section1= document.querySelector('.section-one');

const section2= document.querySelector('.section-two');


const nav= document.querySelector('nav');

//If we need to calculate t

nav.addEventListener('click',function(e){
    e.preventDefault();
   const coords2= section2.getBoundingClientRect();

    

   /* window.scrollTo({
        left:coords2.left + window.pageXOffset,
        top:coords2.top + window.pageYOffset,
        behavior: 'smooth'
    })*/

    section2.scrollIntoView({behavior: 'smooth'})
})

console.log(section2.getBoundingClientRect());