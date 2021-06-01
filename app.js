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

const animalArray = ['dog', 'cat', 'pig'];
animalArray.push('cow');

const personObj = {
    name:'Lernantino',
    age: '99'
};
personObj.age = 100;
personObj.occupation = 'Developer';

console.log(animalArray);
console.log(personObj);

// //Notice the lack of parentheses around the 'profileDataArr' parameter?

// //     for (let i =0; i < profileDataArr.length; i++) {
// //         console.log(profileDataArr[i]);
// //     }
// // };
// //printProfileData(profileDataArgs);
// const profileDataArgs = process.argv.slice(2);

// const printProfileData = profileDataArr => {

//     // This...
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//         console.log(profileDataArr[i]);
//     }

//     console.log('================');

//     // Is the same as this...
//     // profileDataArr.forEach((profileItem) => {
//     //     console.log(profileItem)
//     //});
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);

