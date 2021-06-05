// //The require statement is a built-in function that's globally available in Node.js that allows the app.js file to access the fs module's functions through the fs assignment
const fs = require('fs');
const inquirer = require('inquirer');
//console.log(inquirer);
const generatePage = require('./src/page-template.js');

// //console.log('Hello Node!');
// //console.log(document);

// // var message = "Hello Node!";
// // var sum = 5 + 3;

// // console.log(message);
// // console.log(sum);

// // const profileDataArgs = process.argv.slice(2);

// // console.log(profileDataArgs);

// // const [name, github] = profileDataArgs;

// // console.log(name, github);






//a function returns a running of inquire.prompt(), thus returning what it returns, which is a Promise
//just like fetch(), the Promise will resolve with a .then() method
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {    
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHun Username!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'Would you like to enter some information about yourself for an "About" section?',
            default: true
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:',
            //the when function allows us to write conditional code based on the answers the user has supplied so far
            when: ({confirmAbout}) => {
                if (confirmAbout) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ]);      
};

//promptUser().then(answers => console.log(answers));

const promptProject = portfolioData => {
    console.log(`
    =================
    Add a New Project
    =================
    `);
    //if there's no 'projects' array property, create one
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    } 
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description of the project!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub link to your project!');
                    return false;
                }
            }
        },
        {
            //the confirm type question is a Boolean that can receive a yes or no (true or false) answer
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            //We set the default answer in the default property in case this question gets skipped
            default: false
        },
        {
            //the confirm type question is a Boolean that can receive a yes or no (true or false) answer
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            //We set the default answer in the default property in case this question gets skipped
            default: false
        }
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        //Evaluating the user response to whether they wish to add more projects
        //This response was captured in the answer object, projectData, in the property confirmAddProject
        //If the user wishes to add more projects, then this condistion will evaluate to true and call the promptProject(portfolioData) function
        if (projectData.confirmAddProject) {
            return promptProject(portfolioData);
        //if the user decides not to add more projects, then the condition will evaluate to false and trigger the following statement
        //we have to return the portfolioData in the else statment explicitly so that the object is returned this is so we can
            //retrieve the user's answer and build the HTML template
        } else {
            return portfolioData;
        }
    });
};

const mockData = {
    name: 'Lernantino',
    github: 'lernantino',
    confirmAbout: true,
    about:
      'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et.',
    projects: [
      {
        name: 'Run Buddy',
        description:
          'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et. Nam fringilla elit dapibus pellentesque cursus.',
        languages: ['HTML', 'CSS'],
        link: 'https://github.com/lernantino/run-buddy',
        feature: true,
        confirmAddProject: true
      },
      {
        name: 'Taskinator',
        description:
          'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et. Nam fringilla elit dapibus pellentesque cursus.',
        languages: ['JavaScript', 'HTML', 'CSS'],
        link: 'https://github.com/lernantino/taskinator',
        feature: true,
        confirmAddProject: true
      },
      {
        name: 'Taskmaster Pro',
        description:
          'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque. Nulla eget fringilla nulla. Integer gravida magna mi, id efficitur metus tempus et. Nam fringilla elit dapibus pellentesque cursus.',
        languages: ['JavaScript', 'jQuery', 'CSS', 'HTML', 'Bootstrap'],
        link: 'https://github.com/lernantino/taskmaster-pro',
        feature: false,
        confirmAddProject: true
      },
      {
        name: 'Robot Gladiators',
        description:
          'Duis consectetur nunc nunc. Morbi finibus non sapien nec pharetra. Fusce nec dignissim orci, ac interdum ipsum. Morbi mattis justo sed commodo pellentesque.',
        languages: ['JavaScript'],
        link: 'https://github.com/lernantino/robot-gladiators',
        feature: false,
        confirmAddProject: false
      }
    ]
  };

const pageHTML = generatePage(mockData); 
promptUser()
    // .then(answers => console.log(answers))
    // .then(promptProject)
    // .then(projectAnswers => console.log(projectAnswers));
    .then(promptProject)
    .then(portfolioData => {
        //console.log(portfolioData);
        //const pageHTML = generatePage(portfolioData);
            
        // fs.writeFile(file, data[,options], callback)
            //fs.writeFile has 3 arguements
                //1) the file name that will be created, or the output file
                //2) the data that's being written: the HTML string template
                //3) the callback function that will handle any errors as well as the success message
            //When an arrow function has one argument, parentheses are optional
            //When an arrow function has no arguments -or more than one- parentheses are necessary
        fs.writeFile('./index.html', pageHTML, err => {
            //a conditional statement that checks for the err being returned by the callback function
            //if err exists, an error message is displayed
            if (err) throw new Error(err);

            console.log('Page created! Check out index.html in this directory to see it!');
        });
    });