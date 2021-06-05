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

//  const profileDataArgs = process.argv.slice(2);
//  const printProfileData = profileDataArr => {
//     // This...
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//         console.log(profileDataArr[i]);
//     }
//     console.log('================');
//     // Is the same as this...
//     //.forEach method accepts a function as an argument and executes that function on each element of the array,
//         // using the value of the element at that iteration as its argument.
//     // profileDataArr.forEach((profileItem) => {
//     //     console.log(profileItem)
//     // });

//     // Is the same as this...
//     profileDataArr.forEach(profileItem => console.log(profileItem));
//  };
//  printProfileData(profileDataArgs);

// const profileDataArgs = process.argv.slice(2);






// const name = profileDataArgs[0];
// const github = profileDataArgs[1];
//Also written like...
    //The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from array, or properties from objects, in to distinct variables
    //The destructuring assignment uses syntax on the left-hand side of the assignment to define what values to unpack from the sourced variable


//const generatePage = () => 'Name: Jane, Github: janehub';
// console.log(generatePage());

//Template literals embed JavaScript expressions into the string which are inclosed by backticks
// const generatePage = (userName, githubName) => {
//     return `
//         Name: ${userName}
//         Github: ${githubName}
//     `;
// };

// console.log(name, github);
// console.log(generatePage(name, github));

//module.exports = (name, github) => {

module.exports = templateData => {
    //console.log(templateData);

    //destructure projects and about data from templateData based on their property key names
    //this will create three variables based on data in templateData
    const { projects, about, ...header } = templateData;
    //console.log(projects, about, header);

    return `
    <!DOCTYPE html> 
    <html lang="en"> 

    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap">
      <link rel="stylesheet" href="style.css">
      <title>Portfolio Demo</title>
    </head>
  
    <body>
        <header>
            <div class="container flex-row justify-space-between align-center py-3">
                <h1 class="page-title text-secondary bg-dark py-2 px-3">${header.name}</h1>
                <nav class="flex-row">
                    <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${header.github}">Github</a>
                </nav>
            </div>
        </header>
        <main class="container my-5">

        </main>
        <footer class="container text-center py-3">
            <h3 class="text-dark">&copy;${new Date().getFullYear()} by ${header.name}</h3>
        </footer>
    </body>
    </html>
    `;
  };

// console.log(name, github);
// console.log(generatePage(name, github));
