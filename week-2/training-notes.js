/*********** Variables (let, const and var) ************/

// let age = 29;
// let year = 2019;

// console.log(age, year);

// age = 30;
// console.log(age);

// const points = 100;
// console.log(points);

// var score = 75
// console.log(score);

/*********** Strings ************/

// // // strings
// console.log('hello, world');

// let email = 'mario@email.co.uk';
// console.log(email);

// // // string concatenation (Joining strings together)

// let firstName = 'Jonathan';
// let lastName = 'Lugg';

// let fullName = firstName + ' ' + lastName;
// console.log(fullName);

// // // getting characters
// console.log(fullName[2]);

// // // string length
// console.log(fullName.length);

// // // string methods
// console.log(fullName.toUpperCase());
// let result = fullName.toLocaleLowerCase();
// console.log(result, fullName);

// let index = email.indexOf('@');
// console.log(index);

// // // common string methods
// let email = 'mario@email.co.uk';

// let result = email.lastIndexOf('l');
// let result = email.slice(0, 5);
// let result = email.substr(2, 9);
// let result = email.replace('m', 'w');

// let result = email.replace('i', 'e') (First letter if multiple)
// console.log(result);

/*********** Numbers ************/

// let radius = 10;
// const pi = 3.14;

// console.log(radius, pi);

// // Math operators +, -, *, /, **, %

// console.log(10 / 1.2);

// let result = radius % 3; (Divide by and give remainder)

// let result = pi * radius**4;

// // Order of operation - B I D M A S

// let result = 5 * (10-3)**2;

// console.log(result);

// let likes = 10;

// likes = likes + 1;
// likes++; (Adding 1)
// likes--; (Subtracting 1)

// likes += 114; (Adding more numbers shorthand)
// likes -= 1; (Taking numbers away shorthand)
// likes *= 20; (multiplying shorthand)
// likes /= 2; (dividing shorthand)

// console.log(likes);

// NaN - Not a number (a Calculation which doesnt work)

// // // Example string with numbers

// let result = 'the blog has ' + likes + ' likes';
// console.log(result);

// // Template string
// const title = 'Best reads of 2019';
// const author = 'Jonathan';
// const likes = 100;

// // Concatenation way (Messy but gets the job done)
// let result = 'the blog called ' + title + " by " + author + ' has ' + likes + ' likes';
// console.log(result);

// // Template string way (Preferred method)
// let result = `The blog called ${title} by ${author} has ${likes} like`;
// console.log(result);

// // Creating HTML templates
// let html = `
//     <h2>${title}</h2>
//     <p>By ${author}</p>
//     <span>This blog has ${likes} likes</span>
// `;

// console.log(html);

/*********** Arrays (Object) ************/
// let ninjas = ['jon', 'ryu', 'tyson'];

// ninjas[1] = 'ken';
// console.log(ninjas[1]);

// let ages = [20,25,30,35];
// console.log(ages[2]);

// let random = ['jon', 'crystal', 20, 40];
// console.log(random);

// console.log(ninjas.length); (number of elements in array)

// // Array methods

// let result = ninjas.join('-'); (Puts a break between elements within an array. in this case a hyphen)
// let result = ninjas.indexOf('tyson'); (Position of element within array)
// let result = ninjas.concat(['ken', 'crystal']); (Adds elements to arrays)
// let result = ninjas.push('ken'); (Destructive element because it adds an elements to a defined array - in this case, Ken to Ninjas)
// result = ninjas.pop(); (Also a destructive element. This subtracts the last element in an array)

// console.log(ninjas);

/*********** Null and Undefined ************/
// // Undefined - Unintentional
// let age;

// console.log(age, age + 3, `the age is ${age}`); (Result in console: undefined NaN "the age is undefined")

// // Null - Intentional - Null is given the value of zero in a number format

// let age = null;

// console.log(age, age + 3, `the age is ${age}`); (Result in console: null 3 "the age is null")

