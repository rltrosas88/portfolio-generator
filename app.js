//The require statement is a built-in function that's globally available in Node.js that allows the app.js file to access the fs module's functions through the fs assignment
const fs = require('fs');
const generatePage = require('./src/page-template.js');

//console.log('Hello Node!');
//console.log(document);

// var message = "Hello Node!";
// var sum = 5 + 3;

// console.log(message);
// console.log(sum);


// fs.writeFile(file, data[,options], callback)
    //fs.writeFile has 3 arguements
        //1) the file name that will be created, or the output file
        //2) the data that's being written: the HTML string template
        //3) the callback function that will handle any errors as well as the success message
    //When an arrow function has one argument, parentheses are optional
    //When an arrow function has no arguments -or more than one- parentheses are necessary
fs.writeFile('./index.html', generatePage(name, github), err => {
    //a conditional statement that checks for the err being returned by the callback function
    //if err exists, an error message is displayed
    if (err) throw new Error(err);

    console.log('Portfolio complete! Check out index.html to see the output!');
});