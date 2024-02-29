import { toASCII } from "punycode";

let Guest_List :string[] = [ 'Shumaila', 'Sana', 'Sobia', 'Mahnoor', 'Kiran'];
for(let i=0; i<Guest_List.length; i++){
    console.log('Dearest Ms. '+Guest_List[i] +',\n\n Its mine pleasure to invite you at mine dinner party. Its mine pleasure to have your prescence at this auspecious occasion. Please come and join us I will be waiting for you. \n\n\n THANK YOU \n\n\n With best Regards \n\n SHAZIA BINTE ABDUS SATTAR \n\n\n')
}
let absent_Guest :string ='Kiran';
let new_Guest :string ='Shahnaz' ;
Guest_List[4] = new_Guest;
for(let i=0; i<Guest_List.length; i++){
    console.log('Dearest Ms. '+Guest_List[i] +',\n\n Its mine pleasure to invite you at mine dinner party. Its mine pleasure to have your prescence at this auspecious occasion. Please come and join us I will be waiting for you. \n\n\n THANK YOU \n\n\n With best Regards \n\n SHAZIA BINTE ABDUS SATTAR \n\n\n')
}
console.log(`Ms. ${absent_Guest} is not coming at the dinner party.`)