/*********** Booleans ************/

// // // Booleans and comparisons
// console.log(true, false, 'true', 'false');

// // // Methods can return booleans
// let email = 'jon@email.co.uk';
// let names = ['mario', 'luigi', 'toad'];

// let result = email.includes('!'); (Result: false)
// let result = names.includes('luigi'); (Result: true)

// console.log(result);

// // // Comparison operators
// let age = 25;

// console.log(age == 25); (Is age equal to number? True)
// console.log(age == 30); (Is age equal to number? False)
// console.log(age != 30); (Is age not equal to number? True)
// console.log(age > 20); (Is age greater than number? True)
// console.log(age < 20); (Is age smaller than number? False)
// console.log(age <= 25); (Is age smaller than or equal to number? True)
// console.log(age >= 25); (Is age greater than or equal to number? True)

// let name = 'jon';

// console.log(name == 'jon'); (Is name equal to word? True)
// console.log(name == 'Jon'); (Is name equal to word? False (because word has capital letter))
// console.log(name > 'crystal'); (Is name greater than word? True (Because J is higher in the alphabet than C))
// console.log(name > 'Jon'); (Is name greater than word? True (Because lowercase letters are stronger than lower case))
// console.log(name > 'Crystal'); (Is name greater than word? True (Lowercase letters are still stronger regardless of alphabetical order))

// // Loose comparison (different types can still be equal)

// console.log(age == 25); (True)
// console.log(age == '25'); (True - JS converts string to a number before calculating)
// console.log(age != 25); (False)
// console.log(age != '25'); (False - Should be true because a string is not the same as a number)

// // Strict comparison (different types cannot be equal) - Should be preferred option

// console.log(age === 25); (True)
// console.log(age === '25'); (False - JS calculates the string also in comparison)
// console.log(age !== 25); (False)
// console.log(age !== '25'); (True - Same as above)

// // // Type conversion
// let score = '100';

// score = Number(score) (Converts string into a number)
// console.log(score + 1); (without number change it will concatenate the result)
// console.log(typeof score);

// let result = String(50);
// let result = Boolean(0); (Falsey value)
// let result = Boolean(0); (truthy value)

// console.log(result, typeof result);

/*********** Control flow ************/

/**** Loop control flows don't need ';' after '}' ****/

// // // loop - Use loops to cycle through data in array

// // for loop

// for(let i = 0; i < 5; i++){
//     console.log('in loop:', i);
// }

// console.log('loop finished');

// const names = ['shaun', 'mario', 'luigi'];

// for(let i = 0; i < names.length; i++){
//     // console.log(i);
//     let html = `<div>${names[i]}</div>>`;
//     console.log(html);
// }

// // while loop - different from for loop in the way it is written

// const names = ['shaun', 'mario', 'luigi'];
// let i = 0;

// while(i < 5){
//     console.log('in loop: ', i);
//     i++;
// }

// let i = 0;
// while(i < names.length){
//     console.log(names[i]);
//     i++;
// }

// // do while loop - Regardless of whether the loop is true or false, a 'do loop' will run the loop once.

// let i = 5;
// do{
//     console.log('val of i is: ', i);
//     i++;
// }while(i < 5);

// // // Conditional statement - aka 'if' statements
/**** logical operators '||' = or '&&' = and ****/

// const age = 25;

// if(age > 20){
//     console.log('you are over 20 years old');
// }

// const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

// if(ninjas.length > 3){
//     console.log("thats a lot of ninjas")
// }

// const password = 'p@ss12';

// if(password.length >= 12 && password.includes('@')){
//     console.log('that password is mighty strong!');
// } else if(password.length >= 8 || password.includes('@') && password.length >= 5){
//     console.log('that password is strong enough!');
// } else {
//     console.log('that password is too weak');
// }

// // // logical NOT (!)

// let user = false;

// if(!user){
//     console.log('you must be logged in to continue');
// }

