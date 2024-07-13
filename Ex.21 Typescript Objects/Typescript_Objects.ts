//Ex:21. Objects
//They think of something you could store in a TypeScript Object. 
//Write a program that creates Objects containing these items. 

//Data type of Person Object//
interface person  {
    Name: String ,
    Age: Number ,
    Nationality: String ,
    Student: Boolean ,
    Qualification : String
}

//Person Object//
let person : person = {
    Name: 'Shazia Binte Abdus Sattar' ,
    Age: 32 ,
    Nationality: 'Pakistani' ,
    Student: true ,
    Qualification : 'M.Sc' ,

    
}

//Print person Object//
console.log(person);


//Data type of Car Object//
interface Car {
    Maker: String ,
    Model: Number ,
    Color: String ,
    Automatic: Boolean
}

//Car Object//
let Car : Car = {
    Maker: 'Corolla',
    Model: 2024 ,
    Color: 'Black' ,
    Automatic: true ,

}

//Print person Object//
console.log(Car);



