"use strict";
//17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time 
// for the dinner, and you have space for only two guests. 
// • Start with your program from Exercise 16. Add a new line that prints a message saying that 
// you can invite only two people for dinner. 
// • Remove guests from your list one at a time until only two names remain in your list. Each time 
// you pop a name from your list, print a message to that person letting them know you’re sorry 
// you can’t invite them to dinner. 
// • Print a message to each of the two people still on your list, letting them know they’re still 
// invited. 
// • Remove the last two names from your list, so you have an empty list. Print your list to make 
// sure you actually have an empty list at the end of your program. 
Object.defineProperty(exports, "__esModule", { value: true });
var Guest_List = ['Shumaila', 'Sana', 'Sobia', 'Mahnoor', 'Kiran'];
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dearest Ms. '+Guest_List[i] +',\n\n Its mine pleasure to invite you at mine dinner party. Its mine pleasure to have your prescence at this auspecious occasion. Please come and join us I will be waiting for you. \n\n\n THANK YOU \n\n\n With best Regards \n\n SHAZIA BINTE ABDUS SATTAR \n\n\n')
// }
var absent_Guest = 'Kiran';
var new_Guest = 'Shahnaz';
Guest_List[4] = new_Guest;
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dearest Ms. '+Guest_List[i] +',\n\n Its mine pleasure to invite you at mine dinner party. Its mine pleasure to have your prescence at this auspecious occasion. Please come and join us I will be waiting for you. \n\n\n THANK YOU \n\n\n With best Regards \n\n SHAZIA BINTE ABDUS SATTAR \n\n\n')
// }
// console.log(`\n\n Ms. ${absent_Guest} is not coming at the dinner party.`);
// console.log('\n\n Hurrah! GOOD News,We find big table so we are inviting 3 more guests\n\n')
Guest_List.unshift('Ms Aniqa');
Guest_List.splice(2, 0, 'Ms Hina Khan');
Guest_List.push('Ms Saima khatoon');
// Here i print 6 guest array//
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dearest Ms. ' +Guest_List[i] + ',\n\n Its mine pleasure to invite you at mine dinner party. Its mine pleasure to have your prescence at this auspecious occasion. Please come and join us I will be waiting for you. \n\n\n THANK YOU \n\n\n With best Regards \n\n SHAZIA BINTE ABDUS SATTAR \n\n\n')
// }
//sorry guests not for inviting//
// console.log('\n\n Iam exteremely SO SORRY! ,I can not arrange big table, so only two peoples will be invited.');
// Here i removed guests , left only two guest as invited//
while (Guest_List.length > 2) {
    var remove_Guest = Guest_List.pop();
    // console.log(`SORRY! MS.${remove_Guest}, You are not invited for Dinner.`);
}
// only two remaining guest are invited //
// for(let i=0; i<Guest_List.length; i++){
//     console.log('\n\n Dearest Ms. ' +Guest_List[i] + ',\n\n You are still invited.Its mine pleasure to invite you at mine dinner party. Its mine pleasure to have your prescence at this auspecious occasion. Please come and join us I will be waiting for you. \n\n\n THANK YOU \n\n\n With best Regards \n\n SHAZIA BINTE ABDUS SATTAR \n\n\n')
// }
// i have removed all guests from array//
Guest_List.splice(0, 2);
console.log(Guest_List);
//Exercise.19
// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a 
// message indicating the number of people you are inviting to dinner.
console.log("Total number of Guest Are :".concat(Guest_List.length));
