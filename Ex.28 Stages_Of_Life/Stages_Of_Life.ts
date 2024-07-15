// 28. Stages of Life:
// Write an if-else chain that determines a person’s stage of life. 
//Set a value for the variable age, and then: 


let age: number = 25;
// • If the person is less than 2 years old, print a message that the person is a baby.
if(age<2){
    console.log("If age is lesser than 2:","person is a BABY")
}
// • If the person is at least 2 years old but less than 4, print a message that the person is a  toddler.
else if(age>=2 && age< 4){
    console.log("If age is greater than or equal to 2 && age is lesser than 4:", "person is TODDLER");
}
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
else if(age>=4 && age< 13){
    console.log("If age is greater than or equal to 4 && age is lesser than 13:", "person is a KID");
}
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if(age>=13 && age< 20){
    console.log("If age is greater than or equal to 13 && age is lesser than 20:", "person is TEENAGER");
} 
// • If the person is at least 20 years old but less than 65, print a message that the person is an  adult. 
else if(age>=20 && age< 65){
    console.log("If age is greater than or equal to 20 && age is lesser than 65:", "person is ADULT");
}
// • If the person is age 65 or older, print a message that the person is an elder. 
else {
    console.log("If age is greater than or equal to 65 && age is greater than 65:", "person is ELDER");
}




