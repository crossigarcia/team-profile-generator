// Import Dependencies
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const teamArr = [];
// Add manager function
const addManager = () => {
   console.log(`
   ======================
      Build Your Team:
   ======================
   `);

   return inquirer.prompt([
      {
         type: 'input',
         name: 'managerName',
         message: "What is the manager's name?"
      },
      {
         type: 'input',
         name: 'managerId',
         message: 'What is their id?'
      },
      {
         type: 'input',
         name: 'managerEmail',
         message: 'What is their email?'
      },
      {
         type: 'input',
         name: 'managerOfficeNumber',
         message: 'What is their Office Number?'
      }

   ])
   .then(res => {
      const manager = new Manager(res.managerName, res.managerId, res.managerEmail, res.managerOfficeNumber);
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
         choices: ['Engineer', 'Intern', 'All Done, build my team!']
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
   inquirer.prompt([
      {
         type: 'input',
         name: 'engineerName',
         message: "What is the engineer's name?"
      },
      {
         type: 'input',
         name: 'engineerId',
         message: 'What is their id?'
      },
      {
         type: 'input',
         name: 'engineerEmail',
         message: 'What is their email?'
      },
      {
         type: 'input',
         name: 'engineerGithub',
         message: 'What is their Github username?'
      }

   ])
   .then(res => {
      const engineer = new Engineer(res.engineerName, res.engineerId, res.engineerEmail, res.engineerGithub);
      teamArr.push(engineer);

      addTeamMembers();
   });
};

//addIntern
const addIntern = () => {
   inquirer.prompt([
      {
         type: 'input',
         name: 'internName',
         message: "What is the intern's name?"
      },
      {
         type: 'input',
         name: 'internId',
         message: 'What is their id?'
      },
      {
         type: 'input',
         name: 'internEmail',
         message: 'What is their email?'
      },
      {
         type: 'input',
         name: 'internSchool',
         message: 'What school do they go to?'
      }

   ])
   .then(res => {
      const intern = new Intern(res.internName, res.internId, res.internEmail, res.internSchool);
      teamArr.push(intern);

      addTeamMembers();
   });
};

//buildTeam
// const buildTeam = () => {
//    fs.writeFile('./dist/team.html', )
// }

addManager();