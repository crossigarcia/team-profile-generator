// Import Dependencies
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const teamArr = [];
// Add manager function
function addManager() {
   inquirer.prompt([
      {
         type: 'input',
         name: 'managerName',
         message: 'What is the manager name?'
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
function addTeamMembers() {
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

//addIntern

//finish