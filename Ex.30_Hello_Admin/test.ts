const userNames3: string[] = ['Admin', 'Shahnaz', 'Shazia', 'Shumaila', 'Sara'];  

userNames3.forEach(userName3 => {  
    if (userName3 === 'Admin') {  
        console.log("SPECIAL GREETING: ", 'Hello Admin, would you like to see a status report');  
    } else {  
        console.log("GENERIC GREETING: ", `Hello ${userName3}, thank you for logging in again.`);  
    }  
});