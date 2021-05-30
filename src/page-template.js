function generatePage(team) {
   return `
   <!DOCTYPE html>
   <html lang="en">
      <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1">
         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
         <link rel="preconnect" href="https://fonts.gstatic.com">
         <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap" rel="stylesheet">
         <script src="https://kit.fontawesome.com/9990d29e32.js" crossorigin="anonymous"></script>
         <link rel="stylesheet" href="./style.css">
         <title>Team Profile</title>
      </head>
      <body>
         <header>
            <div class="jumbotron jumbotron-fluid>
               <div class="container">
                  <h1>My Team</h1>
               </div>
            </div>
         </header>
         <main class="container">
               <div id="team-cards" class="row d-flex flex-row-reverse">
                     ${teamCards(team)}
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
               <div class="col-sm-12 col-md-6 col-lg-3">
                  <div id="manager-card" class="card mb-3" style="max-width: 18rem;">
                     <div class="card-header">
                        <h4>${manager.getName()}</h4>
                        <h5 class="card-title"><i class="fas fa-jedi fa-sm"></i> ${manager.getRole()}</h5>
                     </div>
                     <div class="card-body text-dark">
                        <p class="card-text">ID: ${manager.getId()}</p>
                        <p class="card-text">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
                        <p class="card-text">Office Number: ${manager.getOfficeNumber()}</p>
                     </div>
                  </div>
               </div>
   `;
}
function engineerCard(engineer) {
   return `
               <div class="col-sm-12 col-md-6 col-lg-3">
                  <div id="engineer-card" class="card mb-3" style="max-width: 18rem;">
                     <div class="card-header">
                        <h4>${engineer.getName()}</h4>
                        <h5 class="card-title"><i class="fas fa-toolbox fa-sm"></i> ${engineer.getRole()}</h5>
                     </div>
                     <div class="card-body text-dark">
                        <p class="card-text">ID: ${engineer.getId()}</p>
                        <p class="card-text">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
                        <p class="card-text">Github: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></p>
                     </div>
                  </div>
               </div>
   `;
}
function internCard(intern) {
   return `
               <div class="col-sm-12 col-md-6 col-lg-3">
                  <div id="intern-card" class="card mb-3" style="max-width: 18rem;">
                     <div class="card-header">
                        <h4>${intern.getName()}</h4>
                        <h5 class="card-title"><i class="fas fa-user-graduate fa-sm"></i> ${intern.getRole()}</h5>
                     </div>
                     <div class="card-body text-dark">
                        <p class="card-text">ID: ${intern.getId()}</p>
                        <p class="card-text">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
                        <p class="card-text">School: ${intern.getSchool()}</p>
                     </div>
                  </div>
               </div>
   `;
}

module.exports = generatePage;