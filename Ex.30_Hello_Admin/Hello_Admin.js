"use strict";
//EX: 30. Hello Admin:
//  Make a array of five or more usernames, including the name 'admin'.
const userNames = ['Admin', ' Bugs Bunny', 'Daffy Duck', 'Sylvester', 'Tweety'];
// Imagine you are writing code that will print a greeting to each user after they log in to a website.
// Loop through the array, and print a greeting to each user: 
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see  a status report? 
for (let i = 0; i < userNames.length; i++) {
    if (userNames[i] === 'Admin') {
        console.log("SPECIAL GREETING :", 'Hello Admin , would you like to see a status report');
    }
    // • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again. 
    else {
        console.log(`"GENERIC GREETING : " , such as HELLO! ${(userNames[i])}, thank you for logging in again. `);
    }
}
