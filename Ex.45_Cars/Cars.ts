//Ex:45. Cars:
//Write a function that stores information about a car in a Object. 
//The function should always receive a manufacturer and a model name.
//It should then accept an arbitrary number of keyword arguments. 
//Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
//Print the Object that’s returned to make sure all the information was stored correctly. 

//Important note//
//The spread operator (...) is a useful feature in JavaScript and other programming languages that allows you
// to expand or spread elements of an iterable (like an array or an object) into individual elements.
// This operator simplifies the process of working with arrays or objects by allowing you to easily merge or
// clone them, pass elements as arguments to a function, or create new arrays or objects by combining existing ones.


// function exampleFunc(...param:string[]) {
//     console.log(param);
// }

// exampleFunc('Shazia', 'Shahnaz', 'Shumaila', 'Sana', 'sobia');

function storeCarInfo(manufacturer: string, modelname: string, ...extraOption: { [key: string]:any}[]):object{
    const carInfo = {
        manufacturer,
        modelname,
        ...Object.assign({},...extraOption)

    }
    return carInfo;
};

let answer = storeCarInfo('Honda', 'Civic', {color: 'black'},{features:['Navigation', 'Power window']});

console.log(answer);



// let obj1 ={num1:1, num2:2};
// let obj2 ={num3:1, num2:5};

// let obj3 =Object.assign(obj1, obj2);
// console.log(obj3);
