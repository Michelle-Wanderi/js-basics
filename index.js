
//This is my first JS code
console.log('Hello World');

//Examples of Primitive Data types
// let name = 'Michelle' // String Literal
// let age = 30; //Number literal
// let isApproved = false; //Boolen literal
// let firstName = undefined; 
// let selectedColor = null;

//Types of reference data types- Objects, Arrays and Functions
//Object Literal
let person = {
     name : 'Michelle',
     age : 18
};
//Dot notation -Best practice
    person.name= 'Wanderi'

//Bracket notation
    person['name'] = 'Apple';
console.log(person.name);


let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
console.log(selectedColors.length);




//Performing a task
function greet(name, lastName){
    console.log('Hello ' + name + ' ' + lastName);
}
greet('John', 'Wanderi');

//John is an argument to this function- the actual value
//name is a parameter of the greet function


//Calculating a value
function square(number){
    return number * number;
};

console.log(square(4));

let name = 'Michelle';
console.log(name);

//Variables cannot be reserved keywords
//Should be meaningful
//Cannot start with a number
//Cannot container a space or hypen
// Are case sensitive

let x = 10;
let y = 13;

// console.log(x + y);
// console.log(x - y)

//Increment (++)
console.log(x++);
 console.log(x);

 //Decrement (--)

 
 let a = 12
 
 a += 5;
 console.log(a);


let u = 1;
//Relational
console.log(x > 0);
console.log(x <=0 );

//Equality
console.log(x===1);

//Ternary operators
//If a customer has more than 100 points, they are a 'gold' customer, otherwise, they are a 'silver' customer.

let points = 89;
let type = points > 100 ? 'gold' : 'silver';

console.log(type);

//Logical operators with non-booleans

let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor; //Logical or operator

console.log(currentColor);


 
//Exercise- Swapping variables
let j = 'red';
let k = 'green';

let c = j;
j = k;
k = c;



console.log(j);
console.log(k);


//If else 
//HOur
//If hour is betwwen 6am and 12pm: Good morning 
//if it is between 12pm and 6pm : good afternoon
//otherwise ; GOODNIGHT
 
let hour = 19;
if (hour>= 6 && hour <12){
 console.log('Good morning');

}
else if  (hour >= 12 && hour < 18){
    console.log('Good afternoon');
}
else if(hour > 18){
    console.log('Goodnight');
}

//Switch..case
 
let role; 'guest';

switch(role){
    case 'guest' :
        console.log('Guest User');
        break;

        case 'moderator':
            console.log('Moderator User');
            break;

        default:
            console.log('Unknown User');
   
}

//For loop

for (let t = 0; t <=5; t++ ){
    console.log('Hello World', t);
       
    
}
