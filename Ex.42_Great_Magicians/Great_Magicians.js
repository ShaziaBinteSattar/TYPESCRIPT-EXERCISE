"use strict";
//EX:41. Magicians:
//Make a array of magician’s names. Pass the array to a function called show_magicians(),
// which prints the name of each magician in the array. 
//Ex:42. Great Magicians: 
//Start with a copy of your program from Exercise 41. 
//Write a function called make_great() that modifies the array of magicians by adding the phrase the Great 
//to each magician’s name. Call show_magicians() to see that the list has actually been modified. 
let magicians = ['Harry Potter', 'Hermione Granger', 'Ron Weaseley', 'Albus Dumbledore'];
function make_great(magiciansArry) {
    for (let i = 0; i < magiciansArry.length; i++) {
        magicians[i] = `The Great ` + magiciansArry[i];
    }
}
// function make_great(magician :string []){
//     magician.forEach((element, index, array) => {
//         array[index] = `${element} the Great`;
//     })
// }
function show_magicians(magician) {
    magician.forEach(Element => {
        console.log(Element);
    });
}
make_great(magicians);
show_magicians(magicians);