// // // Break and continue

// // Break

// const scores = [50, 25, 0, 30, 100, 20, 10];

// for(let i = 0; i < scores.length; i++){
//     console.log('your score: ', scores[i]);
//     if(scores[i] === 100){
//         console.log('congrats, you got the top score!');
//         break;
//     }
// }

// // Continue

// const scores = [50, 25, 0, 30, 100, 20, 10];

// for(let i = 0; i < scores.length; i++){

//     if(scores[i] === 0){
//         continue;
//     }

//     console.log('your score: ', scores[i]);

//     if(scores[i] === 100){
//         console.log('congrats, you got the top score!');
//         break;
//     }

// }

// // // Switch statements - This uses strict equality (takes into account Type and String)

// const grade = 'A';

// switch(grade){
//     case 'A':
//         console.log('You got an A!');
//         break;
//     case 'B':
//         console.log('You got an B!');
//         break;
//     case 'C':
//         console.log('You got an C!');
//         break;
//     case 'D':
//         console.log('You got an D!');
//         break;
//     case 'E':
//         console.log('You got an E!');
//         break;
//     default:
//         console.log('This is not a valid grade');
// }

// // // Variables & block scope

// let age = 30;

// if(true){
//     // age = 40; (global application - won't work with a const variable)
//     let age = 40; (local scope)
//     let name = 'shaun';
//     console.log('inside 1st code block: ', age, name);

//     if(true){
//         let age = 50;
//         console.log('inside 2nd code block: ', age);
//     }

// }

// console.log('outside code block: ', age, name);

/*********** Functions (object) ************/

/***** Declarations and Expressions are very similar, however JS hoists declaration above (Its better practice to use function expressions to allow for better cascading flow) *****/

// // //function declaration - Doesnt need semi colon

// function greet(){
//     console.log('hello there');
// }

// // // function expression - Needs semi colons

// const speak = function(){
//     console.log('good day!');
// };

// greet();
// greet();
// greet();

// speak();

// // arguements and parameters

// const speak = function(name = 'luigi', time = 'night'){
//     console.log(`good ${time} ${name}`);
// };

// speak('shaun');

// // returning values (defining 'return' will allow the function to have global application meaning that you can output the variable associated be recognised globaly as opposed to locally)

// const calcArea = function(radius){
//     return 3.14 * radius**2;
// }

// const area = calcArea(5);
// console.log(area);

// // // regular function vs arrow function (Arrow functions are cleaner and allow the code to be smaller)

// // regular function

// const calcArea = function(radius){
//      return 3.14 * radius**2;
//  }

// // arrow function

// const calcArea = radius => 3.14 * radius**2; ('()' must be used if there is more than one arguement. In this case around 'radius' with commars spacing each arguements)

// const area = calcArea(5);
// console.log('area is: ', area);

/************* practice arrow function **************/

/* Regular function */
// const greet = function(){
//     return 'hello, world';
// }

/* Arrow function */
// const greet = () => 'hello, world';

// const result = greet();
// console.log(result);

/* Regular function */
// const bill = function(products, tax){
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

/* Arrow function - There is alot of logic so there isnt much change. Still worth using because it is slightly shorter*/
// const bill = (products, tax) => {
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

// console.log(bill([10,15,30], 0.2));

/********* end of previous ***********/

// const name = 'shaun';

// // // Functions

// const greet = () => 'hello';

// let resultOne = greet();
// console.log(resultOne);

// // // Methods

// let resultTwo = name.toUpperCase();
// console.log(resultTwo);

// // Callbacks & foreach

// const myFunc = (callbackFunc) =>{
//     // do something
//     let value = 50;
//     callbackFunc(value);
// };

// myFunc(value => {
//     // do something
//     console.log(value);
// });

// let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li']

// const logPerson = (person, index) => {
//     console.log(`${index} - hello ${person}`);
// }

// people.forEach(logPerson);