// Import Dependencies
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generatePage = require('./src/page-template');
const writeFile = require('./utils/generate-site');

const teamArr = [];

const promptStart = () => {
   console.log(`
   ======================
      Build Your Team:
   ======================
   `);
   //add manager
   return inquirer
     .prompt([
       {
         type: "input",
         name: "managerName",
         message: "What is the manager's name?",
         validate: (nameInput) => {
           if (nameInput) {
             return true;
           } else {
             console.log("Please enter a name.");
             return false;
           }
         },
       },
       {
         type: "input",
         name: "managerId",
         message: "What is their id?",
         validate: (idInput) => {
           if (idInput) {
             return true;
           } else {
             console.log("Please enter an id.");
             return false;
           }
         },
       },
       {
         type: "input",
         name: "managerEmail",
         message: "What is their email?",
         validate: (emailInput) => {
           if (emailInput) {
             return true;
           } else {
             console.log("Please enter an email.");
             return false;
           }
         },
       },
       {
         type: "input",
         name: "managerOfficeNumber",
         message: "What is their Office Number?",
         validate: (numberInput) => {
           if (numberInput) {
             return true;
           } else {
             console.log("Please enter an office number.");
             return false;
           }
         },
       },
     ])
     .then((res) => {
       const manager = new Manager(
         res.managerName,
         res.managerId,
         res.managerEmail,
         res.managerOfficeNumber
       );
       teamArr.push(manager);

       addTeamMembers();
     });
};

//prompt 
const addTeamMembers = () => {
   inquirer.prompt([
      {
         type: 'list',
         name: 'choice',
         message: 'Would you like to add members to your team?',
         choices: ['Engineer', 'Intern', new inquirer.Separator(), 'All Done, build my team!']
      }
   ])
   .then(res => {
      switch(res.choice) {
         case 'Engineer':
            return addEngineer();
         case 'Intern':
            return addIntern();
         default:
            return buildTeam();
      };
   });
};

//addEngineer
const addEngineer = () => {
   inquirer
     .prompt([
       {
         type: "input",
         name: "engineerName",
         message: "What is the engineer's name?",
         validate: (nameInput) => {
           if (nameInput) {
             return true;
           } else {
             console.log("Please enter a name.");
             return false;
           }
         },
       },
       {
         type: "input",
         name: "engineerId",
         message: "What is their id?",
         validate: (idInput) => {
           if (idInput) {
             return true;
           } else {
             console.log("Please enter an id.");
             return false;
           }
         },
       },
       {
         type: "input",
         name: "engineerEmail",
         message: "What is their email?",
         validate: (emailInput) => {
           if (emailInput) {
             return true;
           } else {
             console.log("Please enter an email.");
             return false;
           }
         },
       },
       {
         type: "input",
         name: "engineerGithub",
         message: "What is their Github username?",
         validate: (githubInput) => {
           if (githubInput) {
             return true;
           } else {
             console.log("Please enter a GitHub username.");
             return false;
           }
         },
       },
     ])
     .then((res) => {
       const engineer = new Engineer(
         res.engineerName,
         res.engineerId,
         res.engineerEmail,
         res.engineerGithub
       );
       teamArr.push(engineer);

       addTeamMembers();
     });
};

//addIntern
const addIntern = () => {
   inquirer
     .prompt([
       {
         type: "input",
         name: "internName",
         message: "What is the intern's name?",
         validate: (nameInput) => {
           if (nameInput) {
             return true;
           } else {
             console.log("Please enter a name.");
             return false;
           }
         },
       },
       {
         type: "input",
         name: "internId",
         message: "What is their id?",
         validate: (idInput) => {
           if (idInput) {
             return true;
           } else {
             console.log("Please enter an id.");
             return false;
           }
         },
       },
       {
         type: "input",
         name: "internEmail",
         message: "What is their email?",
         validate: (emailInput) => {
           if (emailInput) {
             return true;
           } else {
             console.log("Please enter an email.");
             return false;
           }
         },
       },
       {
         type: "input",
         name: "internSchool",
         message: "What school do they go to?",
         validate: (schoolInput) => {
           if (schoolInput) {
             return true;
           } else {
             console.log("Please enter a school.");
             return false;
           }
         },
       },
     ])
     .then((res) => {
       const intern = new Intern(
         res.internName,
         res.internId,
         res.internEmail,
         res.internSchool
       );
       teamArr.push(intern);

       addTeamMembers();
     });
};

//buildTeam
const buildTeam = () => {
   console.log(teamArr);
   writeFile(generatePage(teamArr));
};

promptStart();