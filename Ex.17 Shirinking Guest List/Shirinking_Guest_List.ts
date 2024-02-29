import { Console } from "console";
import { toASCII } from "punycode";
let Guest_List :string[] = [ 'Shumaila', 'Sana', 'Sobia', 'Mahnoor', 'Kiran'];
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dearest Ms. '+Guest_List[i] +',\n\n Its mine pleasure to invite you at mine dinner party. Its mine pleasure to have your prescence at this auspecious occasion. Please come and join us I will be waiting for you. \n\n\n THANK YOU \n\n\n With best Regards \n\n SHAZIA BINTE ABDUS SATTAR \n\n\n')
// }
let absent_Guest :string ='Kiran';
let new_Guest :string ='Shahnaz' ;
Guest_List[4] = new_Guest;
// for(let i=0; i<Guest_List.length; i++){
//     console.log('Dearest Ms. '+Guest_List[i] +',\n\n Its mine pleasure to invite you at mine dinner party. Its mine pleasure to have your prescence at this auspecious occasion. Please come and join us I will be waiting for you. \n\n\n THANK YOU \n\n\n With best Regards \n\n SHAZIA BINTE ABDUS SATTAR \n\n\n')
// }
console.log(`Ms. ${absent_Guest} is not coming at the dinner party.`);
console.log('Hurrah! GOOD News,We find big table so we are inviting 3 more guests')
Guest_List.unshift('Ms Aniqa');
Guest_List.splice(2,0, 'Ms Hina Khan');
Guest_List.push('Ms Saima khatoon');
for(let i=0; i<Guest_List.length; i++){
    console.log('Dearest Ms. '+Guest_List[i] +',\n\n Its mine pleasure to invite you at mine dinner party. Its mine pleasure to have your prescence at this auspecious occasion. Please come and join us I will be waiting for you. \n\n\n THANK YOU \n\n\n With best Regards \n\n SHAZIA BINTE ABDUS SATTAR \n\n\n')
}
console.log('\n\n SORRY! ,I can not arrange big table, so only two peoples will be invited.');
while(Guest_List.length >2){
    let remove_Guest = Guest_List.pop();
console.log('SORRY! MS. ${remove_Guest}, You are not invited for Dinner.');
}
for(let i=0; i<Guest_List.length; i++){
    console.log('Dearest Ms. '+Guest_List[i] +',\n\n You are still invited.Its mine pleasure to invite you at mine dinner party. Its mine pleasure to have your prescence at this auspecious occasion. Please come and join us I will be waiting for you. \n\n\n THANK YOU \n\n\n With best Regards \n\n SHAZIA BINTE ABDUS SATTAR \n\n\n')
}
Guest_List.splice(0,2);
console.log(Guest_List);




