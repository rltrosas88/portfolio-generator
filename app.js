//console.log('Hello Node!');
//console.log(document);

// var message = "Hello Node!";
// var sum = 5 + 3;

// console.log(message);
// console.log(sum);

// var commandLineArgs = process.argv;
// console.log(commandLineArgs);

//The slice method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) 
    //where start and end represent the index of items in that array. The originall array will not be modified.
// var profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

//const keyword (constant) is a feature in JavaScript that allows us to create variables that can't be reassigned a value
// const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

// const message = 'Hello Node!';
// message = 'Goodbye Node!';

// const sum = 5 + 3;
// sum += 1;

// console.log(message);
// console.log(sum);

// const animalArray = ['dog', 'cat', 'pig'];
// animalArray.push('cow');

// const personObj = {
//     name:'Lernantino',
//     age: '99'
// };
// personObj.age = 100;
// personObj.occupation = 'Developer';

// console.log(animalArray);
// console.log(personObj);

//const profileDataArgs = process.argv.slice(2, process.argv.length);
//Arrow functions are a way of creating more concise function expressions where possible. They use the following syntax:
    //const addNums = function(numOne, numTwo){
        //return numOne + numTow;
    //};
    //const addNums = (numOne, numTwo) => {
        //return numOne + numTwo;
    //};
    //const addNums = (numOne, numTow) => numOne + numTwo;
//  const printProfileData = (profileDataArr) => {
//         console.log(profileDataArr);
// };
// printProfileData(profileDataArgs);

// //Notice the lack of parentheses around the 'profileDataArr' parameter?

//      for (let i =0; i < profileDataArr.length; i++) {
//          console.log(profileDataArr[i]);
//      }
//  };
// printProfileData(profileDataArgs);

//var is function-scoped, so redeclaring it in a block will cause its value outside the block to change as well:
// var one = 'one: declared outside the block';
// if (true === true) {
//     var one = 'one: declared inside the block'; //notice: we redeclare 'one here
//     console.log(one);//prints 'one: declared inside the block'
// }
// console.log (one); //also prints 'one: declared inside the block'

//'let' is block-scoped, so redeclaring a 'let' variable inside of a blcok creates a different 'let' variable with the same name whose scope is 
    //inside the block:
// let two = 'two: declared outside the block';
// if (true === true) {
//     let two = 'two: declared inside the block';
//     console.log(two); // prints 'two: declared inside the blcok'
// }
// console.log(two); // prints 'two: declared outside the block'


// var is function-scoped, so changin its value in a block causes its value in the outer environment to change as well:
// var three = 'three: declared outside the block';
// if (true === true) {
//     three = 'three: changed inside the block'; // notice: we don't redeclare console.log(three);
//         //prints 'three: changed inside the block'
// }
// console.log(three); // also prints 'three: changed inside the block'

// let is blocked-scoped, so changing its value in a block does change its value outside the block_if_the variable is not redeclared in the block:
// let four = 'four: outside the block';
// if (true === true) {
//     four = 'four: inside the block'; // notice: we don't redeclare the variable console.log(four);
//         // prints 'four: inside the block'
// }
// console.log(four); // prints 'four: inside the block'

// const profileDataArgs = process.argv.slice(2, process.argv.length);

const profileDataArgs = process.argv.slice(2);
 const printProfileData = profileDataArr => {
    // This...
    for (let i = 0; i < profileDataArr.length; i += 1) {
        console.log(profileDataArr[i]);
    }
    console.log('================');
    // Is the same as this...
    //.forEach method accepts a function as an argument and executes that function on each element of the array,
        // using the value of the element at that iteration as its argument.
    // profileDataArr.forEach((profileItem) => {
    //     console.log(profileItem)
    // });

    // Is the same as this...
    profileDataArr.forEach(profileItem => console.log(profileItem));
 };
 printProfileData(profileDataArgs);

