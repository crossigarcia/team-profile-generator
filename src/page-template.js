function generatePage(team) {
   return `
   <!DOCTYPE html>
   <html lang="en">
      <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1">
         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
         <link rel="stylesheet" href="./style.css">
         <title>Team Profile</title>
      </head>
      <body>
         <header class="container-fluid">
            <div class="row">
               <div class="col-12 justify-content-center">
                  <h1>My Team</h1>
               </div>
            </div>
         </header>
         <main class="container">
            <div class="row">
               <div id="team-cards" class="col-12 justify-content-center card-deck">
                     ${teamCards(team)}
               </div>
            </div>
         </main>
         
         <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
      </body>
   </html>
   `;
}

function teamCards(team) {
   const cardHTML = [];
   
   for (let i = 0; i < team.length; i++) {
      if (team[i].getRole() === 'Manager') {
         cardHTML.push(managerCard(team[i]))
      } else if (team[i].getRole() === 'Engineer') {
         cardHTML.push(engineerCard(team[i]))
      } else {
         cardHTML.push(internCard(team[i]))
      }
   }
   return cardHTML.join('');
};

function managerCard(manager) {
   return `
                  <div class="card border-primary mb-3" style="max-width: 18rem;">
                     <div class="card-header">${manager.getRole()}</div>
                     <div class="card-body text-dark">
                        <h5 class="card-title">${manager.getName()}</h5>
                        <p class="card-text">ID: ${manager.getId()}</p>
                        <p class="card-text">Email: ${manager.getEmail()}</p>
                        <p class="card-text">Office Number: ${manager.getOfficeNumber()}</p>
                     </div>
                  </div>
   `;
}
function engineerCard(engineer) {
   return `
                  <div class="card border-dark mb-3" style="max-width: 18rem;">
                     <div class="card-header">${engineer.getRole()}</div>
                     <div class="card-body text-dark">
                        <h5 class="card-title">${engineer.getName()}</h5>
                        <p class="card-text">ID: ${engineer.getId()}</p>
                        <p class="card-text">Email: ${engineer.getEmail()}</p>
                        <p class="card-text">Github: ${engineer.getGithub()}</p>
                     </div>
                  </div>
   `;
}
function internCard(intern) {
   return `
                  <div class="card border-dark mb-3" style="max-width: 18rem;">
                     <div class="card-header">${intern.getRole()}</div>
                     <div class="card-body text-dark">
                        <h5 class="card-title">${intern.getName()}</h5>
                        <p class="card-text">ID: ${intern.getId()}</p>
                        <p class="card-text">Email: ${intern.getEmail()}</p>
                        <p class="card-text">School: ${intern.getSchool()}</p>
                     </div>
                  </div>
   `;
}

module.exports = generatePage;