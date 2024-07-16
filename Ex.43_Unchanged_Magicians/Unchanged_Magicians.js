"use strict";
//EX:41. Magicians:
//Make a array of magician’s names. Pass the array to a function called show_magicians(),
// which prints the name of each magician in the array. 
//Ex:42. Great Magicians: 
//Start with a copy of your program from Exercise 41. 
//Write a function called make_great() that modifies the array of magicians by adding the phrase the Great 
//to each magician’s name. Call show_magicians() to see that the list has actually been modified. 
//43. Unchanged Magicians: 
//Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names.
//Because the original array will be unchanged, return the new array and store it in a separate array. 
//Call show_magicians() with each array to show that you have one array of the original names 
//and one array with the Great added to each magician’s name.
let magicians = ['Harry Potter', 'Hermione Granger', 'Ron Weaseley', 'Albus Dumbledore'];
function copyArray(arr) {
    return [...arr];
}
function make_great(magiciansArry) {
    for (let i = 0; i < magiciansArry.length; i++) {
        magiciansArry[i] = `The Great ` + magiciansArry[i];
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
const copymagiciansArray = copyArray(magicians);
make_great(copymagiciansArray);
console.log('\n\nThis is my Original array:');
show_magicians(magicians);
console.log('\n\nThis is my modified copy of the array:');
show_magicians(copymagiciansArray);
