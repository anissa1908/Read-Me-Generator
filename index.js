const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user
const questions = [
    {
        message: "What is your app's name?",
        name: "name",
        default: "toilet finder app"
    },
    {
        message: "Enter a short description for your app.",
        name: "description",
        default: "greatest app in the world."
    },
    {
        message: "What command to type for installation?",
        name: "installation",
        default: "npm install"
    },

    {   
        message: "What is the purpose of the app?",
        name: "usage",
        default: "default"
    },

    {   
        message: "What license are you going to use?",
        name: "license",
        default: "MIT"
    },

    {   
        message: "What are you contributing?",
        name: "contributing",
        default: "default"
    },

    {   
        message: "What test are you using?",
        name: "tests",
        default: "test",
    },

    {   
        message: "What question should I ask?",
        name: "questions",
        default: "question"
    },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

 
    inquirer.prompt(questions).then(data=> {
        const readmeTemplate =  `
# ${data.name}
        
## Description
${data.description}
        
## Table of Contents
* [Description](## Description)
* [Installation](## Installation)
* [Usage](## Usage)
* [License](## License)
* [Contributing](## Contributing)
* [Tests](## Tests)
* [Questions](## Questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
${data.questions}


        
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
           
        
        ## Minimum Application Requirements
        
        * Meets [Submission Requirements](#submission-requirements) in the following section.
        
        * Functional application.
        
        * GitHub repository with a unique name and a README describing project.
        
        * The generated README includes the following sections: 
        
          * Title
          * Description
          * Table of Contents
          * Installation
          * Usage
          * License
          * Contributing
          * Tests
          * Questions
        
        * The generated README includes 1 badge that's specific to the repository.
        
        
        ## Submission Requirements
        
        Because this is a CLI App, there will be no need to deploy it to Heroku. This time, though, you need to include a video showing us that you got the app working with no bugs. You should include a link to the video in your application's  README.md  file.
        
        * Create a  .gitignore  file and include  node_modules/  and  .DS_Store/ .
        
        *  node_modules  is not tracked and uploaded to GitHub. (Hint: It is easy if you create your  .gitignore  file before installing dependencies with npm.)
        
        * Repo **MUST** include  package.json  with required dependencies. (Hint: Run  npm init  when you first setup the project before installing any dependencies.)
        
        * Include a video of the typical user flow through your application. This includes views of the prompts and the responses after their selection.
        
        * Include any other screenshots you deem necessary to help someone who has never been introduced to your application understand the purpose and function of it. This is how you will communicate to potential employers/other developers in the future what you built and why, and to show how it works.
        
        * Because screenshots (and well-written READMEs) are extremely important in the context of GitHub, this will be part of the grading.
        
        ## Commit Early and Often
        
        One of the most important skills to master as a web developer is version control. Building the habit of committing via Git is important for two reasons:
        
        * Your commit history is a signal to employers that you are actively working on projects and learning new skills.
        
        * Your commit history allows you to revert your code base in the event that you need to return to a previous state.
        
        Follow these guidelines for committing:
        
        * Make single-purpose commits for related changes to ensure a clean, manageable history. If you are fixing two issues, make two commits.
        
        * Write descriptive, meaningful commit messages so that you and anyone else looking at your repository can easily understand its history.
        
        * Don't commit half-done work, for the sake of your collaborators (and your future self!).
        
        * Test your application before you commit to ensure functionality at every step in the development process.
        
        We would like you to have more than 200 commits by graduation, so commit early and often!
        
        ## Submission on BCS
        
        You are required to submit the following:
        
        * A walkthrough video demonstrating the functionality of the application. 
        
        * A sample README.md file for a project repository generated using your application.
        
        * The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.
        `
        fs.writeFile("test.md", readmeTemplate , err=> console.log(err || "Success!"))
    })
}

// function call to initialize program
init();
