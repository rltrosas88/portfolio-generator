//console.log('Hello Node!');
//console.log(document);
// var message = "Hello Node!";

// var sum = 5 + 3;

// console.log(message);
// console.log(sum);

// var commandLineArgs = process.argv;
// console.log(commandLineArgs);

// const profileDataArgs = process.argv.slice(2, process.argv.length);
// console.log(profileDataArgs);

//Notice the lack of parentheses around the 'profileDataArr' parameter?

//     for (let i =0; i < profileDataArr.length; i++) {
//         console.log(profileDataArr[i]);
//     }
// };
//printProfileData(profileDataArgs);
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
const profileDataArgs = process.argv.slice(2, process.argv.length);
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];
const [name, github] = profileDataArgs;

const generatePage = (userName, githubName) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=devive-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
    </head>

    <body>
        <h1>${name}</h1>
        <h2><a href="https://github.com/${github}">Github</a></h2>
    </body>
    </html>
    `;
};

console.log(name, github);
console.log(generatePage(name, github));