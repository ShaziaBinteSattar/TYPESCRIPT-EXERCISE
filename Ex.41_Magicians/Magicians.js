"use strict";
//EX:41. Magicians:
//Make a array of magician’s names. Pass the array to a function called show_magicians(),
// which prints the name of each magician in the array. 
let Magicians = ['Harry Potter', 'Hermione Granger', 'Ron Weaseley', 'Albus Dumbledore'];
function show_magicians(magician) {
    magician.forEach(Element => {
        console.log(Element);
    });
}
show_magicians(Magicians);
