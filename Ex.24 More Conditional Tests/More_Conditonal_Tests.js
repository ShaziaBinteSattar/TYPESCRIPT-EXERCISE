"use strict";
// Ex: 24. More Conditional Tests: 
// • You don’t have to limit the number of tests you create to 10. 
// • If you want to try more comparisons, write more tests. Have at least one True and one 
// • False result for each of the following: 
// • Tests for equality and inequality with strings 
//Equality and Inequality Test 1 //
console.log("Equality test with strings Apple === Apple : ", "Apple" === "Apple");
// • Equality and Inequality Test 2 //
//console.log("Inequality test with strings: ", "Apple" != "Orange"); {NOTE=> donot used it because it showed error in typescript}
// • Equality and Inequality Test 2 //
console.log("Inequality test with strings Apple != Orange : ", "Apple" != "Orange");
// • Tests using the lower case function //
console.log("Lower Case function test HELLO toLowerCase hello : ", "HELLO".toLowerCase() === "hello");
// • Numerical tests involving equality  //
console.log("Equality test with numbers  26 ===26: ", 26 === 26);
// • Numerical tests involving inequality //
console.log("Inequality test with numbers  26 !=35 : ", 26 != 35);
// • Greater than test //
console.log("Greater than test 10 > 5:  ", 10 > 5);
// • Less than test //
console.log("Less than test 5 < 10 :  ", 5 < 10);
// • Greater than or  equal to //
console.log("Greater than and equal to test 10 >= 10 : ", 10 >= 10);
// • Less than or equal to //
console.log("Less than or equal to test 5 <= 10 : ", 5 <= 10);
// • Tests using "AND"(symbol of AND operator => &&)  operator // 
console.log("AND operator test 5===5 && 10 >5 : ", 5 === 5 && 10 > 5); // output: true
console.log("AND operator test 5===4 && false : ", 5 === 4 && false); // Output: false
console.log("AND operator test true && false : ", true && false); // Output: false
console.log("AND operator test false && 3 > 2 : ", false && 3 > 2); // Output: false
console.log("AND operator test 5===4 && 3 > 2 : ", 5 === 4 && 3 > 2); // Output: false
console.log("AND operator test 5===5 && 3 > 2 : ", 5 === 5 && 3 > 2); // Output: true
// • Tests using  "OR" (symbol of OR operator => ||)  operator // 
console.log("OR operator test 5===5 || false : ", 5 === 5 || false); // output: true
console.log("OR operator test false || false : ", false || false); // Output: false
console.log("OR operator test 0===1 || 3 > 5 : ", 0 === 1 || 3 > 5); // Output: false
console.log("OR operator test 5===4 || false : ", 5 === 4 || false); // Output: false
// • Test whether an item is in a array //
const fruits = ['PEAR', 'MANGO', 'BANANA', 'GRAPES', 'GUAVA'];
console.log('test "PEAR" in the array: ', fruits.includes("PEAR"));
// • Test whether an item is not in a array
console.log('Testing "PEACH" isnot in the array :', fruits.includes('PEACH'));
